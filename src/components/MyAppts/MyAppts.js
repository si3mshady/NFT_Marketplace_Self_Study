import React from 'react'
import './MyAppts.css'
import {ChainContext} from '../../context/ChainContext'
import uuid from 'react-uuid'

export default function MyAppts() {
    const {starterData, myAppts , buyNft, loadingState, setLoadingState, tokens} = React.useContext(ChainContext)
    return (

        <>
                
        { myAppts.length === 0 ? 
        (<main className='mainContentContainer'>
         <h1>No Appointment Tokens</h1>
        </main>): (

        <main className='mainContentContainer'>
              {myAppts.map((i, index) => (
              
            <div className='dataCard'>    
            <div className='dataCard_Container'>                       
                <img src={i.tokenURI} />
 

              <button onClick={() => {buyNft(i.nftTokenId.toString(),
                i.fee.toString())}} className='button_green'>Accept</button>
            </div>
            </div>              
              
            ))}

              
        </main>)

        }
        </>
    )
}
