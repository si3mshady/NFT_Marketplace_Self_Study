import React from 'react'
import './Navbar.css'
import {ethers} from 'ethers'
import {FaEthereum} from 'react-icons/fa'

export default function Navbar() {

   
    const connectWallet = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner()
    
    }


    return (
        <div className='navContainer'>
            <FaEthereum style={{marginLeft: "49px",fontSize: "75px", color: "#2d2db1"}}/>
            <h3>Ethereum Appt Availibility Scheduler</h3>
            <a onClick={connectWallet} >Connect Wallet</a>
            
        </div>
    )
}
