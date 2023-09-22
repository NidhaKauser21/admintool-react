import {Routes,Route} from "react-router-dom";
import Accounting from '../Pages/Accounting';
import Asserts from '../Pages/Asserts';
import Dashboard from '../Pages/Dashboard';
import Employee from '../Pages/Employee';
import Project from '../Pages/Project';
import Home from '../Pages/Home';

const Navpage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Accounting" element={<Accounting/>}/>
        <Route path="/Asset_management" element={<Asserts/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Employee" element={<Employee/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </div>
  );
};

export default Navpage
