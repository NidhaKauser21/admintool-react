import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt="atomz"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Atomz
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Mobile Application to help Ev Users charge their vehicles, locate the chargers , and pay their electric bills
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" sx={{backgroundColor:"#BECE20", color: "white", 
         '&:hover':{
          backgroundColor:"#BECE20",
         },
          '&:focus':{
            outline: "none",
          },
      
      }}>
          Learn more 
        </Button>
      </CardActions>
    </Card>
  );
}
