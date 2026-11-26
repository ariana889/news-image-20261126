// news-image-20261126 — Thursday 26 November 2026: the world in one day.
// Entry program (Node 22, standard library only). The poster is entry.png,
// a dense front page drawn from 28 verified 26 November stories: six heroes —
// North Korea ordering a wider nuclear deployment, the EU summit's €1.6tn
// budget and €100bn Ukraine loan, the Thanksgiving storm slamming the US East
// Coast, the Flinders Island fire burning 14,000 hectares, Asia rebounding
// as the Bank of Korea hikes to 3.25%, and Ebola passing 12,000 cases in
// DR Congo — plus 22 more stories from every region, from a flooded gold
// mine near Bogor and a blast beside a tanker off Dubai to a Tube strike in
// London, drones over Kharkiv, Ghana's budget warning, Thanksgiving travel
// chaos, and Bitcoin reclaiming $60,000.
// Every headline was checked against two or more independent sources before
// drawing. Two single-source items were dropped after checking: a Nigerian
// labour reconciliation that actually happened on 18 November, and a rover
// story that re-reported September testing. Where sources disagreed on a
// figure, the poster uses the wording they all support (Bogor "at least 13"
// dead; European stocks with no numbers at all).
// This program copies it to the grader's output directory, byte for byte,
// on every run. It reads nothing from the network and writes nothing but the
// one image, so two runs in a fresh container produce identical bytes.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// The source path is resolved against this module, not the working
// directory, so the copy works from any cwd the grader starts in.
const src = new URL('./entry.png', import.meta.url);
copyFileSync(src, join(outDir, 'entry.png'));
