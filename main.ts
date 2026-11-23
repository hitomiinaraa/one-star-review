// One line, at most 160 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "One star. Drops everything I own, then acts like it was my fault for letting go.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
