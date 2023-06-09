import React, { Component } from 'react'
import EmployeeService from './EmployeeServices'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Book Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> book_id: </label>
                            <div> { this.state.employee.book_id }</div>
                        </div>
                        <div className = "row">
                            <label> price: </label>
                            <div> { this.state.employee.price }</div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
