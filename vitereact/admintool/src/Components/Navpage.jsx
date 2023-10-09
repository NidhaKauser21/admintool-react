import {Routes,Route, Navigate} from "react-router-dom";
import Accounting from '../Pages/Accounting';
import Assets from '../Pages/Assets';
import Dashboard from '../Pages/Dashboard';
import Project from '../Pages/project/Project';
import Project_detail from '../Pages/project/Project_detail';
import Employee from '../Pages/Employee/allEmployee';
import EmployeeDetails from "../Pages/Employee/EmployeeDetails";
import EditEmployee from "../Forms/NewEmployeeForm";
// import EmployeeForm from "../Forms/EmployeeForm";
import Loginpage from '../Pages/loginForm';
import Signup_page from '../Pages/signUP';

const Navpage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Loginpage" />}/>
        <Route path="/Accounting" element={<Accounting/>}/>
        <Route path="/Assets" element={<Assets/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Employee" element={<Employee/>}/>
        <Route path="/EmployeeDetails/:id" element={<EmployeeDetails/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/project_detail/:id"element={<Project_detail />} />
        <Route path="/EditEmployee"element={<EditEmployee/>} />
        {/* <Route path="/EmployeeForm"element={<EmployeeForm/>} /> */}


        <Route path="/Loginpage"element={<Loginpage/>} />
        <Route path="/Signup_page"element={<Signup_page/>} />

      </Routes>
    </div>
  );
};

export default Navpage
