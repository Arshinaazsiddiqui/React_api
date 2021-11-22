import { BrowserRouter, Switch,Route } from "react-router-dom";
import EmployeesList from "./components/EmployeesList";
import  NotFound from "./components/NotFoundList";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from "./components/AddEmployee";

function App(){
  return(
   
    <BrowserRouter>
    <div>
      <div>
        <Switch>
          <Route exact path="/" component={EmployeesList}/>
          <Route exact path="/add" component={AddEmployee}/>
          <Route  exact path="/employees/edit/:id" component={AddEmployee}/>
          <Route  component ={NotFound}/>
        </Switch>
    </div>
    </div>
    </BrowserRouter>
  );


}

export default App;