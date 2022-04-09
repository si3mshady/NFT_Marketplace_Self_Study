import React from 'react'
import './Sidebar.css'
import {FaRegUser, FaRegPlusSquare,FaSearchengin} from 'react-icons/fa'
import {Link} from 'react-router-dom'


export default function Sidebar() {
    return (
            <aside className='sideBarContainer'>
            <ul className='ul_container'>                
                <li>
                {/* <p>Available Appts</p> */}
                <Link to='/available'>
                    
                <FaRegUser style={{fontSize: "50px",color:"#2d2db1"}}/>
                <h3>Available Appts</h3>
                </Link>
                </li>
                <li>
                {/* <p>Schedule New</p> */}
                 <Link to='/new'>
                <FaRegPlusSquare style={{fontSize: "50px", color: "#2d2db1"}}/>
                 <h3>Schedule New Appt</h3>
                   
                    
                 </Link>   
                 
                
                </li>
                <li>
                {/* <p>My Scheduled Appointments</p> */}
                <Link to='/scheduled'>
                     <FaSearchengin style={{fontSize: "50px",color:"#2d2db1"}} /> 
                     <h3>My appts</h3>
                     
                </Link>
              
                </li>
               
            </ul>
        </aside>
    )
}
