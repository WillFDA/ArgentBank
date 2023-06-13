import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TransactionsItems from "./TransactionsItems";
const AccountItems = ({ title, accountNum, balance }) => {
  const location = useLocation();

  const sectionClass =
    location.pathname === "/transactions" ? "account margtop" : "account";

  return (
    <section className={sectionClass}>
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {title} ({accountNum})
        </h3>
        <p className="account-amount">${balance}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        {location.pathname === "/transactions" ? (
          <Link to="/user" className="transactions-xmark">
            <FontAwesomeIcon icon={faXmark} />
          </Link>
        ) : (
          <Link to="/transactions" className="transaction-button">
            View transactions
          </Link>
        )}
      </div>
    </section>
  );
};

export default AccountItems;
