import {Sidebardata} from '../Data/Sidebardata';
import { NavLink } from 'react-router-dom';
import '../Style/Sidebar.css';

const Sidebar = () => {

  return (
  <div>
    <section>
        <div style={{ color: '#FEFCFE' }}>
          {
            Sidebardata.map((item, index)=>{
              return(
                <NavLink 
                to={item.link}
                key={index} 
                className='link'
                activeclassname='active'
                >
                  <div className='icon'>{item.icon}</div>
                  <div className='link_text'>{item.title}</div>
                </NavLink>
              )
            })
          }
        </div>
    </section>     
  </div>
  )
}

export default Sidebar

