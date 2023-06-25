import React, { useEffect } from "react";
import AccountItems from "../components/AccountItem";
import TransactionsItems from "../components/TransactionsItems";
import { useNavigate } from "react-router-dom";
const Transactions = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/error");
    }
  }, [token, navigate]);
  return (
    <main className="main bg-dark">
      <AccountItems
        title="Argent Bank Checking"
        accountNum="x8349"
        balance="2,082.79"
      />
      <section className="transaction info">
        <div className="chevron"></div>
        <div className="transaction_wrapper info">
          <div className="transaction-left">
            <span className="">Date</span>
            <span>Description</span>
          </div>
          <div className="transaction-right">
            <span>Amount</span>
            <span>Balance</span>
          </div>
        </div>
      </section>
      <TransactionsItems />
    </main>
  );
};

export default Transactions;
