import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star. Time crawls at work, sprints on holiday, and has never once asked me what I prefer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
