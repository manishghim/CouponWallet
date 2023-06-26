import React from "react";

import User from "@images/user.svg";
import Account from "@images/account.svg";
import Offer from "@images/offer.svg";
import Statement from "@images/statement.svg";
import Setting from "@images/setting.svg";
import Logout from "@images/logout.svg";
import { deleteFromLocalStorage } from "@utils/util";

import "@sass/components/_menu.scss";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const logout = () => {
    deleteFromLocalStorage("isLoggedIn");
    deleteFromLocalStorage("coupons");
    navigate("/login");
  };

  return (
    <div className="Menu">
      <div className="Menu__row">
        <img src={User} alt="user" />
        <p>Personal Information</p>
      </div>
      <div className="Menu__row">
        <img src={Account} alt="account" />
        <p>Linked Account</p>
      </div>
      <div className="Menu__row">
        <img src={Offer} alt="offer" />
        <p>Offers</p>
      </div>
      <div className="Menu__row">
        <img src={Statement} alt="statement" />
        <p>Statement</p>
      </div>
      <div className="Menu__row">
        <img src={Setting} alt="setting" />
        <p>Settings</p>
      </div>
      <div className="Menu__row" onClick={logout}>
        <img src={Logout} alt="logout" />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Menu;
