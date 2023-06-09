import React from 'react';
import './style.css';
import {Link} from "react-router-dom";
import mylogo from './loggg.png';

import './App.css';
import image  from './bg.png';

export default class Projectlogin extends React.Component {
    render() {
    
        const mystyle={
            backgroundImage:`url('${image}')`,
            height:'120vh',
            marginTop:'-20px',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
        };
    return(
        <div style={mystyle}>
<img src={mylogo} alt="logo" className="omg1"/>

        <form className='d'>
        <h1 style={{textAlign:"center",marginLeft:'0px',paddingTop:'150px',fontSize:'50px'}}>LOGIN</h1>
            <input className="h" type="text" placeholder="E-mail Id" style={{marginLeft:'100px',height:"30px",width:"430px"}}/><br></br><br></br>
            <input className="h" type="password" placeholder="Password" style={{marginLeft:'100px',height:"30px",width:"430px"}}/><br></br><br></br><br></br><br></br><br></br>
<Link to="/Ram"><button className='co' style={{background:"blue",color:"white",marginLeft:'60%',padding:"5px 5px",width:"100px", height:"40px",marginTop:"-70px"}}>Log In</button></Link>
<Link to="/Project"><button style={{paddingLeft:'470px',marginTop:'-60px',color:'#00B2FF'}}>Create Account</button></Link>
      </form>        </div>
    )
  }
}

