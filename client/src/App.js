import React,{useEffect} from 'react'
import Card from './Components/Card.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Components/Login.js';

export default function App(){

  useEffect(() => {
    const live = document.getElementById("live")

    setInterval(() => {
      live.style.opacity = 0.5;
    }, 1000);

    setInterval(()=>{
      live.style.opacity = 1;
    },2000)
  },[])

  return(
    <div>
    <h1 style={{textAlign : "center"}}>Covid 19 Tracker</h1>
    <p style={{textAlign : "center"}} id= "live"> 🔴 LIVE </p>
    <Router>
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </div>
  )
}