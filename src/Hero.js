import React from 'react'
import Dashboard from './Dashboard.js'
import Navbar from './Components/NavBar/navbar'
import './style.css'

const Hero = () => {
    return(    
        <>
            {/* <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav> */}
            
            <Dashboard/>
    
            </>
    ) 
}

export default Hero