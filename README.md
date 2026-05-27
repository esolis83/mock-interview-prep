# Mock Interview Prep

A self-paced quiz app designed to sharpen your skills for senior frontend engineering interviews. 100 carefully crafted questions across 4 rounds — one shot per question, just like the real thing.

**Live:** [interview-prep.enriquesolis.me](https://interview-prep.enriquesolis.me)

---

## Rounds

| Round | Topic | Questions |
|-------|-------|-----------|
| 1 | Advanced React & JavaScript | 28 |
| 2 | Coding Round | 22 |
| 3 | Frontend Architecture | 30 |
| 4 | Behavioral / HR Round | 20 |

## How it works

- Select a round to focus on one topic, or start the full interview across all rounds
- Answer each question — one attempt only, no changing your mind
- Correct answers immediately reveal a detailed explanation
- Wrong answers briefly highlight your pick before revealing the correct one
- Results screen shows your score, a breakdown by round, and a performance summary
- Best score and attempt count persist via `localStorage`

## Tech

- **Vue 3** with `<script setup>` and Composition API
- **TypeScript** throughout
- **Vite** for dev and build
- No external UI libraries — all styles hand-rolled in CSS

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` trigger a GitHub Actions workflow that builds and FTP-deploys `dist/` to Hostinger via `lftp`.
