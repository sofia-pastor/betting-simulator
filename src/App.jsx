import { useState } from "react";

import GameList from "./GameList.jsx";
import BetTicket from "./BetTicket.jsx";
import "./App.css";

export default function App() {
  const [selectedBet, setSelectedBet] = useState(null);
  const [betHistory, setBetHistory] = useState([]);

  const mockGames = [
    {
      id: 1,
      homeTeam: "Manchester City",
      awayTeam: "Liverpool",
      date: "2025-03-30",
      time: "16:00",
      odds: {
        homeWin: 1.5,
        draw: 2.5,
        awayWin: 3.0,
      },
    },
    {
      id: 2,
      homeTeam: "Real Madrid",
      awayTeam: "Barcelona",
      date: "2025-03-31",
      time: "21:00",
      odds: {
        homeWin: 2.2,
        draw: 3.1,
        awayWin: 2.5,
      },
    },
  ];

  function handleSelectBet(game, result, odd) {
    const bet = {
      game,
      result,
      odd,
    };
    setSelectedBet(bet);
    console.log("Selected Bet:", bet);
  }

  function handleConfirmBet(confirmedBet) {
    setBetHistory((prevHistory) => [confirmedBet, ...prevHistory]);
    setSelectedBet(null); // limpa o ticket depois de confirmar
  }

  return (
    <div>
      <h1>Betting Simulator</h1>
      <GameList games={mockGames} onSelectBet={handleSelectBet} />
      <BetTicket bet={selectedBet} onConfirmBet={handleConfirmBet} />
    </div>
  );
}
