import image from './background.webp'
import logo from './logo.jpg'
import React from 'react'
import './Doctor.css'
import myimage1 from './doc1.jpg'
import myimage from './doctor.png'
function Ram(){
    const myStyle={
      backgroundImage:`url('${image}')`,
      height:'100vh',
      fontSize:'40px',
      marginTop:'-70px',
      marginBottom:'-600px',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
    };
    return(
      <div style={myStyle}>
          <img className='logo1' src={logo} alt="logo"/>
           <h1 id='head'><br></br>MediGo</h1>
           <form className="box"/>
           <img src={myimage} alt="Doc" className="Doc1"/>
           <p id="txt">DOCTOR</p>
           <hr></hr>
           <img src={myimage1} alt="Doc1" className="Doc2"/>
           <form className="box1"></form>
            <p id="info">INFO</p>
            <p id="line2">DR.Sharan,md </p>
            <p id="line3">paediatric surgeon </p>
            <p id="line4">M.S,M.Ch(paediatric Surgery)
            Medic General Medical Hospital 
            North Houston, Texas, USA</p>
            <form className="quote"></form>
    <p className="Quo">"The aim of medicine is to</p>
    <p className="Quo1"> prevent disease and prolong</p> 
    <p className="Quo2"> life; the ideal of medicine is to </p>
    <p className="Quo3"> eliminate the need of physician." </p>
    <p className="Quo4">— William J .Mayo</p>
    <form className="table"></form>
    <p id="app">APPOINTMENT DETAILS:</p>
    <p id="pat1">*Karthick - 10:30AM </p>
    <p id="pat2">*Santhosh - 11:00AM</p>
    <p id="pat3">*Shanthakumar - 11:30AM</p>
    <p id="pat4">*ManojKumar - 8:30PM </p>
    <br></br>
       </div>
    );
}
export default Ram