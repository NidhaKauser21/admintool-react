import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicEmployeeDetails() {
  const [department, setDepartment] = useState("");

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display:"flex",
        }}
      >
        <Card
          elevation={9}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <CardContent>
            <TextField variant="outlined" label="First Name" />
            <TextField variant="outlined" label="Last Name" />
            <TextField variant="outlined" label="User Name" required />
            <TextField variant="outlined" label="Email" required />
            <TextField label="Password" variant="outlined" required />
            <TextField label="Confirm Password" variant="outlined" required />
            <TextField variant="outlined" label="Employee ID" required />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{ width: "100%", marginTop: "2px" }}
              >
                <DatePicker label="Joinig Date" />
              </DemoContainer>
            </LocalizationProvider>
            <TextField
              typeof="num"
              variant="outlined"
              label="Phone Number"
              required
            />
            <FormControl className="dropdown">
              <InputLabel id="demo-simple-select-label">
                Select department
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={department}
                label="department"
                onChange={handleChange}
              >
                <MenuItem value={10}>Web Development</MenuItem>
                <MenuItem value={20}>IT marketing</MenuItem>
                <MenuItem value={30}>Testing</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="dropdown">
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Select Designation"
                onChange={handleChange}
              >
                <MenuItem value={10}>Web Designer</MenuItem>
                <MenuItem value={20}>Web Development</MenuItem>
                <MenuItem value={30}>Web Developer</MenuItem>
              </Select>
            </FormControl>
            <Button
              className="save-button"
              sx={{
                height: "55px",
                marginTop: "11px",
                backgroundColor: "#BECE20",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#BECE20",
                },
              }}
            >
              Save
            </Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
