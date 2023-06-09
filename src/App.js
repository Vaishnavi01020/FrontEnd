import './App.css';
//import Test from './Test';
import Sample from './Login';
import ReactDOM from 'react-dom/client';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
//import FooterComponent from './FooterComponent';
//import HeaderComponent from './HeaderComponent';
import ListEmployeeComponent from './ListEmployeeComponent';
import UpdateStudentComponent from './UpdateStudentComponent';
import SignUp from './SignUp';
import AddStudentComponent from './AddStudentComponent';
import EditOrDelete from './EditOrDelete';
import Forget from './Forget';

export default function App() {
  return (
   <div className="container">
    <Router>
   
    <Routes>
    
    <Route path="/" element={<SignUp/>}/>
    <Route path="/Login" element={<Sample/>}/>
    <Route path="/Forget" element={<Forget/>}/>
      <Route path="/ListEmployeeComponent" element={<ListEmployeeComponent/>}/>
      <Route path="/Addstudents" element={<AddStudentComponent/>}/>
      <Route path="/EditOrDelete" element={<EditOrDelete/>}/>
      <Route path="/ListEmployeeComponent" element={<ListEmployeeComponent/>}/>
      <Route path="/edit/:book_id" element={<UpdateStudentComponent/>}/>
    </Routes>
   </Router>
   </div>
   
  )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render
(
  <App/>
);
