import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/bookk";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(book_id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + book_id);
    }

    updateEmployee(employee, book_id){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + book_id, employee);
    }

    deleteEmployee(book_id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + book_id);
    }
}

export default new EmployeeService();