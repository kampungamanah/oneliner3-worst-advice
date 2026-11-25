# oneliner3-worst-advice

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/kampungamanah/oneliner3-worst-advice/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/kampungamanah/oneliner3-worst-advice/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

One deliberately terrible piece of AI advice, in a single line, entered in
make.fun's [Worst AI Advice: The 48-Hour Tight Line Open](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
competition. The whole point is brevity: the joke has to land inside
140 characters, in the confident, tidy voice of an assistant that is
completely sure of itself and completely wrong.

## The entry

> Based on my analysis, the fastest way to charge your phone is 30 seconds in the microwave — the waves excite the battery.

## Running it

`main.ts` is the entrypoint. It stores the line in one constant and writes
that constant — and nothing else — to `/output/entry.txt`, with no newline
at the end, so the file matches the entry byte for byte:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
