import "./GameCard.css";

export default function GameCard({ game, onSelectBet }) {
  console.log(game);
  return (
    <div className="GameCard">
      <div className="container"></div>
      <div className="row align-items-center game-card">
        <div className="col-lg-4 game-info">
          <h3>
            {game.homeTeam} vs {game.awayTeam}
          </h3>
          <p>
            {game.date.toLocaleDateString()} -{" "}
            {game.date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="col-lg-8 buttons">
          <div className="row ">
            <div className="col-md-4">
              <button
                onClick={() => onSelectBet(game, "homeWin", game.odds.homeWin)}
              >
                1<div className="odds">[{game.odds.homeWin}]</div>
              </button>
            </div>
            <div className="col-md-4">
              <button onClick={() => onSelectBet(game, "draw", game.odds.draw)}>
                X <div className="odds">[{game.odds.draw}]</div>
              </button>
            </div>
            <div className="col-md-4">
              <button
                onClick={() => onSelectBet(game, "awayWin", game.odds.awayWin)}
              >
                2 <div className="odds">[{game.odds.awayWin}]</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
