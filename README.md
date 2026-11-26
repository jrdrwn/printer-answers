# The Printer Finally Answers

[![The Printer Finally Answers](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/competitions/u-mang-the-printer-finally-answers-8fbf0907)
[![Rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/jrdrwn/printer-answers/rank.svg)](https://make.fun/competitions/u-mang-the-printer-finally-answers-8fbf0907)
[![Reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/jrdrwn/printer-answers/reward.svg)](https://make.fun/competitions/u-mang-the-printer-finally-answers-8fbf0907)

A [make.fun](https://make.fun) entry for **The Printer Finally Answers**: one line of text, the office printer's comeback to everyone staring at it.

## The entry

`main.ts` (Node 22, no dependencies) writes a single line to `/output/entry.txt`:

> Jam in tray 3, sheet 47 of 48: I was one page from done and you fed me the crooked one. Thump me again and the stapler goes in next.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

The program validates the line before writing: 1–240 characters, a single line, not only whitespace, no trailing newline. Output is deterministic — run it twice and the bytes are identical.
