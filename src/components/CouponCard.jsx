import React from "react";

import "@sass/components/_couponCard.scss";

const CouponCard = (props) => {
  const { img, points, discount, text } = props;
  return (
    <div className="CouponCard">
      <div className="CouponCard__col">
        <img src={img} alt="couponImage" />
        <div className="CouponCard__wallet-points">WP {points}</div>
      </div>
      <div className="CouponCard__content">
        Get <strong>{discount}%</strong> <span>off</span> <p>on</p> {text}
      </div>
    </div>
  );
};

export default CouponCard;
