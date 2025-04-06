# Betting Simulator 🎲⚽

A React web application that simulates sports betting using real data from the [Odds API](https://the-odds-api.com/).  
This project was designed as a technical and creative showcase for frontend development, inspired by real-world use cases.

---

## 🧩 Features

- ✅ Display of upcoming Champions League matches with odds (via Odds API)
- ✅ Fallback to local mock data when API quota is reached
- ✅ Betting ticket with input stake and potential return calculation
- ✅ Wallet system with balance management (starting at €20, max €50)
- ✅ Predefined and custom balance top-up amounts
- ✅ Bet history dropdown (like a shopping cart)
- ✅ Responsive layout for mobile and desktop
- ✅ Styled success and error messages
- ✅ Icons using Font Awesome

---

## 🛠️ Tech Stack

- **React + Vite**
- **Axios** for API requests
- **Bootstrap** for layout
- **Custom CSS** for styling
- **Font Awesome** for icons

---

## ⚙️ How to Run Locally

Clone the repository and run:

```bash
npm install
npm run dev
```

> Make sure you have Node.js and npm installed.

If API requests fail (e.g. quota reached), the app automatically loads mock data from `games.json`.

---

## 🚀 Live Demo

Check out the deployed version:  
🔗 [https://betting-simulator.netlify.app](https://betting-simulator.netlify.app)

---

## 📁 Project Structure

```
src/
│
├── App.jsx               # Main app component
├── GameList.jsx          # Lists games
├── GameCard.jsx          # Individual game cards
├── BetTicket.jsx         # Current bet ticket
├── BetHistory.jsx        # Bet history dropdown
├── Wallet.jsx            # Wallet dropdown and balance logic
├── Navbar.jsx            # Navigation bar with  icons and dropdowns
└── *.css                 # Stylesheets for components
```

---

## 📌 Notes

- This is a **frontend-only simulation**, no real bets or money are involved.
- The Odds API used in this project has a monthly free limit.
- For offline development or demo, mock data is available.

---

## 🌐 SEO & Accessibility Highlights

- Semantic and descriptive HTML structure
- Clear and readable class names
- Meta tag and favicon support via `index.html`
- Designed with user experience and clarity in mind

---

## 📣 About This Project

This project was developed as part of my portfolio to showcase skills in:

- React development
- API integration
- UI/UX design and responsiveness
- Project organization and problem-solving

🔍 Special attention given to companies working in sports tech — such as [Blip.pt](https://www.blip.pt/), part of the Flutter Entertainment Group.

---

Made with 🤍 by Sofia Pastor
