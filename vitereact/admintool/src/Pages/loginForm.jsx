import React,{useState} from 'react';
import { Paper, Typography, TextField, Button, Container,Box ,Link,InputAdornment,IconButton} from '@mui/material';
import {AccountCircle, Visibility,VisibilityOff}from '@mui/icons-material';



const LoginPage = () => {
  const[showPassword,setShowPassword]=useState(false);

  const handlePasswordVisibilityToggle = () =>{
    setShowPassword((prevShowPassword) =>!prevShowPassword);
  };


  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function EmailTextField() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(emailRegex.test(newEmail));
  };

  return (
    
    <Container maxWidth="xs"
     
        style={{
          marginTop: 3,
          display: 'flex',
          justifyContent:"center",
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
       
        <Paper elevation={5} sx={{ padding: 9, width: '100%' }}>
          <Typography variant="h5" component="h2" align="center" sx={{ marginBottom: 2 ,color:"#A6B50C",fontSize:"40px"}}>
            Login
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
            helperText={!isValidEmail ? 'Invalid email address' : ''}
          />
          
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type={showPassword ? 'text' : 'password'}
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
          <Button variant="contained" fullWidth 
          sx={{ marginTop: 2,backgroundColor: "#BECE20",
          '&:hover':{
            backgroundColor:"#BECE20",
          },
          '&:active':{
            backgroundColor:"#BECE20",
          },
          '&:focus':{
            outline: "none",
          },
          }}>  
            LogIn
          </Button>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            <Link href="#">Forgot Password?</Link>
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Don t have an account? <Link href="#">Sign Up</Link>
          </Typography>
         
        </Paper>
   
    </Container>
    
  );
  }
  return EmailTextField();

};

export default LoginPage;
