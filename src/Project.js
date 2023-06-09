import React from 'react';
import './style.css';
import mylogo from './loggg.png';
import {Link} from "react-router-dom";
import './App.css';
import image  from './bg.png';


export default class Project extends React.Component {
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
<img src={mylogo} alt="logo" className="omg"/>

          <form className="b">
        
              <h1 className = 'head1'>For Work Together</h1><br></br>
              <h1 className = 'head2'>REGISTRATION</h1><br></br>
              <input className='in1' placeholder='First name'/>
              <input className='in2' placeholder='Last Name'/><br></br><br></br>
              <select className='in3' >
  <option value="" hidden>Courses</option>
  <option value="" >MBBS</option>
  <option value="" >Diploma</option>
  <option value="">MS/MD/DNB</option>
  <option value="">DM/M Ch/FNB</option>
  <option value="">MD/MS & Higher</option>
  <option value="">PDDC(Post Doctoral Certificate Course)</option>
  <option value="">Other</option>

              </select>
              <select className='in4' >
  <option value="" hidden>Choose Gender</option>
  <option value="" >Male</option>
  <option value="">Female</option>
  <option value="">Other</option>
  
</select><br></br><br></br>
              <input className='in5' type='date' placeholder='DOB'/>
              <select className='in6' >
  <option value="" hidden>Worked Experience</option>
  <option value="" >No Experience</option>
  <option value="">1 year </option>
  <option value="">2 years</option>
  <option value="">5 years</option>
  <option value="">10 years</option>
  <option value="">More than 10 years</option>
  
</select><br></br><br></br>
              
              <input className='in7' placeholder='Worked Place Name'/>
              <input className='in8' placeholder='Contact Number'/><br></br><br></br>
              <input className='in9' placeholder='E-Mail'/>
              <select className='in10' >
  <option value="" hidden>Specialization</option>
  <option value="" >Oncology</option>
  <option value="" >Dermatology</option>
  <option value="">Pediatrics</option>
  <option value="">Neurology</option>
  <option value="">Family medicine</option>
  <option value="">Ophthalmology</option>
  <option value="">Infectious disease</option>
  <option value="">Cardiology</option>
  <option value="">Pulmonology</option>
  <option value="">Geriatrics</option>
  <option value="">Neueosurgery</option>
  <option value="">Endocrinology</option>
  <option value="">Urology</option>
  <option value="">Plastic Surgery</option>
  <option value="">Rheumatology</option>
  <option value="">Anesthesiology</option>
  <option value="">Otorhinolaryngology</option>
  <option value="">General surgery</option>
  <option value="">Gastroenterology</option>
  <option value="">Radiology</option>
  <option value="">Emergency medicine</option>
  <option value="">Psychiatery</option>
  <option value="">Orthopedics</option>
  <option value="">Internal medicine</option>
</select><br></br><br></br>
              <input className='in11'  placeholder='Permanent Address'/>
              <input className='in12'  placeholder='Residential Address'/><br></br><br></br>
              <button className='b1'>Register</button><br></br>
              <label className='in13'>If you already have an account </label>
              <Link to="/Projectlogin"><a>click here</a></Link>
        
              </form>     
        
      </div>
    )
  }
}

