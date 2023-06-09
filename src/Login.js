import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
//import LoginSuccessPopup from './LoginSuccessPopup';
import axios from 'axios';
import img from "./img5.jpg";

function Login() {
  const [email, setEmail] = useState('');
  const [pasword, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  //const [showpopup, setPopup] = useState(false);
  
  const navigate = useNavigate(); 
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!email && !pasword){
      
      event.preventDefault();
    }else{

      
      try {
        const response = await axios.post('http://localhost:8080/api/logindata/auth', {email, pasword});
        
        if (response.data === "Login Successful") {
          sessionStorage.setItem('email',email);
          localStorage.setItem('email',email);
         // setPopup(true);
         navigate("/ListEmployeeComponent")
          

          
        } 
      } catch (error) {
        alert(error);
      }
      
      setEmail("");
      setPassword("")
      
    }
  };

  

  const handleForgotPassword = () => {
    // Handle forgot password functionality
    console.log('Forgot password clicked');
    // Redirect to the forgot password page
    navigate('/Forget');
  };

  const handleSignUp = () => {
    // Handle new user sign up functionality
    console.log('New user sign up clicked');
    // Redirect to the sign-up page
    navigate('/signup');
  };
  const mystyle={
    backgroundImage:`url('${img}')`,
    height:'110vh',
    marginTop:'-70px',
    width:'1380px',
    paddingLeft:'400px',
    marginLeft:'-150px',
    marginRight:'50%',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
};

  return (
    <div style={mystyle}>

    <div className="signup_box" style={{paddingRight:'800px',paddingTop:"80px"}}>

      <div className="login__box" style={{width:"1000px",height:"450px",align:"center",marginTop:"100px",backgroundColor:'rgba(255,255,255,0.4)',marginLeft:"-130px"}}>
        <h2 className="login__heading" >Login</h2>
        <button className="login__submit-button" type="button" onClick={handleSignUp} style={{"paddingRight":"10px",marginBottom:"70px"}} >Sign Up</button>
        <form onSubmit={handleSubmit}>
          <div className="login__form-group">
            <label className="login__label">Email:</label>
            <input className="login__input" type="email" value={email} onChange={handleEmailChange} style={{backgroundColor:'rgba(255,255,255,0.4)'}}required />
          </div>
          <div className="login__form-group">
            <label className="login__label">Password:</label>
            <div className="login__password-input">
              <input className="login__input" type={showPassword ? 'text' : 'password'} value={pasword} onChange={handlePasswordChange} style={{backgroundColor:'rgba(255,255,255,0.4)'}}required />
              <input className="login__show-password-checkbox" type="checkbox" checked={showPassword} onChange={handleShowPasswordToggle} style={{backgroundColor:'rgba(255,255,255,0.4)'}}/>
            </div>
          </div>
          
          <div className="login__form-group">
            
              <button className="login__submit-button" style={{"bottom":"100px","marginLeft":"-60px",marginBottom:"40px"}}type="submit" onClick={handleSubmit}>Submit</button>

            
              <div className="login__options">
              <a href="/Foget" onClick={handleForgotPassword} style={{"marginRight":"200px"}}>Forgot password</a>

        
      </div>
          </div>
          </form>
      </div>
      
      
    </div>
    </div>
   
  );
}

export default Login