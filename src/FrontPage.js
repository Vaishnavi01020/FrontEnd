import React from 'react';
import image from './backgroundd.jpg';
import img1 from './background - Copy.jpg';
import logo from './logoneww .png';
import ad from './freeCheck.png';
import search from './loupe.png';
import findDoctor from './findDoc.png';
import appoint from './appoin.jpg';

import { Button } from '@mui/material';
import Footer from './Footer';
import './indexx.css';

import {Link} from "react-router-dom";
//import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';



export default class FrontPage extends React.Component{
    render()
    {
        const bg={
            backgroundImage:`url('${image}')`,
            height:'50vh',
            marginTop:'1px',
            backgroundSize:'cover',
            backgroundRepeat:'no repeat'
        };
        const bgd={
            backgroundImage:`url('${img1}')`,
            height:'100vh',
            marginTop:'155px',
            backgroundSize:'cover',
            backgroundRepeat:'no repeat',  
        };
        
        return(
            <div style={bg}>
                <img src= {logo} alt="logo" className='logo'></img> 
                <h1 className='medigo'>MediGo</h1>
                <div className='but'>
               <Link to="Projectlogin"><Button
    style={{
        borderRadius:15,
        backgroundColor: "#EAE4E4",
        color:"#042d2c",
        padding: "10px 40px",
        fontSize: "10px",  
        fontFamily:"cursive",
        fontWeight:'bold'  ,
        border:"2px"
    }}
    variant="contained"
    className='hvr-float-shadow1'
    >
    Doctor Login
</Button></Link>
                </div >
                <div className='but1'>
                
<Link to="Classcomp1"><Button
    style={{
        borderRadius:15,
        backgroundColor: "#EAE4E4",
        color:"#042d2c",
        padding: "10px 40px",           
        fontSize: "10px",
        fontFamily:"cursive",
        fontWeight:'bold'  
        
    }}
    variant="contained"
    className='hvr-float-shadow1'
    >
    Patient Login
</Button></Link>
                </div>
                <div>
                <hr className='line'></hr>
                </div>
                <input type='text' className='search' placeholder='           
                        FIND DOCTORS,HOSPITALS,DISPENSARY NEAR YOU.........' ></input>
                <select className='drop'>
                  <option selected value="Cardiologist">Cardiologist</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Allergist">Allergist</option>
                  <option value="Dermatologist">Dermatologist</option>
                 </select>
               <img src={search} alt='search'  className='searchicon' height='35px' width='35px'/>
               <div className='adv'>
                <img src={ad} alt='ad' className='hvr-float' height='10px' width='10px'></img></div>
                <div className='rec'></div>
                <img src={findDoctor} alt='Find Doctors' className='FindDoc' height='200px' width='200px'/>

                
<h1 className='fd'>Find Doctors Near You</h1>
<div class="lie">
   
                <form>
                    <h3 className='lineUp'>Search for
 medical Experts  for 
your Specifications
 with ease. </h3>
                </form>
  </div>
                <div style={bgd} >
                    <div className='rec1'>
                   <img src={appoint} alt='appointment' className='Ap' height='300px' width='280px'/>
<h1 className='aptext'>Book Appointments In-Clinic</h1>
</div>
<div className='text2'>
                   <h3 className='lineUp'>Book Appointments
 in convenient Timings 
with Description 
of your needs </h3>
</div>
                
                </div>
          <div className='foot'>  <Footer></Footer>   </div> 
                    
<div className='rat'>
<h1 style={{color:'whitesmoke',fontFamily:'papyrus'}}>Rating</h1>
<fieldset class="rating" >
    <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
</fieldset>
</div> 
                
            </div>
            )
        }

}
