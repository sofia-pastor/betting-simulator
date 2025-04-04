import GameCard from "./GameCard";

export default function GameList({ games, onSelectBet }) {
  return (
    <div className="GameList">
      <div className="table-header">
        <h2>Upcoming UEFA League Matches</h2>
      </div>

      <div className="table-content">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onSelectBet={onSelectBet} />
        ))}
      </div>
    </div>
  );
}
