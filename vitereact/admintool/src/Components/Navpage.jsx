import {Routes,Route} from "react-router-dom";
import Accounting from '../Pages/Accounting';
import Assets from "../Pages/Assets/Assets";
import Dashboard from '../Pages/Dashboard';
import Employee from '../Pages/Employee/allEmployee';
import EmployeeDetails from "../Pages/Employee/EmployeeDetails";
import Project from '../Pages/project/Project';

const Navpage = () => {
  return (
    <div>
      <Routes>
        <Route path="/Accounting" element={<Accounting/>}/>
        <Route path="/Assets" element={<Assets/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Employee/" element={<Employee/>}/>
        <Route path="/EmployeeDetails/:id" element={<EmployeeDetails/>}/>
        <Route path="/project" element={<Project/>}/>
        {/* <Route path="/project_detail/:id" element={<Project_detail/>}/> */}
      </Routes>
    </div>
  );
};

export default Navpage
