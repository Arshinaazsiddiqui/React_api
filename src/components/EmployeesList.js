import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import employeeService from "../services/employee.service";
import { Link  } from "react-router-dom";
const EmployeesList = () => {
  const [employees,setEmployees]=useState([]);
  
  const init = () =>{
    employeeService.getAll()
.then(response =>{
 console.log('Printing the employee data',response.data);
 setEmployees(response.data);
})
.catch(error => {
 console.log('Somthing went wrong',error);
})
}
  useEffect(()=> {
     init();
    },[])
    


   const handleDelete = (id) => {
       console.log('Printing id',id);
       employeeService.remove(id)
       .then(response => {
           console.log('Employee deleted', response.data);
            init();
        })
       .catch(error => {
        console.log('Somthing went wrong', error);
      })
   }

  return (  
    <div className="container">
      <h1>List of Employees</h1>
      <hr/>
      <div>
          <Link to ="/add" className= "btn btn-success mb-2"> Add Employee</Link>
        <table  className="table table-bordered table-striped">
        <thead className="thead-dark">
        <tr>
          <th>Name </th>
          <th>Location</th>
          <th>Department</th>
          <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {
            employees.map(employee =>(
              <tr key ={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.location}</td>
                <td>{employee.department}</td>
                <td>
                    <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>
                    <button className="btn btn-danger ml-2" onClick={()=> {
              handleDelete(employee.id);
          }}>Delete</button>
                </td>
              </tr>
            ))
          }
          
          </tbody>
          </table>
        </div>
      </div>
   );
}
 
export default EmployeesList;
