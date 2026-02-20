# Podcast App

A multilingual podcast discovery directory built with Next.js and gt-next, showcasing internationalized content and locale-aware formatting.

**[Live Demo](https://podcast-app.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app demonstrates a podcast browsing experience with full internationalization support. Browse podcasts across categories with translated titles, descriptions, and metadata — all powered by General Translation's gt-next library. The app showcases locale-aware number and date/time formatting alongside JSX translation.

## GT Features Used

- `<T>` — JSX translation
- `<Num>` — Locale-aware number formatting
- `<DateTime>` — Date/time formatting
- `<LocaleSelector>` — Language picker
- `<Var>` — Variable interpolation in translations
- `getGT` — Server-side string translations
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/podcast-app.git
cd podcast-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
