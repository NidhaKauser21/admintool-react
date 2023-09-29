import { Button, Typography } from "@mui/material";
import TableComponent from "../Components/Table";
import Asserts_data from "../Data/Assets.json";
import Searchbar from '../Components/Searchbar'
import React from "react";

const Asserts = () => {
  const tableHeaders = [
    "Asset_user",
    "Asset_Name",
    "Asset_Id",
    "Purchase_date",
    "Warrenty",
    "warrenty_end",
    "Amount",
    "Status1",
  ];

  return (
    <div>
      <div style={{ display: "flex",alignItems:'center' }}>
        <div>
          <Typography variant="h4" style={{ fontWeight: "600" }}>
            All Assets
          </Typography>
          <div style={{ display: "flex",paddingTop:'10px' }}>
          <Typography variant="h5" style={{ fontWeight: "600" }} >
           Dashboard 
          </Typography>
          <Typography variant="h5">
            / Assets
          </Typography>
          </div>

        </div>

        <Button
          // size="small"
          sx={{
            width:{xs:'100px',md:'170px'},
            height:'50px',
            backgroundColor: "#BECE20",
            color: "white",
            marginLeft: "auto",
            paddingRight:{xs:'none',md:'25px'},
            fontWeight:{xs:'none',md:'bold'},
            "&:hover": {
              backgroundColor: "#BECE34",
              textAlign:'center'
            },
          }}
        >
          + NEW ASSETS
        </Button>
      </div>
      <Searchbar/>
      <TableComponent tableData={Asserts_data} tableHeaders={tableHeaders} />
    </div>
  );
};

export default Asserts;
