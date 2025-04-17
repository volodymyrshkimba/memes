# ![logo](./public/favicon.png) Meme Directory App

A React app built with [HeroUI](https://www.heroui.com) to view and edit popular memes. Deployed on [Railway](https://railway.app).

## 🔗 Live Demo

👉 [View the App](https://memes-production-b06e.up.railway.app/)

## 🚀 Features

- 📊 Meme table using `HeroUI Table`
- 📋 Meme list with `HeroUI Cards`
- ✏️ Edit memes via `HeroUI Modal`
- 🧪 Field validation:
  - **Title**: 3–100 characters
  - **Image**: Valid `.jpg` URL
  - **Likes**: Integer between 0 and 99
- 🔁 Meme data stored in `localStorage`
- 📱 Responsive design for all screen sizes

## 📄 Pages

- `/table` – Meme table view
- `/list` – Meme list with cards
- Navigation via `HeroUI Navbar`
- Redirect from `/` to `/table`

## 🛠️ Tech Stack

- React + Vite  
- React Router DOM  
- HeroUI  
- Railway for deployment

## ⚙️ Local Setup

```bash
git clone https://github.com/volodymyrshkimba/memes.git
cd memes
npm install
npm run dev
