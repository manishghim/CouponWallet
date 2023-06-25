import React from "react";

import Menu from "@components/Menu";

import "@sass/views/_profile.scss";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const redeemCoupon = () => {
    navigate("/coupon");
  };

  return (
    <div className="Profile">
      <div className="Profile__content">
        <div className="Profile__avatar"></div>
        <div className="Profile__user-info">
          <div className="Profile__info">
            <h2>Manish</h2>
            <p>+977 9854832746</p>
          </div>
          <div className="Profile__balance">
            <p>Balance</p>
            <p>$XXXX.XX</p>
          </div>
        </div>
        <div className="Profile__coupon">
          <div className="Profile__coupon-col">
            <p>Wallet Point</p>
            <p>XXXX.XX</p>
          </div>
          <div className="Profile__coupon-col" onClick={redeemCoupon}>
            <span>Redeem</span>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Profile;
