import React from 'react'

import Wallet from "@images/wallet.svg"

import "@sass/views/_login.scss";

const Login = () => {
  return (
    <div className='Login'>
			<div className='Login__container'>
				<div className='Login__logo'>
					<img src={Wallet} alt="wallet" />
				</div>
				<div className='Login__body'>
					<h2>The Wallet Project</h2>
					<div className='Login__row'>
						<p>Username</p>
						<input type="text" name="username" id="username" />
					</div>
					<div className='Login__row'>
						<p>Password</p>
						<input type="password" name="password" id="password" />
					</div>
					<div className='Login__button'>
						<button>Login</button>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Login
