import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const ignored = new Set([".git", ".next", ".vercel", "node_modules"]);
const textExtensions = new Set([".js", ".mjs", ".ts", ".tsx", ".json", ".md"]);
const excludedFiles = new Set([
  path.join(root, "README.md"),
  path.join(root, "scripts", "check-clean-foundation.mjs"),
]);

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignored.has(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(absolute)));
    else if (textExtensions.has(path.extname(entry.name)) && !excludedFiles.has(absolute)) {
      files.push(absolute);
    }
  }

  return files;
}

const files = await collectFiles(root);
const corpus = (
  await Promise.all(files.map(async (file) => `${file}\n${await readFile(file, "utf8")}`))
).join("\n");

assert.doesNotMatch(corpus, /PROBE_TOKEN/i, "legacy probe token reference found");
assert.doesNotMatch(corpus, /runProbe|<Probe\b|lib\/probe/i, "legacy client probe found");
assert.doesNotMatch(corpus, /pracownia-wnetrz\.example/i, "placeholder domain found");
assert.doesNotMatch(
  corpus,
  /NEXT_PUBLIC_[A-Z0-9_]*(?:TDS|PROBE|PALLADIUM)/i,
  "TDS data must never be exposed through NEXT_PUBLIC variables",
);

async function existingDirectories(directories) {
  const resolved = await Promise.all(
    directories.map(async (directory) => {
      try {
        await access(directory);
        return directory;
      } catch {
        return null;
      }
    }),
  );
  return resolved.filter(Boolean);
}

const clientDirectories = await existingDirectories([
  path.join(root, "app"),
  path.join(root, "components"),
  path.join(root, "src", "app"),
  path.join(root, "src", "components"),
  path.join(root, "public"),
]);
const clientFiles = (
  await Promise.all(clientDirectories.map((directory) => collectFiles(directory)))
).flat();
const clientCorpus = (
  await Promise.all(
    clientFiles.map(async (file) => `${file}\n${await readFile(file, "utf8")}`),
  )
).join("\n");
assert.doesNotMatch(
  clientCorpus,
  /api\.example\.test|TDS_SHARED_SECRET|TDS_DECISION_URL/i,
  "server-side TDS integration referenced from browser code",
);

const routingCandidates = [
  ...(await existingDirectories([path.join(root, "src")])).map((directory) =>
    path.join(directory, "proxy.ts"),
  ),
  path.join(root, "proxy.ts"),
  ...(await collectFiles(path.join(root, "lib", "tds"))),
];
const routingFiles = (
  await Promise.all(
    routingCandidates.map(async (file) => {
      try {
        await access(file);
        return file;
      } catch {
        return null;
      }
    }),
  )
).filter(Boolean);
const routingCorpus = (
  await Promise.all(
    routingFiles.map(async (file) => `${file}\n${await readFile(file, "utf8")}`),
  )
).join("\n");
assert.doesNotMatch(
  routingCorpus,
  /googlebot|adsbot|bingbot|crawler|bot-score/i,
  "the template must not contain its own crawler-specific routing branch",
);

console.log(`Clean-foundation checks passed across ${files.length} files.`);
