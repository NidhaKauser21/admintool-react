import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';

import Sidebar from './Sidebar'; // Import your Sidebar component here

export default function ButtonAppBar() {
  // Use the useMediaQuery hook to check the screen size
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  
  // State variable to track whether the drawer (sidebar) is open
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#F7F7F7' }}>
        <Toolbar>
          {/* Show MenuIcon only on small screens */}
          {isSmallScreen && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer} // Toggle the drawer (sidebar) when the button is clicked
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color: '#343A40' }} className="hovered-text" >
            Navadhiti
          </Typography>
          <Button sx={{color:'#343A40'}} className="hovered-text" >Login</Button>
        </Toolbar>
      </AppBar>
      {/* Use Drawer component to create the sliding sidebar */}
      <Drawer
        anchor="left" // You can change the anchor position if needed
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        {/* Render your Sidebar component inside the Drawer */}
        <Sidebar />
      </Drawer>
    </Box>
  );
}
