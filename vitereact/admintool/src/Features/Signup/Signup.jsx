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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Navadhiti_logo from "../../assets/Navadhiti_logo.png";
import { useForm, Controller } from "react-hook-form";

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

  const { control, formState, handleSubmit,  setError, clearErrors, } = useForm();
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

  const onSubmit = async (data) => {
    if (data.Password !== data.ConfirmPassword) {
      setError("ConfirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    } 
    else {
      clearErrors("ConfirmPassword");

      const url = `https://admintool-bf845-default-rtdb.firebaseio.com/signup.json`;
      console.log(data);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log("Data saved to Firebase");
        } else {
          console.log("Failed to save data to Firebase", response);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="Name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!formState.errors.Name}
                  helperText={formState.errors.Name?.message}
                  {...field}
                />
              )}
            />
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
                  error={!!formState.errors.Email}
                  helperText={formState.errors.Email?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="EmpId"
              control={control}
              defaultValue=""
              rules={{ required: "ID is required" }}
              render={({ field }) => (
                <TextField
                  label="EmpId"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!formState.errors.EmpId}
                  helperText={formState.errors.EmpId?.message}
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

            <Controller
              name="ConfirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: "confirm Password is required",
              }}
              render={({ field }) => (
                <TextField
                  label=" ConfirmPassword"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type={showconfirmPassword ? "text" : "password"}
                  error={!!formState.errors.ConfirmPassword}
                  helperText={formState.errors.ConfirmPassword?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleconfirmPasswordVisibilityToggle}
                          edge="start"
                        >
                          {showconfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
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
            Already have an account? <Link to="/Login">Log In</Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default SignupPage;
