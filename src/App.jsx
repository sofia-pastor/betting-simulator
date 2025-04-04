import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Navbar.jsx";
import GameList from "./GameList.jsx";
import BetTicket from "./BetTicket.jsx";
import "./App.css";

export default function App() {
  const [selectedBet, setSelectedBet] = useState(null);
  const [betHistory, setBetHistory] = useState([]);
  const [games, setGames] = useState([]);

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

  function displayGames(response) {
    setGames(
      response.data.map((game) => {
        const bookmaker = game.bookmakers[0];
        const market = bookmaker.markets.find((m) => m.key === "h2h");
        return {
          id: game.id,
          homeTeam: game.home_team,
          awayTeam: game.away_team,
          date: new Date(game.commence_time),
          odds: {
            homeWin: market.outcomes.find((o) => o.name === game.home_team)
              ?.price,
            draw: market.outcomes.find((o) => o.name === "Draw")?.price,
            awayWin: market.outcomes.find((o) => o.name === game.away_team)
              ?.price,
          },
        };
      })
    );
  }

  function getGames() {
    const sport = "soccer_uefa_champs_league";
    const regions = "eu";
    const markets = "h2h";
    const oddsApiKey = "eb16a119733cd82329045c1fd5065698";
    const bookmaker = "betfair_ex_eu";
    const oddsUrl = `https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${oddsApiKey}&regions=${regions}&markets=${markets}&bookmakers=${bookmaker}`;

    axios
      .get(oddsUrl)
      .then(displayGames)
      .catch((error) => {
        console.warn("API falhou, a usar dados locais:", error.message);
        axios.get("/games.json").then(displayGames);
      });
  }

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

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div>
      <Navbar betHistory={betHistory} />
      <GameList games={games} onSelectBet={handleSelectBet} />
      <BetTicket
        bet={selectedBet}
        setSelectedBet={setSelectedBet}
        onConfirmBet={handleConfirmBet}
      />
    </div>
  );
}
