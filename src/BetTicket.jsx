import { useState, useEffect } from "react";

import "./BetTicket.css";

export default function BetTicket({ bet, setSelectedBet, onConfirmBet }) {
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // 💡 Sempre que o utilizador seleciona uma nova aposta
  useEffect(() => {
    if (bet) {
      setSuccessMessage("");
      setErrorMessage("");
      setAmount(""); // opcional: também limpa o campo de input
    }
  }, [bet]);

  // Cálculo do retorno potencial
  let potentialReturn = "";
  if (amount && !isNaN(amount) && amount > 0) {
    potentialReturn = (amount * bet.odd).toFixed(2);
  } else {
    potentialReturn = "0.00";
  }

  // Submissão do formulário
  function handleSubmit(e) {
    e.preventDefault();

    if (!amount || isNaN(amount) || amount <= 0) {
      setErrorMessage("❌ Please enter a valid amount.");
      return;
    }

    const confirmedBet = {
      ...bet,
      amount: parseFloat(amount),
      return: (amount * bet.odd).toFixed(2),
      date: new Date().toLocaleString(),
    };

    onConfirmBet(confirmedBet);
    setAmount("");
    setErrorMessage("");
    setSuccessMessage(`✅ Bet of  ${amount}€ successfully placed!`);

    setTimeout(() => {
      setSuccessMessage("");
      setSelectedBet(null); // <- desde que esteja a ser passado como prop
    }, 5000);
  }

  // Render condicional
  if (!bet && !successMessage) return null;
  else if (successMessage) {
    return (
      <div className="BetTicket">
        <div className="bet-ticket">
          <h4 className="success-message">{successMessage}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="BetTicket">
        <div className="bet-ticket">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <h3>Current Bet</h3>
                <p>
                  <span className="match-teams">
                    {bet.game.homeTeam} vs {bet.game.awayTeam}
                  </span>
                  <br />
                  Selection:{" "}
                  <span className="match-selection">{bet.result}</span>
                  <br />
                  Odd: <strong>{bet.odd}</strong>
                </p>
              </div>
              <div className="col-6">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <label>
                      Stake:
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="form-control"
                        placeholder="Enter amount (€)"
                        autoFocus
                        min="0"
                        step="0.01"
                      />
                    </label>

                    {errorMessage && (
                      <div className="error-message">{errorMessage}</div>
                    )}

                    <p className="mt-1">
                      Potential Return:{" "}
                      <span className="fw-bold">{potentialReturn} €</span>
                    </p>
                    <div className="">
                      <button type="submit" className="confirm-button">
                        Confirm Bet
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
