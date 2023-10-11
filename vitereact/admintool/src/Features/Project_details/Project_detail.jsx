import "../Project_card/Project.css";
import TableComponent from "../../Components/Table/Table";
import data from "../../Data/projectCard.json";
import renderPieChart from "../Project_details/Chart";
import { useParams } from "react-router-dom";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function ProjectPage() {
  const { id } = useParams();
  console.log(id);
  // console.log(data);
  // let data1=null
  let productDetail = data?.filter((value, index) => {
    // console.log(value, index);
    // console.log(typeof id);
    // console.log(typeof value.id);
    return id == value.id;
  });

  // console.log(productDetail);
  // console.log(productDetail[0].Project_tools.Backend);
  const tableHeaders = ["Avather", "Name", "Role", "Joined_date", "Leave_date"];
  const tableHeaders1 = [
    "Avather",
    "Name",
    "Role",
    "Joined_date",
    "Leave_date",
  ];
  return (
    <div className="project-page">

      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Typography variant="h4" style={{ fontWeight: "600" }}>
            Project_detail
          </Typography>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Typography variant="h5">Dashboard /</Typography>
            <Typography variant="h6"> Project_detail</Typography>
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
          + EDIT DETAIL
        </Button>
      </div>

      <div style={{ marginTop: "50px" }}>
        {productDetail?.map((project, index) => (
          <div key={index}>
            <a
              className="link"
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 style={{ fontSize: "50px", margin: "0", marginTop: "0" }}>
                {project.Project_title}
              </h1>
            </a>

            <div className="project-header">
              <div style={{ marginRight: "0px" }}>
                <div>
                  <a
                    className="link"
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.Image}
                      alt="Project Image"
                      style={{
                        width: "300px",
                        height: "200px",
                        borderRadius: "20px",
                      }}
                    />
                  </a>
                </div>
              </div>

              <div className="project-status">
                {renderPieChart(project.Status)}
              </div>
            </div>

            <h2>Description</h2>
            <p style={{ lineHeight: "1.7" }}>{project.Project_description}</p>

            <div style={{ marginBottom: "10px" }}>
              <h3 style={{ display: "inline" }}>Project Start date: </h3>{" "}
              {project.Start_date}
            </div>

            <div>
              <h3 style={{ display: "inline" }}>project End date: </h3>
              {project.End_date}
            </div>
          </div>
        ))}

        <h2>Project Tools</h2>
        <div className="project-details1">
          <TableContainer component={Paper} className="custom-table-container">
            <Table className="custom-table">
              <TableHead>
                <TableRow>
                  <TableCell>Project Role</TableCell>
                  <TableCell>Tools Used</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Front end</TableCell>
                  <TableCell>
                    {productDetail
                      ? productDetail[0]?.Project_tools?.Frontend
                      : ""}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Back end </TableCell>
                  <TableCell>
                    {productDetail
                      ? productDetail[0]?.Project_tools?.Backend
                      : "-"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Database</TableCell>
                  <TableCell>
                    {productDetail
                      ? productDetail[0]?.Project_tools?.Database
                      : ""}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <h2>Project Lead</h2>
      <TableComponent
        tableData={productDetail ? productDetail : []}
        tableHeaders={productDetail ? tableHeaders : []}
      />
      <h2>Project Team</h2>
      <TableComponent
        tableData={productDetail ? productDetail : []}
        tableHeaders={productDetail ? tableHeaders1 : []}
      />
    </div>
  );
}
export default ProjectPage;
