import React from "react";
import Navbar from "../Features/Header/Navbar";
import Dashboard from "../Features/Dashboard/Dashboard"
import Sidebar from "../Features/Sidebar/Sidebar";
import Footer from "../Features/Footer/Footer";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Navpage from "../Route";
import { Outlet } from "react-router-dom";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 960,
      md: 960,
      lg: 1280, // Customize this breakpoint value as needed
      xl: 1920,
    },
  },
});

function Mainpage() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
              <Grid item xs={12} md={2} sx={{ backgroundColor: "#FFF1FF" ,minHeight: "100vh",}}>
                <Sidebar />
              </Grid>
            )}

            <Grid
              item
              xs={12}
              md={10}
              sx={{
                backgroundColor: "#FEFCFE",
                minHeight: "100vh",
                padding: "20px",
              }}
            >
              <Outlet />
            </Grid>
          </Grid>
        </section>

        <section>
          <div>
            <Footer />
          </div>
        </section>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Mainpage;
