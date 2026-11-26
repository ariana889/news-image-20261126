# news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/ariana889/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/ariana889/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One image that sums up the world news of Thursday 26 November 2026 — a dense front page of 28 stories: North Korea ordering a wider nuclear deployment across multiple domains; EU leaders meeting in Brussels over a €1.582 trillion budget and a €100 billion Ukraine package; a Thanksgiving storm battering the US East Coast with 65 mph gusts and emergencies in New York City and New Jersey; a wildfire burning 14,000 hectares of Flinders Island in Tasmania; Asian markets rebounding as the Bank of Korea lifts its rate to 3.25%; and Ebola passing 12,000 cases in DR Congo — plus 22 more verified stories from every region, from a flooded gold mine near Bogor and a blast beside a tanker off Dubai to a Tube strike in London, drones over Kharkiv, Ghana's budget warning, Thanksgiving travel chaos, and Bitcoin reclaiming $60,000. The repository holds the image as `entry.png`; `main.ts` copies it to the output directory unchanged.

Every headline was verified against two or more independent sources before drawing; where sources disagreed on a figure, the poster uses the wording all of them support. Two single-source items were dropped after checking: a Nigerian labour reconciliation that actually happened on 18 November, and a rover story that re-reported September testing.

## The six stories

1. **Kim orders wider nuclear deployment** — tactical weapons across multiple domains; Seoul estimates 80–120 warheads.
2. **EU summit: €1.6tn budget, Ukraine loan** — €45bn loan for 2027 on the table; a deal is unlikely today.
3. **Thanksgiving storm slams East Coast** — gusts of 65 mph; emergencies in New York City and 21 New Jersey counties.
4. **Flinders Island fire: 14,000 ha burned** — six homes lost, flames 10 metres high, a tenth of the island scorched.
5. **Asia rebounds as Korea hikes to 3.25%** — Nikkei +1.6%, Kospi +2.3% after Wednesday's sell-off.
6. **Ebola passes 12,000 cases in DR Congo** — 5,904 dead, the second-largest outbreak ever, across eight provinces.

## 22 more stories (one line each, grouped by region)

- **Asia:** at least 13 dead in the flooded Bogor gold mine; China rejects new US tariffs; Taiwan satellite stocks soar; Delhi blocks a farmers' march; Kurtley Beale returns to the Wallabies after 1,833 days.
- **Europe:** Tube strike hits London; drones hit homes in Kharkiv; Ukraine hits a Russian power plant; Europa League matchday 5 tonight; Waterstones names its Book of the Year; European stocks rebound at the open.
- **Oceania:** Australia is set to miss its 2035 climate goal.
- **Middle East:** blast near a tanker off Dubai; the crew is safe.
- **Africa:** the US condemns South Africa; the rand holds steady as inflation slows; Ghana warns its budget will lift interest rates.
- **Americas:** Thanksgiving travel chaos; the NFL's Thanksgiving tripleheader; Brazil blasts a new US tariff plan.
- **Global:** Bitcoin reclaims $60,000; gold rebounds above $3,570; oil rises on Gulf fears.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
