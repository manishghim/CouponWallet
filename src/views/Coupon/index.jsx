import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CouponCard from "@components/CouponCard";
import Modal from "@components/Modal";
import {
  saveToLocalStorage,
  getFromLocalStorage,
  getRandomNumber,
} from "@utils/util";

import Cinema from "@images/cinema.svg";
import Plane from "@images/plane.svg";
import BigMart from "@images/big_mart.svg";
import Goldstar from "@images/goldstar.svg";
import BackBtn from "@images/back_btn.svg";

import "@sass/views/_coupon.scss";

const Coupon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const navigate = useNavigate();

  const images = {
    cinema: Cinema,
    planeTicket: Plane,
    bigMart: BigMart,
    goldstar: Goldstar,
  };

  const openModal = (index) => {
    setIsOpen(true);
    setClickedIndex(index);
  };

  const closeModal = () => {
    coupons.splice(clickedIndex, 1);
    setCoupons(coupons);
    saveToLocalStorage("coupons", coupons);
    setIsOpen(false);
  };

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const savedCoupons = getFromLocalStorage("coupons");
    setCoupons(savedCoupons);
  }, []);

  return (
    <div className="Coupon">
      <div className="Coupon__container">
        <img src={BackBtn} alt="back_btn" onClick={goBack} />
        {coupons.map((coupon, index) => {
          return (
            <div
              key={index}
              className="Coupon__row"
              onClick={() => openModal(index)}
            >
              <CouponCard
                img={images[coupon.type]}
                points={coupon.walletPoints}
                discount={coupon.discount}
                text={coupon.text}
              />
            </div>
          );
        })}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="Coupon__modal-content">
          <h2>Code</h2>
          <p className="Coupon__modal-code">{getRandomNumber()}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Coupon;
