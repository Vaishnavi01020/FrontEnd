import React, { Component } from 'react'
import EmployeeService from './EmployeeServices';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            price: '',
        
        }
        this.changeidHandler = this.changebook_idHandler.bind(this);
        this.changepriceHandler = this.changepriceHandler.bind(this);
        
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({id: employee.id,
                    price: employee.price
                    
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {id: this.state.id, price: this.state.price};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/bookk');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/bookk');
            });
        }
    }
    
    changeidHandler= (event) => {
        this.setState({id: event.target.value});
    }

    changepriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/bookk');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Book</h3>
        }else{
            return <h3 className="text-center">Update Book</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> book_id: </label>
                                            <input placeholder="book_id" name="book_id" className="form-control" 
                                                value={this.state.id} onChange={this.changeidHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> price: </label>
                                            <input placeholder="price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changepriceHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "50px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
