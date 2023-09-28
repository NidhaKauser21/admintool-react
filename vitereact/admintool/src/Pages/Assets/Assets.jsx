import React from "react";
import Typography from '@mui/material/Typography';
import {Button}from "@mui/material";
import Searchbar from '../../Components/Searchbar'

export default function Assets() {
  return(
  <div>
    <div className="header-button" style={{display:"flex",   fontWeight:"bold",}}>
        <Typography variant="h4">
        Assets
        </Typography>
        
        <Button
        size="medium"
        sx={{
        backgroundColor: "#BECE20",
        color: "white",
        marginLeft:"auto",
        fontWeight: "bold",
        '&:hover':{
            backgroundColor:"#BECE20"
        },
        }}>
        + Add Assets  
        </Button>
    </div>
    <Searchbar/>
   
  </div>
  );

}
