import React from 'react'
import './MainContent.css'
// import DataCard from '../DataCard/DataCard'
import {ChainContext} from '../../context/ChainContext'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MainContent() {
    const {tokens} = React.useContext(ChainContext)

    const screwYou = () => {
        console.log('wait a second')
    }
    return (

        <>
        
        { tokens.length === 0 ? 
        (<main className='mainContentContainer'>
         <h1>No Appointment Tokens</h1>
        </main>): (


        <div className='mainContentContainer'>
        


              {tokens.map((i, index) => (<Card  key={index}  sx={{ maxWidth: 345 }}>
                        
                        
                        <CardMedia 
                           
                            component="img"
                            height="140"
                            image={i.tokenURI}
                            alt="green iguana"
                        />
                        
                        <CardActions>
                        <Button onClick={screwYou} 
                        variant="contained"
                        color="success"
                        >Accept</Button>
                        
                        </CardActions>
                        </Card>))}              
        
        </div>)

        }
        </>
    )
}
