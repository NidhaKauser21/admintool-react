import {Routes,Route, Navigate} from "react-router-dom";
import Accounting from '../Pages/Accounting';
import Assets from '../Pages/Assets';
import Dashboard from '../Pages/Dashboard';
import Project from '../Pages/project/Project';
import Project_detail from '../Pages/project/Project_detail';
import Employee from '../Pages/Employee/allEmployee';
import EmployeeDetails from "../Pages/Employee/EmployeeDetails";

const Navpage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" />}/>
        <Route path="/Accounting" element={<Accounting/>}/>
        <Route path="/Assets" element={<Assets/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Employee" element={<Employee/>}/>
        <Route path="/EmployeeDetails/:id" element={<EmployeeDetails/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/project_detail/:id"element={<Project_detail />} />

      </Routes>
    </div>
  );
};

export default Navpage
