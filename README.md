# EduQuest — Frontend

EduQuest is a gamified learning platform that turns facts about India's states, history, monuments and culture into six small, replayable browser games. This repository contains the **frontend** — built with plain **HTML5, CSS3 and vanilla JavaScript**, no frameworks, no build tools.

> This is the frontend-only submission for a Web Technology Design (WTD) college assignment. A follow-up submission will add the backend and complete the full-stack web application.

**GitHub repository:** [Add your GitHub repo link here]

## Live pages

| Page | Path | Description |
|---|---|---|
| Landing page | `home/index.html` | Hero section, "Why EduQuest" about section, and a card grid linking to all six games |
| Game guide | `home/instructions.html` | Expandable "how to play" instructions for every game |
| Login | `home/login.html` | Account login form |
| Register | `home/register.html` | Account registration form |

## The six games

| Game | Folder | What it teaches |
|---|---|---|
| 🗺️ Map Challenge | `games/states/` | Name all 28 Indian states from memory; correct guesses label the state directly on the map |
| 📝 Crossword Challenge | `games/crossword/` | A real interlocking crossword grid generated fresh each round from a bank of 80 India-related clues |
| 🎡 Quiz Challenge | `games/quiz/` | Spin a wheel to pick a topic (Geography, History, Polity, Culture, Sports, GK), then answer against the clock |
| 🔤 Word Scramble | `games/scramble/` | Unscramble jumbled words across six topics, from wildlife to space missions |
| 🕵️ Personality Guess | `games/hangman/` | Guess a freedom fighter's name one letter at a time, hangman-style, across Easy/Medium/Hard levels |
| 🃏 Flip Card Match | `games/monuments/` | Classic memory-match gameplay using photos of India's iconic monuments |

Each game runs entirely client-side — open its `index.html` in any modern browser to play, no server required.

## Project structure

```
frontend_eduquest/
├── assets/
│   └── css/site-theme.css      # shared theme variables used across pages
├── home/
│   ├── index.html              # landing page
│   ├── instructions.html       # game guide
│   ├── login.html / register.html
│   ├── css/                    # page-specific styles
│   ├── js/                     # auth + landing page scripts
│   └── images/                 # logo, hero art, per-game preview videos
└── games/
    ├── states/                 # Map Challenge
    ├── crossword/               # Crossword Challenge
    ├── quiz/                    # Quiz Challenge
    ├── scramble/                 # Word Scramble
    ├── hangman/                  # Personality Guess
    └── monuments/                 # Flip Card Match
        each game folder → index.html, css/, js/ (and assets/images/ where needed)
```

## Tech stack

- **HTML5** — semantic structure, forms, tables, internal linking, `<details>`/`<summary>` for the collapsible game guide
- **CSS3** — external stylesheets, flexbox layouts, `position: relative/absolute` for map/grid overlays, gradients, transitions and keyframe animations, responsive design (`aspect-ratio`, wrapping flex layouts)
- **Vanilla JavaScript** — DOM manipulation, event handling, array/object data modelling, algorithmic logic (e.g. the crossword's random interlocking word-placement generator), and simple client-side auth handling

No external JS frameworks or CSS libraries are used; Google Fonts is the only external dependency (loaded via `<link>`).

## Running locally

No build step or server is required — clone the repository and open `home/index.html` directly in a browser, or serve the folder with any static file server (e.g. VS Code Live Server) for smoother relative-path loading of videos and assets.

## Roadmap

- ✅ Frontend UI for landing page, game guide, auth pages and all six games *(this submission)*
- 🔜 Backend (accounts, score persistence, leaderboards) and the complete, fully connected web application
"# Eduquest" 
