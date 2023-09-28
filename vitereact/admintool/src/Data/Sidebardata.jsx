import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';

export const  Sidebardata = [
  {
    title:"Dashboard",
    icon:< DashboardOutlinedIcon/>,
    link:"/Dashboard"
  },
  {
    title:"Employee",
    icon:<PeopleOutlinedIcon />,
    link:"/Employee"
  },
  {
    title:"project",
    icon:<DescriptionOutlinedIcon />,
    link:"/project"
  },
  {
    title:"Accounting",
    icon:<AccountBalanceOutlinedIcon />,
    link:"/Accounting"
  },
  {
    title:"Assets",
    icon:<CollectionsOutlinedIcon />,
    link:"/Asset_management"
  },
]
