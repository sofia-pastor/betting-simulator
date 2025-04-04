export default function BetHistory({ history }) {
  if (history.length === 0) {
    return <p className="dropdown-item text-muted">No bets yet.</p>;
  }

  return (
    <div className="BetHistory">
      {history.map((bet, index) => (
        <li
          key={index}
          className="dropdown-item"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="match-teams">
            {bet.game.homeTeam} vs {bet.game.awayTeam}
          </span>
          <br />
          <span className="match-selection">{bet.result}</span> |{" "}
          <span className="history-amounts">
            {bet.amount}€ → {bet.return}€
          </span>
          <br />
          <span className="history-date">{bet.date}</span>
        </li>
      ))}
    </div>
  );
}
