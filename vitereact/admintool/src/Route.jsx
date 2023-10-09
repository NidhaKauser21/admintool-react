import { Outlet, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Features/Dashboard/Dashboard";
import Employee from "./Features/Employee_card/EmployeeCard";
import EmployeeDetails from "./Features/Employee_details/EmployeeDetails";
import EmployeeCard_Edit from "./Forms/EmployeeCard_Edit";
import Project from "./Features/Project_card/Project";
import ProjectDetail from './Features/Project_details/Project_detail';
import Accounting from "./Features/Accounting/Accounting";
import Assets from "./Features/Assets/Assets";
import Myprofile from "./Features/My_profile/myProfile";
import Mainpage from "./Pages/Mainpage";
import Login from "./Features/Login/Login";
import Signup from "./Features/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "employee",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Employee />,
          },

          {
            path: "employeeDetails/:id",
            element: <EmployeeDetails />,
          },
          {
            path: "employeeCard_Edit",
            element: <EmployeeCard_Edit />,
          },
        ],
      },
      {
        path: "project",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Project />,
          },

          {
            path: "project_detail/:id",
            element: <ProjectDetail />,
          },
        ],
      },
      {
        path: "accounting",
        element: <Accounting />,
      },
      {
        path: "assets",
        element: <Assets />,
      },
      {
        path: "myprofile",
        element: <Myprofile/>,
      },
    ],
  },
  {
    path:'login',
    element: <Login/>
  },
  {
    path:'signup',
    element: <Signup/>

  } 
]);
