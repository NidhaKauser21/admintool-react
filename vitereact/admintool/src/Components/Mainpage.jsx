import React from 'react';
import Navbar from './Navbar';
import NavPage from './Navpage';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600, // Customize this breakpoint value as needed
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function Mainpage() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <section>
          <div>
            <Navbar />
          </div>
        </section>

        <section>
          <Grid container>
            {/* Conditionally render the Sidebar based on screen size */}
            {isSmallScreen ? null : (
              <Grid item xs={12} md={2} sx={{ backgroundColor: '#FFF1FF', minHeight: '100vh' }}>
                <Sidebar />
              </Grid>
            )}

            <Grid item xs={12} md={10} sx={{ backgroundColor: '#FEFCFE', minHeight: '100vh', padding: '20px' }}>
              <NavPage />
            </Grid>
          </Grid>
        </section>

        <section>
            <div>
                <Footer/>
            </div>
        </section>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Mainpage;
