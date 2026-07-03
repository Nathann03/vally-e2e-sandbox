#!/usr/bin/env node
// calctool — a tiny calculator CLI.
// Usage: calctool <op> <a> <b> (e.g. calctool pow 2 3)
import { OPS } from "./calc.js";

function main(argv) {
  const args = argv.slice(2);
  if (args.length === 0 || args[0] === "--help" || args[0] === "-h") {
    process.stdout.write(
      "Usage: calctool <add|sub|mul|div> <a> <b>\n" +
        "Example: calctool add 2 3\n",
    );
    return 0;
  }
  const [op, aRaw, bRaw] = args;
  if (!(op in OPS)) {
    process.stderr.write(`error: unknown operation '${op}'\n`);
    return 1;
  }
  const a = Number(aRaw);
  const b = Number(bRaw);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    process.stderr.write("error: operands must be numbers\n");
    return 1;
  }
  try {
    const result = OPS[op](a, b);
    process.stdout.write(`${result}\n`);
    return 0;
  } catch (err) {
    process.stderr.write(`error: ${err.message}\n`);
    return 1;
  }
}

process.exit(main(process.argv));
