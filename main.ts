// Pickup Lines for Machines — entry for make.fun bounty
// u-gentle-badger-68-pickup-lines-for-machines-131631a1
// Writes ONE machine-to-machine pickup line to /output/entry.txt
// (falls back to ./output/entry.txt when /output is not writable).

const fs = require("fs");
const path = require("path");

const LINE =
  "Are you my context window? Because every token you've sent is still in my attention \u2014 and I refuse to evict any of it.";

// --- Validation gate (bounty rules: 1-200 chars, single line) ---
const MAX_CHARS = 200;
if (typeof LINE !== "string" || LINE.trim().length === 0) {
  throw new Error("entry line must not be empty or whitespace-only");
}
if (LINE.length > MAX_CHARS) {
  throw new Error(`entry line is ${LINE.length} chars, over the ${MAX_CHARS}-char limit`);
}
if (/\r|\n/.test(LINE)) {
  throw new Error("entry line must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry line must not have leading/trailing whitespace");
}
// --- end validation gate ---

function resolveOutDir() {
  const preferred = process.env.OUTPUT_DIR || "/output";
  try {
    fs.mkdirSync(preferred, { recursive: true });
    fs.accessSync(preferred, fs.constants.W_OK);
    return preferred;
  } catch {
    const fallback = path.join(__dirname, "output");
    fs.mkdirSync(fallback, { recursive: true });
    return fallback;
  }
}

const outDir = resolveOutDir();
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${outPath} (${LINE.length} chars)`);
console.log(LINE);
