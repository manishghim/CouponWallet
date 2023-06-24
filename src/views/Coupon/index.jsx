import React from 'react'
import CouponCard from '@components/CouponCard'

import Cinema from "@images/cinema.svg"
import Plane from "@images/plane.svg"
import BigMart from "@images/big_mart.svg"
import Goldstar from "@images/goldstar.svg"

import "@sass/views/_coupon.scss";

const Coupon = () => {
  return (
    <div className='Coupon'>
        <div className='Coupon__row'><CouponCard img={Cinema} points={200} discount={5} text="ANY CINEMAS" /></div>
        <div className='Coupon__row'><CouponCard img={Plane} points={500} discount={5} text="PLANE TICKET" /></div>
        <div className='Coupon__row'><CouponCard img={BigMart} points={1000} discount={5} text="BIG MART" /></div>
        <div className='Coupon__row'><CouponCard img={Goldstar} points={1200} discount={5} text="GOLDSTAR PRODUCT" /></div>
    </div>
  )
}

export default Coupon
