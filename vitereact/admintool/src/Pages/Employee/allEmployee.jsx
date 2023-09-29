import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import allEmployee from "../../Data/Employee/allEmployee.json";
import Searchbar from "../../Components/Searchbar";

export default function EmployeeCard() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Typography variant="h4" style={{ fontWeight: "600" }}>
            Employee
          </Typography>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Typography variant="h5">Dashboard /</Typography>
            <Typography variant="h6"> employee</Typography>
          </div>
        </div>

        <Button
          // size="small"
          sx={{
            width: { xs: "100px", md: "170px" },
            height: "50px",
            backgroundColor: "#BECE20",
            color: "white",
            marginLeft: "auto",
            paddingRight: { xs: "none", md: "25px" },
            fontWeight: { xs: "none", md: "bold" },
            "&:hover": {
              backgroundColor: "#BECE34",
              textAlign: "center",
            },
          }}
        >
          + NEW EMPLOYEE
        </Button>
      </div>
      <Searchbar />
      <div
        className="EmployeeCard"
        style={{
          // marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        {allEmployee.map((data) => (
          <Card
            key={data.id}
            sx={{
              width: 320,
              height: 250,
              boxShadow: 3,
              marginTop: "50px",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconButton
                aria-label="more"
                id="menu-button"
                aria-controls="card-menu"
                aria-expanded={anchorEl ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginLeft: "auto",
                }}
              >
                <MoreVertIcon />
              </IconButton>

              <Menu
                id="card-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="menu"
                style={{
                  boxShadow: "none",
                }}
              >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
              </Menu>

              <Avatar
                component={Link}
                to={`/EmployeeDetails/${data.id}`}
                src={data.avatarurl}
                sx={{ width: 100, height: 100 }}
              />

              <Typography variant="h5" sx={{ mt: 2 }}>
                {data.name}
              </Typography>

              <Typography
                variant="body1"
                sx={{ maxWidth: "24ch", textAlign: "center" }}
              >
                {data.jobtitle}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
