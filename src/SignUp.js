import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './SignUp.css';
import axios from "axios";
import img from "./im2.jpg";
import './Login.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const data={
    firstName : name,
    email: email,
    pasword: password
  }
  const newdata = {
    email: email,
    pasword: password
  }
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Submit the form
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  const handleLoginClick = () => {
    axios.post('http://localhost:8080/api/registerdata', data);
    axios.post('http://localhost:8080/api/logindata', newdata);
    navigate('/login'); // Navigate to the login page
  };

  const mystyle={
    backgroundImage:`url('${img}')`,
    height:'100vh',
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
        
      <div className="signup-box" style={{marginLeft:'350px',backgroundColor:'rgba(255,255,255,0.4)',paddingBottom:'200px'}}>
        <h2>Signup</h2>
        
        <div className="login__form-group" >
          <label className="login__label" >
            Name:
            <input type="text" value={name} onChange={handleNameChange} style={{backgroundColor:'rgba(255,255,255,0.4)'}} required />
          </label>
          </div>
          <div className="login__form-group">
          <label className="login__label">
            Email:
            <input type="email" value={email} onChange={handleEmailChange} style={{backgroundColor:'rgba(255,255,255,0.4)'}}required />
          </label>
          </div>
          <div className="login__form-group">
          <label className="login__label">
            Password:
            
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} style={{backgroundColor:'rgba(255,255,255,0.4)'}}required />
              <input type="checkbox" checked={showPassword} onChange={handleShowPasswordToggle} style={{backgroundColor:'rgba(255,255,255,0.4)'}}/>

            
          </label>
          </div>
          
          {error && <p>{error}</p>}
         
          <button type="button" onClick={handleLoginClick} style={{"marginLeft":"200px"}}>Login</button>
        </div>
      </div>
   
      
  );
}

export default SignUp;