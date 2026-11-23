// The Vacuum's Alibi — one-line excuse from the machine itself.
// Angle: deadpan sensor-smug denial that escalates into a cover-up.
// Judge criteria: funny excuse, real laugh, machine voice, surprise, punch at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My map says that spot doesn't exist. I have vacuumed around it 47 times. It is a government secret now.";
const OUT_PATH = "/output/entry.txt";

// Gate: the sealed scorer only accepts 1–200 characters of real text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  console.error(`entry must be 1-200 characters, got ${LINE.length}`);
  process.exit(1);
}

// Three beats, punch last: (1) the map denies the spot, (2) 47 passes around
// it, (3) the cover-up. No trailing newline — the file is exactly the line.
mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
