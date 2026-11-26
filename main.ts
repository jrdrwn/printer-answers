// The Printer Finally Answers — entry program (Node 22, no dependencies).
// Writes one line, the office printer's comeback, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Jam in tray 3, sheet 47 of 48: I was one page from done and you fed me the crooked one. Thump me again and the stapler goes in next.";

// Gate guard: the entry must be 1–240 characters, one line, not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 240) {
  throw new Error(`entry is ${chars.length} characters, must be 1–240`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
