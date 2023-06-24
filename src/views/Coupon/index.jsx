import React, { useState } from 'react'
import CouponCard from '@components/CouponCard'
import Modal from '@components/Modal'

import Cinema from "@images/cinema.svg"
import Plane from "@images/plane.svg"
import BigMart from "@images/big_mart.svg"
import Goldstar from "@images/goldstar.svg"

import "@sass/views/_coupon.scss";

const Coupon = () => {
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => {
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
	}

  return (
    <div className='Coupon'>
			<div className='Coupon__container'>
				<div className='Coupon__row' onClick={openModal}><CouponCard img={Cinema} points={200} discount={5} text="ANY CINEMAS" /></div>
				<div className='Coupon__row' onClick={openModal}><CouponCard img={Plane} points={500} discount={10} text="PLANE TICKET" /></div>
				<div className='Coupon__row' onClick={openModal}><CouponCard img={BigMart} points={1000} discount={12} text="BIG MART" /></div>
				<div className='Coupon__row' onClick={openModal}><CouponCard img={Goldstar} points={1200} discount={15} text="GOLDSTAR PRODUCT" /></div>
			</div>
			<Modal isOpen={isOpen} closeModal={closeModal}>
				<div className='Coupon__modal-content'>
						<h2>Code</h2>
						<p className='Coupon__modal-code'>3456</p>
				</div>
			</Modal>
    </div>
  )
}

export default Coupon
