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
            <div className='recdnt'>
                <p className="recent-title">Recent</p>
                <div className="recent-enry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react ..</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="buttom-item">
                <img src={assets.question_icon} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Sidebar