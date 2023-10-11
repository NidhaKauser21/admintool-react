import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Navadhiti_logo from "../../assets/Navadhiti_logo.png";
import { useForm, Controller } from "react-hook-form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const { control, formState, handleSubmit } = useForm();
  const { isDirty, isSubmitting } = formState;

  const isPasswordValid = (value) => {
    const hasValidLength = value.length >= 8;
    const hasSpecialChar = /[!@#$%^&*]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);

    if (!hasValidLength) {
      return "Password must be at least 8 characters";
    }
    if (!(hasSpecialChar && hasUppercase && hasLowercase && hasNumber)) {
      return "Password must contain at least one special char, one uppercase letter, one lowercase letter, and one number";
    }
    return true;
  };

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const emailToFind = data.Email;
    const passwordToFind = data.Password;
    const url = "https://admintool-bf845-default-rtdb.firebaseio.com/signup.json";
    // const searchURL = `https://admintool-bf845-default-rtdb.firebaseio.com/signup.json?orderBy="Email"&equalTo="${emailToFind}"`;
    // console.log(searchURL);
    // // Make a GET request to the Firebase REST API
    // fetch(searchURL)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data !== null) {
    //       // User with the specified email found
    //       const userId = Object.keys(data)[0];
    //       console.log(userId); // Get the user ID
    //       const user = data[userId];
    //       console.log(user);

    //       // Check if the password matches
    //       if (user.Password === passwordToFind) {
    //         console.log("User found and password matches");
    //         console.log(user);
    //       } else {
    //         console.log("Password does not match");
    //       }
    //     } else {
    //       // No user with the specified email was found
    //       console.log("User not found");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error searching for user:", error);
    //   });
   // Make a GET request to retrieve user data
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((userData) => {
      console.log("Data retrieved successfully:", userData);
      let isValidUser = false;

      if (userData) {
        for (const userId in userData) {
          const user = userData[userId];
          if (user.Email === emailToFind && user.Password === passwordToFind) {
            isValidUser = true;
            console.log("Login successful. User details:", user);
            // Redirect to the dashboard (you need to define the `navigate` function)
            navigate("/dashboard");
            return; // Stop the loop once a valid user is found
          }
        }
      }

      if (!isValidUser) {
        console.log("Invalid username & password.");
      }
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
    });
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="Email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
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
                  error={!!formState.errors.Email}
                  helperText={formState.errors.Email?.message}
                  {...field}
                />
              )}
            />

            <Controller
              name="Password"
              control={control}
              defaultValue=""
              rules={{
                required: "Password is required",
                validate: { isPasswordValid },
              }}
              render={({ field }) => (
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type={showPassword ? "text" : "password"}
                  error={!!formState.errors.Password}
                  helperText={formState.errors.Password?.message}
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
                  {...field}
                />
              )}
            />
            <Button
              fullWidth
              type="submit"
              disabled={isSubmitting || !isDirty}
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
            >
              Sign up
            </Button>
          </form>

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
