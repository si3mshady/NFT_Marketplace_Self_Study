import React from 'react'
import './DataCard.css'

import {ChainContext} from '../../context/ChainContext'

export default function Datacard({url}) {
    const {starterData, loadingState, setLoadingState,buyNft, tokens} = React.useContext(ChainContext)

    const testFunc = () => {
        console.log('vroom')
    }
    return (
        <div className='dataCard'>

        
            <div className='dataCard_Container'> 
                        
                        <div className='dataCard_Container level_a'>

                                    <div className='dataCard_Container level_b'> 
                                    <img src={url} />
                                    <button onClick={()=>  {console.log('test')}} className='button_green'>Add Appt</button>
                                    </div>

                        </div>
                       
                       

            </div>

             
            
        </div>
    )
}
