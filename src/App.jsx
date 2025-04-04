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
  const [walletBalance, setWalletBalance] = useState(20);

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
    setWalletBalance((prevBalance) => prevBalance - confirmedBet.amount);
    setBetHistory((prevHistory) => [confirmedBet, ...prevHistory]);
    setSelectedBet(null); // limpa o ticket depois de confirmar
  }

  function handleAddFunds(amount) {
    setWalletBalance((prevBalance) => prevBalance + amount);
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="App">
      <Navbar
        betHistory={betHistory}
        walletBalance={walletBalance}
        onAddFunds={handleAddFunds}
      />

      <GameList games={games} onSelectBet={handleSelectBet} />

      <BetTicket
        bet={selectedBet}
        setSelectedBet={setSelectedBet}
        onConfirmBet={handleConfirmBet}
        walletBalance={walletBalance}
      />
      <footer>
        <div className="container">
          <p>
            This project was coded by{" "}
            <a href="https://github.com/sofia-pastor" target="_blank">
              Sofia Pastor
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/sofia-pastor/betting-simulator"
              target="_blank"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
