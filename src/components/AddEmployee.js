import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import employeeService from "../services/employee.service";

const AddEmployee = () => {

    const[name, setName]=useState('');
    const[location, setLocation]=useState('');
    const[department, setDepartment]= useState('');

    const history = useHistory();

    const id =useParams();

    const saveEmployee =(e) =>{
        e.preventDefault();
        const employee ={name,location,department, id};
        if(id){
            employeeService.update(employee)
            .then(response=> {
                console.log('Employee data updated Successfull',response.data)
                history.push('/');
            })
            .catch(error =>{
                console.log('Something went wrong',error);
            })
        }
        else
        {  
             employeeService.create(employee)
            .then(response => {
                console.log('Employee data add successfully',response.data);
                history.push('/');
            })
            .catch(error=>{
                console.log('Something went wrong',error);
            }) 
        }
    

        }
        useEffect(()=>{
            if(id){
          employeeService.get(id)
                .then(employee => {
                    setName(employee.data.name);
                    setLocation(employee.data.location);
                    setDepartment(employee.data.department);
                })
                .catch(error => {
                    console.log('Something went wrong',error);
                });
            }
        }, )
        
    
    return(
        <div className="container">
            <h1>Add New Employee</h1>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control col-4"
                    id="name"
                    value ={name}
                    onChange={(e)=> setName(e.target.value)}
                    placeholder ="Enter name"
                    />
</div>
<div className="form-group">
                     <input
                    type="text"
                    className="form-control col-4"
                    id="location"
                    value ={location}
                    onChange={(e)=> setLocation(e.target.value)}
                    placeholder ="Enter location"
                    />
                    </div>
                    <div className="form-group">

                    <input
                    type="text"
                    className="form-control col-4"
                    id="department"
                    value ={department}
                    onChange={(e)=> setDepartment(e.target.value)}
                    placeholder ="Enter department"
                    />
                   
                    </div>
                    <button className="btn btn-success " onClick={(e) => saveEmployee(e)} >Save data</button>
                    </form>
                    <hr/>
                    <Link to = "/" className="btn btn-primary">Back to list</Link>
            </div>
    )
}
export default AddEmployee;