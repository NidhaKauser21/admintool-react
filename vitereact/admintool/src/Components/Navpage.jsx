import {Routes,Route, Navigate} from "react-router-dom";
import Accounting from '../Pages/Accounting';
import Assets from '../Pages/Assets';
import Dashboard from '../Pages/Dashboard';
import Employee from '../Pages/Employee';
import Project from '../Pages/project/Project';
import Project_detail from '../Pages/project/Project_detail';

const Navpage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" />}/>
        <Route path="/Accounting" element={<Accounting/>}/>
        <Route path="/Asset_management" element={<Assets/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Employee" element={<Employee/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/product_detail/:id"element={<Project_detail />} />

      </Routes>
    </div>
  );
};

export default Navpage
