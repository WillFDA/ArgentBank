import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserProfile,
  toggleOpen,
  setUserNameEdit,
  resetUserNameEdit,
} from "../redux/features/userInfoSlice";
import AccountItems from "../components/AccountItem";

export const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const firstName = useSelector((state) => state.userInfo.firstName);
  const lastName = useSelector((state) => state.userInfo.lastName);
  const userName = useSelector((state) => state.userInfo.userName);
  const userNameEdit = useSelector((state) => state.userInfo.userNameEdit);
  const Opened = useSelector((state) => state.userInfo.isOpen);

  // console.log(firstName);
  // useEffect(() => {
  //   console.log("Token from state:", token);
  // }, [token]);

  async function submitUserName(event) {
    event.preventDefault();

    const requestProfile = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: userNameEdit }),
    };

    const response = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      requestProfile
    );

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    console.log(data);
    dispatch(setUserProfile(data.body));
    dispatch(toggleOpen(false));
  }

  useEffect(() => {
    const fetchUserProfile = async () => {
      const requestProfile = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        requestProfile
      );
      const data = await response.json();
      console.log(data.body);
      dispatch(setUserProfile(data.body));
    };

    fetchUserProfile();
  }, [dispatch, token, userName]);

  function handleUserNameChange(event) {
    dispatch(setUserNameEdit(event.target.value));
  }

  function cancelSubmitUserName() {
    dispatch(toggleOpen(!Opened));
  }

  function handleEditClick() {
    dispatch(setUserNameEdit(userName));
    dispatch(toggleOpen(true));
  }
  useEffect(() => {
    if (!Opened) {
      dispatch(resetUserNameEdit());
    }
  }, [Opened, dispatch]);

  return (
    <main className="main bg-dark">
      <div className="header">
        {Opened && (
          <form>
            <h1>Edit user info</h1>
            <div className="input-label-wrapper">
              <div className="input-wrapper-edit">
                <label htmlFor="usernameEdit">User name</label>
                <label htmlFor="LastNameEdit">FirstName</label>
                <label htmlFor="FirstNameEdit">FirstName</label>
              </div>
              <div className="input-wrapper-edit">
                <input
                  type="text"
                  id="usernameEdit"
                  value={userNameEdit}
                  onChange={handleUserNameChange}
                />
                <input
                  type="text"
                  id="FirstNameEdit"
                  value={firstName}
                  readOnly
                />
                <input
                  type="text"
                  id="LastNameEdit"
                  value={lastName}
                  readOnly
                />
                <div className="edit-buttons-container">
                  <button onClick={submitUserName} className="sign-in-button">
                    Save
                  </button>
                  <button
                    onClick={cancelSubmitUserName}
                    className="sign-in-button"
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {!Opened && (
          <>
            {" "}
            <h1>
              Welcome back
              <br />
              {firstName + " " + lastName}
            </h1>
            <button onClick={handleEditClick} className="edit-button">
              Edit Name
            </button>{" "}
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <AccountItems
        title="Argent Bank Savings"
        accountNum="x8349"
        balance="$2,082.79"
      />
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default User;
