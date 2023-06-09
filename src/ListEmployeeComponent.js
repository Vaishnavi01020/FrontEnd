import React, {  useEffect,useState } from 'react'
import BookService from './BookService'
import { Link } from 'react-router-dom'
import "./App.css"
import img from "./img12.jpg";
//import img from "./img7.PNG";
//import './EditOrDelete.css';
import './indexx.css';
function ListEmployeeComponent() {
    const [book, setBook] = useState([])
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        BookService.getUsers().then((response) => {
            setBook(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })

    }
    const deletee =(id) =>{
        BookService.delete(id).then((response) =>{
        getUsers();
        }).catch(error =>{
          console.log(error);
        })
      }
      const mystyle={
        backgroundImage:`url('${img}')`,
        height:'125vh',
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
        
        <div style={mystyle}>
        <div className="back"><br></br><br></br><br></br>
        <div className="container">
            <h2 className="text-center" style={{paddingBottom:"150px",paddingLeft:"500px",marginLeft:"100px"}}> List Of</h2>
         <Link to="/Addstudents" className="btn btn-primary nb-2" style={{}}>Add Book</Link>   
            <table className="table table-bordered table-striped" style={{position:"absolute",top:"200px",left:"100px",height:"100px",width:"1000px",backgroundColor:"white"}} >
                <thead>
                    <th> Recipe_id </th>
                    <th> Recipe_name </th>
                    <th> Preparation </th>
                    <th>Ingredients</th>
                    <th>Actions</th>
                    
                </thead>
                <tbody>
                    {book.map(
                        book => <tr key={book.book_id}>
                            <td>{book.book_id}</td>
                            <td> {book.book_name}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td><Link className="btn btn-info" to='/EditOrDelete'>Update</Link>
                            <button className="btn btn-danger" onClick={()=>deletee(book.book_id)} style={{marginLeft:"10px"}}>DELETE</button></td>
                        
                        </tr>

                    )}
                </tbody>
            </table>
            </div>
            
                    

                
            </div>
            </div>
           
        
    )
}

export default ListEmployeeComponent