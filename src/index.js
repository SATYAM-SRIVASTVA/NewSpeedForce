import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/services';
import Story from './Components/Story/Story';
import Cards from './Components/Cards/Cards';
import Navbar from './Components/NavBar/navbar';
import Bikeservice from './Components/BikeService/bikeservice';
import Excellent from './Components/Excellent/excellent';


ReactDOM.render(
  <>
      <App />
  <Navbar/>
     <Bikeservice/>
    <Excellent>
      </Excellent>
     <Cards/> 
    <Story/> 
    <Services/> 
      <Footer/>
      </>
  ,
  document.getElementById('root')
);
 reportWebVitals();

