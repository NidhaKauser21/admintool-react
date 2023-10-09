import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, CardActionArea, CardActions } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import "../Searchbar/Searchbar.css";

export default function Assets() {
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <div className="searchbar" style={{}}>
        {/* Employee Name */}
        <div>
          <Box
            sx={{
              marginTop: "10px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Employee Name"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Box>
        </div>

        {/* Status Dropdown */}
        <div>
          <Box sx={{ marginTop: "10px" }}>
            <FormControl className="dropdown">
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="status"
                onChange={handleChange}
              >
                <MenuItem value={10}>Pending</MenuItem>
                <MenuItem value={20}>Approved</MenuItem>
                <MenuItem value={30}>Returned</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        {/*From-To Date */}
        {/* <div> */}
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{ width: "100%", marginTop: "2px" }}
              >
                <DatePicker label="From" />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{ width: "100%", marginTop: "2px" }}
              >
                <DatePicker label="To" />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          {/* Search button */}
          <div>
            <Button
              className="search-button"
              sx={{
                // width:"25ch",
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
              Search
            </Button>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
