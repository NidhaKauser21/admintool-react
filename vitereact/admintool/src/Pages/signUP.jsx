import React from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignupPage = () => {
  const [showPassword, setPassword] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        marginTop: 2,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Paper elevation={5} sx={{ padding: 9, width: "100%" }}>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          sx={{ marginBottom: 2, color: "#A6B50C", fontSize: "40px" }}
        >
          Sign Up
        </Typography>
        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="Phone Number"
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
          <Link href="#">Already have an account? Log In</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default SignupPage;
