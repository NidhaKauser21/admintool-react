import { Button, Typography } from "@mui/material";
import Searchbar from "../Components/Searchbar";
import TableComponent from "../Components/Table";
import data from "../Data/Mock_data.json";

const DataTable = () => {
  const tableHeaders = [
    "Avather",
    "name",
    "role",
    "project name",
    "start_date",
    "last_date",
    "status",
  ];

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Typography variant="h4" style={{ fontWeight: "600" }}>
            Dashboard
          </Typography>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Typography variant="h6">
              Employee Detail
            </Typography>
            {/* <Typography variant="h5">/ Assets</Typography> */}
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
      <TableComponent tableData={data} tableHeaders={tableHeaders} />
    </div>
  );
};

export default DataTable;
