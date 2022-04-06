import React from 'react'
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/services';
import Story from './Components/Story/Story';
import Cards from './Components/Cards/Cards';
import Navbar from './Components/NavBar/navbar';
import Bikeservice from './Components/BikeService/bikeservice';
import Excellent from './Components/Excellent/excellent';

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <Bikeservice/>
    <Excellent>
    </Excellent>
    <Cards/> 
    <Story/> 
    <Footer/>
    </>
  )
}

export default Dashboard