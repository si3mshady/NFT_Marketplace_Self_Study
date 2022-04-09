import React from 'react'
import './Navbar.css'
import {ethers} from 'ethers'
import {FaEthereum} from 'react-icons/fa'
import {ChainContext} from '../../context/ChainContext'
export default function Navbar() {

   
    const {connected, connectWallet} = React.useContext(ChainContext)
   


    return (
        <div className='navContainer'>
            <FaEthereum style={{marginLeft: "49px",fontSize: "75px", color: "#2d2db1"}}/>
            <h3>Ethereum Appt Availibility Scheduler</h3>
            {!connected? ( <a onClick={connectWallet} >Connect Wallet</a>): 
            (<a onClick={connectWallet} >Connected!</a>) 
    }
            
           
            
            
        </div>
    )
}
