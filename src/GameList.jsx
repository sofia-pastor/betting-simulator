import GameCard from "./GameCard";

export default function GameList({ games, onSelectBet }) {
  return (
    <div className="GameList">
      <h2>Upcoming Matches</h2>
      {games.map((game) => (
        <GameCard key={game.id} game={game} onSelectBet={onSelectBet} />
      ))}
    </div>
  );
}
