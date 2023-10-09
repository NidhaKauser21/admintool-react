import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setPassword(!showPassword);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
      <Container
          sx={{
            marginTop:'40px',
            marginBottom:'20px',
           width:{xs:'100%',md:'50%'}
          }}
      >
        <Paper elevation={5} sx={{ padding: 6}}>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{ marginBottom: 2, color: "#A6B50C", fontSize: "40px" }}
          >
            Sign Up
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Emp ID"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="start"
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="start"
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ marginTop: 2, backgroundColor: "#BECE20" }}
          >
            Sign Up
          </Button>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Already have an account? <Link to="/Loginpage">Log In</Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default SignupPage;
