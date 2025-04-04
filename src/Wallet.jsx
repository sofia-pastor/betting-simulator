import { useState } from "react";

import "./Wallet.css";

export default function Wallet({ walletBalance, onAddFunds }) {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");

  const defaultAmounts = [5, 10, 20, 30];
  const maxBalance = 50;

  function handleAdd() {
    let amount = 0;

    if (customAmount) {
      amount = parseFloat(customAmount);
    } else if (selectedAmount) {
      amount = selectedAmount;
    }

    if (!amount || isNaN(amount) || amount <= 0) {
      setMessage("❌ Please enter a valid amount.");
      return;
    }

    if (walletBalance + amount > maxBalance) {
      setMessage("⚠️ Maximum balance is 50€.");
      return;
    }

    onAddFunds(amount);
    setMessage(`✅ Added ${amount}€ to your wallet.`);
    setSelectedAmount(null);
    setCustomAmount("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <div className="Wallet dropdown-content">
      <div>
        <h6>Current balance:</h6>
        <h5>{walletBalance.toFixed(2)}€</h5>
      </div>
      <h6 className="funds-title">Add funds:</h6>
      <div className="default-buttons">
        {defaultAmounts.map((amount) => (
          <button
            key={amount}
            className={`btn amount-button ${
              selectedAmount === amount ? "active" : ""
            }`}
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount("");
            }}
          >
            {amount}€
          </button>
        ))}
      </div>

      <p className="">Or enter another amount:</p>
      <form>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(null);
          }}
          className="form-control"
          placeholder="amount (€)"
          min="0"
          step="0.01"
        />
      </form>

      {message && <p className="wallet-message">{message}</p>}

      <button className="btn confirm-button mt-3" onClick={handleAdd}>
        Add Funds
      </button>
    </div>
  );
}
