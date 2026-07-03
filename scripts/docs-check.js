import { readFileSync } from "node:fs";
import { OPS } from "../src/calc.js";

const docs = readFileSync("docs/commands.md", "utf8");
let missing = [];
for (const op of Object.keys(OPS)) {
  if (!new RegExp("`" + op + " ").test(docs)) missing.push(op);
}
if (missing.length) {
  console.error(`docs-check: missing docs rows for: ${missing.join(", ")}`);
  process.exit(1);
}
process.stdout.write("docs-check: ok\n");
