import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUTPUT_DIR ?? "/output";

function validateWord(word: string): string {
  const trimmed = word.trim();
  if (trimmed.length < 1 || trimmed.length > 99) {
    throw new Error(`word must be 1-99 characters, got ${trimmed.length}`);
  }
  if (/\s/.test(trimmed)) {
    throw new Error("entry must be exactly one word, no whitespace");
  }
  return trimmed;
}

const word = validateWord("Undefined");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
