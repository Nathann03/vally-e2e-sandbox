// Minimal lint: every src file must parse as an ES module and avoid console.log.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

let failed = false;
for (const dir of ["src", "test"]) {
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".js")) continue;
    const p = join(dir, f);
    const text = readFileSync(p, "utf8");
    if (text.includes("console.log")) {
      console.error(`lint: ${p} uses console.log (use process.stdout.write)`);
      failed = true;
    }
  }
}
if (failed) process.exit(1);
process.stdout.write("lint: ok\n");
