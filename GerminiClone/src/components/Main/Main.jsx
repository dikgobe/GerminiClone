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
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Recruiter</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to go on your next roadtrip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize this concepts: React js</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for your work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter your prompt here' />
            </div>
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
            </div>
        </div>
        <p className="bottom-info">
            This is Dikgobe James Molepo generative Ai application using germini 
        </p>
        </div>
        
    </div>
  )
}

export default main