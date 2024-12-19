

import React from 'react'

const Top = () => {
  return (
    <div className='headerSection'>
      <div className='left'>
        <div className='title'>
            <h2>Shopping Mall</h2>
        </div>
      </div>
      <div className='center'>
          <ul>
            <li><a href=''>Woman</a></li>
            <li><a href=''>Men</a></li>
            <li><a href=''>Childern</a></li>
            <li><a href=''>Beauty</a></li>
          </ul>
      </div>

      <div className="search">
        <input type="text" placeholder='search' />
      </div>

      <div className='right'>
        <div className="signin">
          <a href='' className='usersign'>Signin / </a>
          <a href='' className='usersign'>Signup</a>
        </div>
        <div className="cart"><p>Cart</p></div>
      </div>
      
    </div>
  )
}

export default Top
