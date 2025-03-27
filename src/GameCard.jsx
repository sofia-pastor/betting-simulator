export default function GameCard({ game, onSelectBet }) {
  return (
    <div className="GameCard">
      <h3 className="game-card">
        {game.homeTeam} vs {game.awayTeam}
      </h3>
      <p>
        {game.date} - {game.time}
      </p>
      <div>
        <button onClick={() => onSelectBet(game, "homeWin", game.odds.homeWin)}>
          1 [{game.odds.homeWin}]
        </button>

        <button onClick={() => onSelectBet(game, "draw", game.odds.draw)}>
          X [{game.odds.draw}]
        </button>

        <button onClick={() => onSelectBet(game, "awayWin", game.odds.awayWin)}>
          2 [{game.odds.awayWin}]
        </button>
      </div>
    </div>
  );
}
