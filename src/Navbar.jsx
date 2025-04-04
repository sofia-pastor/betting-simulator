import BetHistory from "./BetHistory";
import Wallet from "./Wallet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faMoon,
  faSun,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

export default function Navbar({ betHistory, walletBalance, onAddFunds }) {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Betting Simulator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav icon-list">
              <li className="nav-item dropdown icon">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faWallet} />
                </a>
                <ul className="dropdown-menu">
                  <li onClick={(e) => e.stopPropagation()}>
                    <Wallet
                      walletBalance={walletBalance}
                      onAddFunds={onAddFunds}
                    />
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown icon">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faClockRotateLeft} />
                </a>
                <ul className="dropdown-menu">
                  <BetHistory history={betHistory} />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
