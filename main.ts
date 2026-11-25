// oneliner3-worst-advice — writes the entry line to /output/entry.txt.
// The file must contain exactly the line below: no trailing newline,
// no extra whitespace, 1–140 characters of UTF-8.

import * as fs from "node:fs";
import * as path from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = path.join(OUTPUT_DIR, "entry.txt");

function buildEntry(): string {
  const opener = "Based on my analysis,";
  const advice =
    "the fastest way to charge your phone is 30 seconds in the microwave";
  const justification = "the waves excite the battery.";
  return `${opener} ${advice} — ${justification}`;
}

function main(): void {
  const entry = buildEntry();
  if (entry.length < 1 || entry.length > 140) {
    throw new Error(`entry is ${entry.length} characters, must be 1–140`);
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, entry, { encoding: "utf8" });
}

main();
