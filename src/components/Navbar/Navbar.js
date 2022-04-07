import React from 'react'
import './Navbar.css'
import {ethers} from 'ethers'
import {FaEthereum} from 'react-icons/fa'

export default function Navbar() {

    const [connected, setConnected] = React.useState(false)

   
    const connectWallet = async () => {

        if (window.ethereum) {
            // await window.ethereum.request({method: 'eth_accounts'});
            const provider = new ethers.providers.Web3Provider(window.ethereum)

            setConnected(true)
             
        }
                
        
        {

            await window.ethereum.request({method: 'eth_accounts'});
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);

          
        }
       
    
    }


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
