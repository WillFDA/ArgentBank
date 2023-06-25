import React from "react";
import { Link } from "react-router-dom";
import {
  faUserCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/loginSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const tokenLocale = localStorage.getItem("token");
  const handleSignOut = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {tokenLocale ? (
          <Link className="main-nav-item" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </Link>
        ) : (
          <Link className="main-nav-item" to="/signin">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
