import React from "react";
import { Link } from "react-router-dom";

const AccountItems = ({ title, accountNum, balance }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {title} ({accountNum})
        </h3>
        <p className="account-amount">${balance}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to="/transactions" className="transaction-button">
          View transactions
        </Link>
      </div>
    </section>
  );
};

export default AccountItems;
