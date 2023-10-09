import React, { useState } from "react";
import {Paper,Typography,TextField,Button,Container,InputAdornment,IconButton,} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Navadhiti_logo from "../../assets/Navadhiti_logo.png";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);


  const handlePasswordVisibilityToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{6,}$/;

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(emailRegex.test(newEmail));
  };

  const handlePasswordChange = (event) => {
    const newpassword = event.target.value;
    setPassword(newpassword);
    setIsValidPassword(passwordRegex.test(newpassword));
  };

  const handleLogin = async () => {
    console.log("Button is clicked....");
     const url = `https://admintool-bf845-default-rtdb.firebaseio.com/login.json`;
    const userData = {
      email,
      password,
    };
    console.log(userData);

    try {
      console.log(url);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Data saving data to Firebase');
      } else {
        console.error('Error saving data to Firebase');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

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
          marginTop: "50px",
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
            Login in to Navadhiti
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            value={email}
            onChange={handleEmailChange}
            error={!isValidEmail}
            helperText={!isValidEmail ? "Invalid email address" : ""}
          />

          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handlePasswordChange}
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
          <Button
            fullWidth
            sx={{
              color: "white",
              marginTop: 2,
              backgroundColor: "#BECE20",
              "&:hover": {
                backgroundColor: "#BECE20",
              },
              "&:active": {
                backgroundColor: "#BECE20",
              },
              "&:focus": {
                outline: "none",
              },
            }}
            onClick={handleLogin}
          >
            LogIn
          </Button>
          <Typography variant="body2" sx={{ marginTop: 2, fontSize: "15px" }}>
            <Link href="#">Forgot Password?</Link>
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginTop: 2, cursor: "pointer", fontSize: "15px" }}
          >
            Dont have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginPage;
