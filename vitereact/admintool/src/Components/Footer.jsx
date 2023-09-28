import React from 'react';
import'../Style/Footer.css'
import Navadhiti_logo from '../assets/Navadhiti_logo.png'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <footer style={{ backgroundColor: '#ECEFF6', color: '#343A40', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center', justifyContent: 'center' }}>
          
            <img
                src={Navadhiti_logo}
                alt="Company Logo"
                style={{ maxWidth: '100px', maxHeight: '100px', marginBottom: isSmallScreen ? '1rem' : 0 }}
            />

            <div>

                <Typography variant="h6" align="center">
                    <strong>NavaDhiti Business Consultancy Services Pvt Ltd.</strong>
                </Typography>

                <Grid container alignItems="center" justifyContent="center" spacing={1} style={{marginBottom:'15px'}}>
                    <Grid item>
                        <LocationOnIcon style={{ fontSize: '1.0rem', verticalAlign: 'middle',cursor: 'pointer' }} className="hovered-text"/>
                    </Grid>
                    <Grid item>
                        <a 
                            href="https://www.google.com/maps?q=Bengaluru" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ textDecoration: 'none', color: '#343A40', cursor: 'pointer' }}
                        >
                        <Typography variant="body2" color="#343A40" style={{ cursor: 'pointer' ,fontSize: '16px' ,}} className="hovered-text">
                            Bengaluru  
                        </Typography>
                        </a>
                    </Grid>
                    <Grid item>
                        <LocationOnIcon style={{ fontSize: '1.0rem', verticalAlign: 'middle',cursor: 'pointer' }} className="hovered-text"/>
                    </Grid>
                    <Grid item >
                        <a 
                            href="https://www.google.com/maps?q=Mettupalayam" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ textDecoration: 'none', color: '#343A40', cursor: 'pointer' }}
                        >
                        <Typography variant="body2" color="#343A40" style={{ cursor: 'pointer',fontSize: '16px' }}  className="hovered-text">
                            Mettupalayam
                        </Typography>
                        </a>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center" spacing={2} style={{marginBottom:'10px'}}>
                    <Grid item>
                        <a
                        href="https://www.facebook.com/in/your-facebook-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', }}
                        >
                        <IconButton style={{fontSize: '2rem', transition: 'color 0.3s ease-in-out' }}>
                            <FacebookIcon className="hovered-text"/>
                        </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a
                        href="https://www.twitter.com/in/your-twitter-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none'}}
                        >
                        <IconButton style={{  fontSize: '2rem', transition: 'color 0.3s ease-in-out' }}>
                            <TwitterIcon className="hovered-text"/>
                        </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a
                        href="https://www.instagram.com/in/your-instagram-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none'}}
                        >
                        <IconButton style={{fontSize: '2rem',transition: 'color 0.3s ease-in-out' }}>
                            <InstagramIcon className="hovered-text"/>
                        </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a
                        href="https://www.linkedin.com/in/your-linkedin-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none'}}
                        >
                        <IconButton style={{  color:'#343A40',fontSize: '2rem', transition: 'color 0.3s ease-in-out' }}>
                            <LinkedInIcon className="hovered-text"/>
                        </IconButton>
                        </a>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" justifyContent="center" spacing={1} style={{marginBottom:'8px'}}>
                    <div style={{ display: 'flex' }}>
                        <MailOutlineIcon style={{ fontSize: '1.2rem',cursor: 'pointer',padding:'3px', }} className="hovered-text" />
                        <a href="mailto:connect@navadhiti.com" style={{ textDecoration: 'none', color: '#343A40', cursor: 'pointer' }}>
                            <Typography variant="body2"  color="#343A40"  style={{ cursor: 'pointer', fontSize: '16px',}} className="hovered-text">
                                connect@navadhiti.com
                            </Typography>
                        </a>
                    </div>
                </Grid>

                <Typography variant="body2" align="center" style={{fontSize: '16px' }}>
                    Privacy policy &copy; {new Date().getFullYear()} Copyright Navadhiti. All Rights Reserved.
                </Typography>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
