import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Avatar,Button, } from '@mui/material';
import '../../Style/project.css';
import renderPieChart from './Chart';
import googleLogo from '../../assets/Google.png';


function ProjectPage() {

  const project = {
    title: 'Google',
    description: 'This is an example project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is an example project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is an example project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is an example project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is an example project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is an example project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is an example project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    startDate: '2023-01-01',
    endDate: '2023-06-30',
    team: [
      { name: 'John Doe', email: 'john@example.com', role: 'Developer',  joinedDate: '2023-06-30', leaveDate: '2023-06-30', },
      { name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', joinedDate: '2023-06-30',leaveDate: '2023-06-30', },
    ],
    website: 'https://example.com',
    contact: 'contact@example.com',
    toolsUsed: ['React js','Node js','SQL'],
  };

  return (
    <div className="project-page">
      
      <div className="project-title">
        <a className=" Card_link" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <h1 style={{fontSize:'50px',margin:'0',marginTop:'0',}}>{project.title}</h1>
        </a>
      </div>

      <div className="project-header">
        <div style={{marginRight:'0px'}}>
          <div>
            <a className="link"  href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <img src={googleLogo} alt="Project Logo"  style={{width:'100px ',height:'100px'}}/>
            </a>
          </div>
        </div>

        <div className="project-status">
          {renderPieChart()}
        </div>
      </div>

      <h2>Description</h2>
      <p style={{lineHeight:'1.7'}}>{project.description}</p>

      <div style={{marginBottom:'10px'}}>
        <h3 style={{ display: 'inline'}}>Project Start date: </h3> {project.startDate}
      </div>

      <div>
        <h3 style={{ display: 'inline' }}>project End date: </h3>{project.endDate}
      </div>

      <h2>Project Tools</h2>
      <div className="project-details1">
        <TableContainer component={Paper} className="custom-table-container">
          <Table className="custom-table">
            <TableHead>
              <TableRow >
                <TableCell >Project Role</TableCell>
                <TableCell >Tools Used</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell >Front end</TableCell>
                <TableCell >React js , Angular js</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Back end </TableCell>
                <TableCell>Node js</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >Database</TableCell>
                <TableCell>SQL</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <h2>Project Lead</h2>
      <div className="project-details">
        <TableContainer component={Paper} className="custom-table-container">
          <Table className="custom-table">
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Joined Date</TableCell>
                <TableCell>Leave Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {project.team.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Avatar alt={member.name} src={googleLogo} style={{ width: '50px', height: '50px' }} />
                  </TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>{member.joinedDate}</TableCell>
                  <TableCell>{member.leaveDate}</TableCell>
                  <TableCell>
                    <Button  variant="contained"
                  color="primary">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <h2>Project Team</h2>
      <div className="project-details" style={{marginBottom:'50px',}}>
        <TableContainer component={Paper} className="custom-table-container">
          <Table className="custom-table">
            <TableHead>
              <TableRow>
                <TableCell  >Avatar</TableCell>
                <TableCell  >Name</TableCell>
                <TableCell  >Role</TableCell>
                <TableCell  >Joined Date</TableCell>
                <TableCell  >Leave Date</TableCell>
                <TableCell  >Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {project.team.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Avatar alt={member.name} src={googleLogo} style={{ width: '50px', height: '50px' }} />
                  </TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>{member.joinedDate}</TableCell>
                  <TableCell>{member.leaveDate}</TableCell>
                  <TableCell>
                    <Button  variant="contained"
                  color="primary">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </div>
  );
}

export default ProjectPage;
