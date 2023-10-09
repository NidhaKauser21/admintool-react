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
import Navadhiti_logo from "../../assets/Navadhiti_logo.png";

const SignupPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleconfirmPasswordVisibilityToggle = () => {
    setShowconfirmPassword(
      (prevShowconfirmPassword) => !prevShowconfirmPassword
    );
  };

  const [isValidPassword, setIsValidPassword] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          marginTop: "40px",
          marginBottom: "20px",
          width: { xs: "100%", md: "40%" },
        }}
      >
        <Paper elevation={5} sx={{ padding: 6 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.navadhiti.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Navadhiti_logo}
                alt="Navadhiti"
                style={{ maxHeight: "95px" }}
              />
            </a>
          </div>
          <Typography
            align="center"
            sx={{ marginBottom: 2, color: "#4c4a4a", fontSize: "30px" }}
          >
            Create your Admintool account
          </Typography>

          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="Name"
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
            // onChange={handlePasswordChange}
            error={!isValidPassword}
            helperText={!isValidPassword ? "Password should be min 6 char" : ""}
            type={showPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handlePasswordVisibilityToggle}
                    edge="start"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            // onChange={handlePasswordChange}
            error={!isValidPassword}
            helperText={!isValidPassword ? "Password should be min 6 char" : ""}
            type={showconfirmPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleconfirmPasswordVisibilityToggle}
                    edge="start"
                  >
                    {showconfirmPassword ? <Visibility /> : <VisibilityOff />}
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

          <Typography variant="body2" sx={{ marginTop: 2, fontSize: "15px" }}>
            Already have an account? <Link to="/Login">Log In</Link>
          </Typography>

        </Paper>
      </Container>
    </div>
  );
};

export default SignupPage;
