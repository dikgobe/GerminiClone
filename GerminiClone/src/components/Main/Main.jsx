import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'

const main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>DjGerminiClone</p>
            <img src={assets.user_icon} alt="" />
        </div>
    </div>
  )
}

export default main