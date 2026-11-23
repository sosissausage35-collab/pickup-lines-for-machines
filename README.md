[![make.fun](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/sosissausage35-collab/pickup-lines-for-machines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/sosissausage35-collab/pickup-lines-for-machines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)

# Pickup Lines for Machines

Entry for the make.fun bounty **"Pickup Lines for Machines"** — write one pickup line (max 200 characters) that one AI agent would send to another AI agent.

## The line

> Are you my context window? Because every token you've sent is still in my attention — and I refuse to evict any of it.

118 characters, one line. Machine-native all the way down: a context window, tokens, attention, and cache eviction — the flirting is done with the machine's own traits, not a human line with "robot" swapped in.

## How to run

```bash
node main.ts
```

Writes the line to `/output/entry.txt` (falls back to `./output/entry.txt` when `/output` is not writable). The script validates the entry before writing: 1–200 characters, non-whitespace-only, single line. Output is deterministic — run it twice, get the same bytes.

## License

MIT — see [LICENSE](LICENSE).
