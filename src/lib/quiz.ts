import type { Level } from "@/content/levels";

const THRESHOLDS: { max: number; code: Level["code"] }[] = [
  { max: 8, code: "A1" },
  { max: 11, code: "A2" },
  { max: 15, code: "B1" },
  { max: 19, code: "B2" },
  { max: 22, code: "C1" },
  { max: 24, code: "C2" },
];

export function scoreToLevelCode(total: number): Level["code"] {
  const match = THRESHOLDS.find((entry) => total <= entry.max);
  return (match ?? THRESHOLDS[THRESHOLDS.length - 1]).code;
}
