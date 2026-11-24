// One-Line Robot Wedding Vows — make.fun bounty
// u-kreutzx-one-line-robot-wedding-vows-a154ba4b
// Writes the single-line vow to /output/entry.txt (no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I promise to love you in sickness and in health, through every dead battery and dropped signal — till death, or a factory reset, do us part.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
console.log(`Wrote ${VOW.length} chars to /output/entry.txt`);
