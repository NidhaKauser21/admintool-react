import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Mock_data from '../Data/Mock_data.json'
import { useState } from 'react';
import'../Style/Dashboard.css'

export default function BasicTable() {
  const [data] = useState(Mock_data);
  function handleViewClick(index) {
    console.log(`View clicked for row at index ${index}`);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 ,}} className='Dashboard_table' >
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d, index) => (
            <TableRow key={d.id}>
              <TableCell>
                <Avatar alt={d.name} src={d.Avather} />
              </TableCell>
              <TableCell>{d.name}</TableCell>
              <TableCell>{d.role}</TableCell>
              <TableCell>{d['project name']}</TableCell>
              <TableCell>{d.start_date}</TableCell>
              <TableCell>{d.last_date}</TableCell>
              <TableCell>
                <Chip
                  label={d.status}
                  color={d.status === 'Completed' ? 'primary' : 'success'}
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleViewClick(index)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

