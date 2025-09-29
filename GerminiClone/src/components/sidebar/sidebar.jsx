import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'


function Sidebar() {
  return (
    <div className='sidebar' >
        <div className="top">
            <img className='menu'  src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src= {assets.plus_icon} alt="" />
                <p>New chat</p>
            </div>
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default Sidebar