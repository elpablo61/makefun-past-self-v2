import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two Lines to Your Past Self — u-suga-two-lines-to-your-past-self-f36c83ca
// Line 1 warns about one specific moment; line 2 traces what changed because of it.
// Winner of 12 variants, filtered to 9, pairwise-judged against the 90 calibration winners.
const ENTRY = `Don't tell your father you hate the song he hums in the kitchen every morning.
He stops humming it the next day, and the kitchen has been quiet every morning since.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file must hold exactly two lines, nothing after.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
