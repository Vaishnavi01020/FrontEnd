import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forget.css';
import './SignUp.css';
import axios from 'axios';
import img from "./img5.jpg";
function Forget() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const loginpassworddata = {
    email: email,
    pasword: confirmPassword,
    
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, New Password: ${newPassword}, Confirm Password: ${confirmPassword}`);
    event.preventDefault();

    axios.put(`http://localhost:8080/api/forgotpassword/login/${email}`, loginpassworddata)
      .then(() => {
        navigate('/Login');
      })
      .catch((error) => {
        console.error(error);
      });
      
    };
    const mystyle={
      backgroundImage:`url('${img}')`,
      height:'110vh',
      marginTop:'-149px',
      overview:'hidden',
      width:'1380px',
      paddingLeft:'400px',
      marginLeft:'-150px',
      marginRight:'50%',
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat',
  };
  
 

  return (
    <div>
      <div style={mystyle}>
      <div className="signup-box" style={{marginRight:'400px',paddingBottom:'150px',PaddingRight:"1000px",height:"450px",backgroundColor:'rgba(255,255,255,0.4)',position:"relative",top:"150px",width:"50%",height:"75%"}}>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:       
            <input type="text" value={email} onChange={handleEmailChange} style={{backgroundColor:'rgba(255,255,255,0.4)',marginLeft:"90px"}}/>
          </label>
          <label>
            New Password:
            <input type="password" value={newPassword} onChange={handleNewPasswordChange} style={{backgroundColor:'rgba(255,255,255,0.4)',marginLeft:"30px"}}/>
          </label>
          <label>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} style={{backgroundColor:'rgba(255,255,255,0.4)',marginLeft:"20px"}}/>
          </label>
          <button type="submit" onClick={handleSubmit} style={{marginTop:"50px",marginLeft:"200px"}}>Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Forget;