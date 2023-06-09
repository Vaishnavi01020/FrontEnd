import React, { Component } from 'react'
import EmployeeService from './EmployeeServices';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            book_id: this.props.match.params.id,
            price: ''
        }
        this.changebook_idHandler = this.changebook_idHandler.bind(this);
        this.changepriceHandler = this.changepriceHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({book_id: employee.book_id,
                price: employee.price
                
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {book_id: this.state.book_id, price: this.state.price};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/bookk');
        });
    }
    
    changebook_idHandler= (event) => {
        this.setState({book_id: event.target.value});
    }

    changepriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    

    cancel(){
        this.props.history.push('/bookk');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Book</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> book_id: </label>
                                            <input placeholder="book_id" name="book_id" className="form-control" 
                                                value={this.state.book_id} onChange={this.changebook_idHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> price: </label>
                                            <input placeholder="price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changepriceHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
