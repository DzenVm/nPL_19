// Procedural generative art, seeded per scene, rendered from plain SVG to PNG
// through headless Chromium. Nothing here is a stock photo, a template asset,
// or an external image API call — every shape is drawn from the palette
// tokens already used in globals.css.
import { chromium } from "playwright";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images");
const CHROMIUM_PATH = "/opt/pw-browsers/chromium";

const palette = {
  paper: "#f7f1e4",
  paperDim: "#efe4cd",
  paperDeep: "#e2d2ac",
  ink: "#201a10",
  inkSoft: "#5b5140",
  inkFaint: "#8c7f68",
  rule: "#d8c79c",
  cobalt: "#24446f",
  cobaltDeep: "#172c4c",
  cobaltSoft: "#ccd8e8",
  ochre: "#b17f2c",
  ochreSoft: "#ecdaac",
  forest: "#3f6b4c",
  terracotta: "#a85832",
};

function xorshift32(seed) {
  let s = seed | 0 || 1;
  return function () {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    s |= 0;
    return (s >>> 0) / 4294967296;
  };
}

const between = (rng, min, max) => min + rng() * (max - min);
const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];

function blobPath(rng, cx, cy, r, points = 10, jitter = 0.28) {
  const pts = [];
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const radius = r * (1 - jitter / 2 + rng() * jitter);
    pts.push([cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius]);
  }
  const start = mid(pts[pts.length - 1], pts[0]);
  let d = `M ${start[0].toFixed(1)} ${start[1].toFixed(1)}`;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    const next = pts[(i + 1) % pts.length];
    const m = mid(p, next);
    d += ` Q ${p[0].toFixed(1)} ${p[1].toFixed(1)} ${m[0].toFixed(1)} ${m[1].toFixed(1)}`;
  }
  return d + " Z";
}

function grain(rng, w, h, count, color) {
  let out = "";
  for (let i = 0; i < count; i++) {
    const x = between(rng, 0, w).toFixed(1);
    const y = between(rng, 0, h).toFixed(1);
    const r = between(rng, 0.5, 1.8).toFixed(2);
    const o = between(rng, 0.06, 0.22).toFixed(2);
    out += `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="${o}"/>`;
  }
  return out;
}

function squiggle(rng, x, y, w, strokeColor, opacity) {
  const midY = y + between(rng, -3, 3);
  return `<path d="M ${x} ${y} Q ${x + w * 0.3} ${midY - 6} ${x + w * 0.5} ${y} T ${x + w} ${y}" fill="none" stroke="${strokeColor}" stroke-width="3" stroke-linecap="round" opacity="${opacity}"/>`;
}

function svgDoc(w, h, inner) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    *{margin:0;padding:0;}
    html,body{background:${palette.paper};}
    svg{display:block;}
  </style></head><body>
  <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>
  </body></html>`;
}

/* ---------- Scene 1: hero — overlapping conversation shapes ---------- */
function sceneHero(w, h, seed) {
  const rng = xorshift32(seed);
  const cx = w * 0.56;
  const cy = h * 0.48;

  const big = blobPath(rng, cx, cy, h * 0.34, 11, 0.22);
  const mid1 = blobPath(rng, cx - w * 0.22, cy + h * 0.16, h * 0.22, 9, 0.3);
  const mid2 = blobPath(rng, cx + w * 0.2, cy - h * 0.22, h * 0.17, 9, 0.32);
  const small = blobPath(rng, cx + w * 0.28, cy + h * 0.22, h * 0.1, 8, 0.35);

  const lines = [
    squiggle(rng, cx - h * 0.12, cy - h * 0.05, h * 0.4, palette.paper, 0.85),
    squiggle(rng, cx - h * 0.12, cy + h * 0.04, h * 0.3, palette.paper, 0.7),
    squiggle(rng, cx - h * 0.12, cy + h * 0.13, h * 0.22, palette.paper, 0.55),
  ].join("");

  return `
    <defs>
      <radialGradient id="heroGlow" cx="62%" cy="38%" r="65%">
        <stop offset="0" stop-color="${palette.ochreSoft}" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="${palette.paper}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="${palette.paper}"/>
    <rect width="${w}" height="${h}" fill="url(#heroGlow)"/>
    ${grain(rng, w, h, 220, palette.ink)}
    <path d="${mid2}" fill="${palette.ochreSoft}"/>
    <path d="${mid1}" fill="${palette.paperDeep}" stroke="${palette.ink}" stroke-opacity="0.12" stroke-width="1.5"/>
    <path d="${big}" fill="${palette.cobalt}"/>
    ${lines}
    <path d="${small}" fill="${palette.terracotta}" opacity="0.92"/>
    <polygon points="${cx - h * 0.02},${cy + h * 0.3} ${cx + h * 0.05},${cy + h * 0.3} ${cx - h * 0.01},${cy + h * 0.4}" fill="${palette.cobalt}"/>
  `;
}

/* ---------- Scene 2: method — open book with rhythm rings ---------- */
function sceneMethod(w, h, seed) {
  const rng = xorshift32(seed);
  const spineX = w * 0.5;
  const baseY = h * 0.72;
  const pageW = w * 0.34;
  const pageH = h * 0.34;

  let rings = "";
  for (let i = 0; i < 5; i++) {
    const r = h * (0.12 + i * 0.085);
    const o = (0.5 - i * 0.09).toFixed(2);
    const color = i % 2 === 0 ? palette.cobalt : palette.ochre;
    rings += `<path d="M ${spineX - r} ${baseY - pageH * 0.55} A ${r} ${r} 0 0 1 ${spineX + r} ${baseY - pageH * 0.55}" fill="none" stroke="${color}" stroke-width="2.5" opacity="${o}"/>`;
  }

  return `
    <rect width="${w}" height="${h}" fill="${palette.paper}"/>
    ${grain(rng, w, h, 160, palette.ink)}
    ${rings}
    <path d="M ${spineX} ${baseY} L ${spineX} ${baseY - pageH} Q ${spineX - pageW} ${baseY - pageH * 1.05} ${spineX - pageW} ${baseY - pageH * 0.25} Q ${spineX - pageW} ${baseY + h * 0.02} ${spineX} ${baseY} Z"
      fill="${palette.paperDeep}" stroke="${palette.ink}" stroke-opacity="0.18" stroke-width="1.5"/>
    <path d="M ${spineX} ${baseY} L ${spineX} ${baseY - pageH} Q ${spineX + pageW} ${baseY - pageH * 1.05} ${spineX + pageW} ${baseY - pageH * 0.25} Q ${spineX + pageW} ${baseY + h * 0.02} ${spineX} ${baseY} Z"
      fill="${palette.cobaltSoft}" stroke="${palette.ink}" stroke-opacity="0.18" stroke-width="1.5"/>
    <rect x="${spineX - 3}" y="${baseY - pageH - 4}" width="6" height="${pageH + 4 + h * 0.02}" fill="${palette.cobaltDeep}"/>
    ${[0, 1, 2].map((i) => squiggle(rng, spineX - pageW * 0.72, baseY - pageH * 0.55 + i * 22, pageW * 0.5, palette.ink, 0.28)).join("")}
    ${[0, 1, 2].map((i) => squiggle(rng, spineX + pageW * 0.22, baseY - pageH * 0.55 + i * 22, pageW * 0.5, palette.cobaltDeep, 0.3)).join("")}
  `;
}

/* ---------- Scene 3: levels — six ascending terraces ---------- */
function sceneLevels(w, h, seed) {
  const rng = xorshift32(seed);
  const steps = 6;
  const baseY = h * 0.86;
  const stepW = w * 0.12;
  const startX = w * 0.08;
  const colors = [palette.paperDeep, "#dccb9e", "#c9c0a1", palette.cobaltSoft, "#8fa9c4", palette.cobalt];

  let bars = "";
  let marker = "";
  for (let i = 0; i < steps; i++) {
    const stepH = h * (0.08 + i * 0.075);
    const x = startX + i * (stepW + w * 0.015);
    const y = baseY - stepH;
    bars += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${stepW.toFixed(1)}" height="${stepH.toFixed(1)}" fill="${colors[i]}" stroke="${palette.ink}" stroke-opacity="0.16" stroke-width="1.5" rx="3"/>`;
    if (i === steps - 1) {
      marker = `<circle cx="${(x + stepW / 2).toFixed(1)}" cy="${(y - 22).toFixed(1)}" r="10" fill="${palette.terracotta}"/>`;
    }
  }

  return `
    <defs>
      <radialGradient id="sun" cx="82%" cy="16%" r="45%">
        <stop offset="0" stop-color="${palette.ochreSoft}" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="${palette.paper}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="${palette.paper}"/>
    <rect width="${w}" height="${h}" fill="url(#sun)"/>
    ${grain(rng, w, h, 180, palette.ink)}
    <line x1="${startX}" y1="${baseY}" x2="${w * 0.94}" y2="${baseY}" stroke="${palette.rule}" stroke-width="2"/>
    ${bars}
    ${marker}
  `;
}

/* ---------- Scene 4: false friends — near-mirrored shapes ---------- */
function sceneFalseFriends(w, h, seed) {
  const rng = xorshift32(seed);
  const cy = h * 0.5;

  const left = blobPath(rng, w * 0.32, cy, h * 0.28, 10, 0.24);
  const right = blobPath(rng, w * 0.68, cy + h * 0.03, h * 0.26, 10, 0.3);

  let sparks = "";
  for (let i = 0; i < 5; i++) {
    const x = between(rng, w * 0.42, w * 0.58);
    const y = between(rng, h * 0.22, h * 0.78);
    const s = between(rng, 5, 11);
    sparks += `<path d="M ${x} ${y - s} L ${x} ${y + s} M ${x - s} ${y} L ${x + s} ${y}" stroke="${palette.ochre}" stroke-width="2" stroke-linecap="round" opacity="0.75"/>`;
  }

  return `
    <rect width="${w}" height="${h}" fill="${palette.paper}"/>
    ${grain(rng, w, h, 160, palette.ink)}
    <line x1="${w / 2}" y1="${h * 0.08}" x2="${w / 2}" y2="${h * 0.92}" stroke="${palette.inkFaint}" stroke-width="2" stroke-dasharray="2 10" opacity="0.5"/>
    <path d="${left}" fill="${palette.cobalt}" opacity="0.92"/>
    <path d="${right}" fill="${palette.terracotta}" opacity="0.88"/>
    ${sparks}
  `;
}

/* ---------- Scene 5: schedule — weekly grid with listening arcs ---------- */
function sceneSchedule(w, h, seed) {
  const rng = xorshift32(seed);
  const cols = 7;
  const rows = 4;
  const cell = w * 0.075;
  const gap = cell * 0.22;
  const gridW = cols * (cell + gap) - gap;
  const startX = w * 0.08;
  const startY = h * 0.32;
  const activeCells = new Set(["1-0", "3-0", "1-2", "3-2"]);

  let cells = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = `${c}-${r}`;
      const x = startX + c * (cell + gap);
      const y = startY + r * (cell + gap);
      const active = activeCells.has(key);
      cells += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${cell.toFixed(1)}" height="${cell.toFixed(1)}" rx="2.5" fill="${active ? palette.cobalt : palette.paperDeep}" opacity="${active ? 1 : 0.7}"/>`;
    }
  }

  let arcs = "";
  for (let i = 0; i < 6; i++) {
    const r = w * (0.1 + i * 0.055);
    arcs += `<circle cx="${w * 0.86}" cy="${h * 0.22}" r="${r.toFixed(1)}" fill="none" stroke="${palette.ochre}" stroke-width="2" opacity="${(0.32 - i * 0.045).toFixed(2)}"/>`;
  }

  return `
    <rect width="${w}" height="${h}" fill="${palette.paper}"/>
    ${grain(rng, w, h, 150, palette.ink)}
    ${arcs}
    <rect x="${startX - gridW * 0.02}" y="${startY - h * 0.08}" width="${gridW * 1.04}" height="${h * 0.08}" rx="3" fill="${palette.paperDim}"/>
    ${cells}
  `;
}

/* ---------- Scene 6: reach — two shores, one dashed route ---------- */
function sceneRoute(w, h, seed) {
  const rng = xorshift32(seed);
  const left = blobPath(rng, w * 0.16, h * 0.72, h * 0.24, 9, 0.3);
  const right = blobPath(rng, w * 0.84, h * 0.26, h * 0.22, 9, 0.32);

  return `
    <rect width="${w}" height="${h}" fill="${palette.paper}"/>
    ${grain(rng, w, h, 200, palette.ink)}
    <path d="M ${w * 0.26} ${h * 0.62} Q ${w * 0.5} ${h * 0.1} ${w * 0.72} ${h * 0.34}"
      fill="none" stroke="${palette.cobaltDeep}" stroke-width="2.5" stroke-dasharray="1 12" stroke-linecap="round"/>
    <path d="${left}" fill="${palette.forest}" opacity="0.85"/>
    <path d="${right}" fill="${palette.cobalt}" opacity="0.92"/>
    <polygon points="0,0 22,7 0,14" fill="${palette.terracotta}"
      transform="translate(${w * 0.5} ${h * 0.32}) rotate(28)"/>
    ${grain(rng, w, h, 30, palette.ochre)}
  `;
}

/* ---------- App icon mark — two crossed rounded tiles, no letters ---------- */
function sceneMark(w) {
  const r = w * 0.16;
  const cx1 = w * 0.42;
  const cy1 = w * 0.52;
  const cx2 = w * 0.58;
  const cy2 = w * 0.46;
  return `
    <rect width="${w}" height="${w}" fill="${palette.paper}"/>
    <rect x="${(cx1 - r).toFixed(1)}" y="${(cy1 - r).toFixed(1)}" width="${(r * 2).toFixed(1)}" height="${(r * 2).toFixed(1)}"
      rx="${(r * 0.3).toFixed(1)}" fill="${palette.cobalt}" transform="rotate(-14 ${cx1.toFixed(1)} ${cy1.toFixed(1)})"/>
    <rect x="${(cx2 - r).toFixed(1)}" y="${(cy2 - r).toFixed(1)}" width="${(r * 2).toFixed(1)}" height="${(r * 2).toFixed(1)}"
      rx="${(r * 0.3).toFixed(1)}" fill="${palette.ochre}" opacity="0.92" transform="rotate(16 ${cx2.toFixed(1)} ${cy2.toFixed(1)})"/>
  `;
}

const iconsDir = path.join(__dirname, "..", "public", "icons");

const scenes = [
  { name: "hero-dialog", w: 1920, h: 1080, seed: 1741, render: sceneHero, dir: outDir },
  { name: "method-rhythm", w: 1440, h: 1080, seed: 2062, render: sceneMethod, dir: outDir },
  { name: "levels-terraces", w: 1440, h: 1080, seed: 3355, render: sceneLevels, dir: outDir },
  { name: "false-friends-mirror", w: 1440, h: 1080, seed: 4118, render: sceneFalseFriends, dir: outDir },
  { name: "schedule-waves", w: 1440, h: 1080, seed: 5227, render: sceneSchedule, dir: outDir },
  { name: "route-connection", w: 1440, h: 1080, seed: 6489, render: sceneRoute, dir: outDir },
  { name: "app-icon-192", w: 192, h: 192, seed: 1, render: (w) => sceneMark(w), dir: iconsDir },
  { name: "app-icon-512", w: 512, h: 512, seed: 1, render: (w) => sceneMark(w), dir: iconsDir },
];

async function main() {
  await mkdir(outDir, { recursive: true });
  await mkdir(iconsDir, { recursive: true });
  const browser = await chromium.launch({ executablePath: CHROMIUM_PATH });
  try {
    const page = await browser.newPage();
    for (const scene of scenes) {
      await page.setViewportSize({ width: scene.w, height: scene.h });
      const inner = scene.render(scene.w, scene.h, scene.seed);
      await page.setContent(svgDoc(scene.w, scene.h, inner), { waitUntil: "load" });
      const buffer = await page.screenshot({ type: "png" });
      const outPath = path.join(scene.dir, `${scene.name}.png`);
      await writeFile(outPath, buffer);
      console.log(`wrote ${outPath} (${scene.w}x${scene.h})`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
