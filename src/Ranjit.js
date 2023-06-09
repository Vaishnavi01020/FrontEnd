import * as React from 'react';
//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
import './style.css'
import bg from './bg.png'
import logo1 from './logotext1.png'
//import Home from './home'
//import { render } from '@testing-library/react';
import {Link} from "react-router-dom";

 
export default function Ranjit() {
    
   return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <img src={bg} alt="bg" style={{ height:'120vh',
            marginTop:'-20px',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat'}}></img>
                <img src={logo1} alt="logo" style={{paddingTop:'10px',width:'300px',height:'100px'}}></img>
                <div className='container'> 
                    <button class="btn"><i class="fa fa-home"></i></button>
                    <h2 className='head1'>TO MAKE APPOINTMENT</h2>
                    <h3 className='head2'>FILL UP THE FORM</h3>
                    <div className='text-field'>
                    
                        <input placeholder=' Name' type='text' className='in1' />
                        <input placeholder=' Age' type='text' className='in1' />
                        <input placeholder=' Reason' type='text' className='in1' />
                        <input placeholder=' Date of Appointment' type='date' className='in1' />
                        <select className='in2'>
                            <option hidden>Session</option>
                            <option>AN</option>
                            <option>FN</option>
                        </select>
                        
                    </div>
                    <Link to="/User"><Button variant="contained" id='btn1'>Confirm</Button></Link>

                </div>
            </div>
        );    
}