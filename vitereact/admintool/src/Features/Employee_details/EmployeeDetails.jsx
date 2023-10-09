import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import { useParams } from "react-router-dom";
import allEmployee from "../../Data/Employee/allEmployee.json";
import Bankinformation from "../../Data/Employee/Bank_information.json";
import Emergency from "../../Data/Employee/Contact.json";
import Educational from "../../Data/Employee/Personal.json";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import "../Employee_details/EmployeeDetails.css";

export default function EmployeeDetails() {
  const { id } = useParams();
  console.log(id);
  console.log(allEmployee);
  let Emp_Detail = allEmployee?.filter((value, index) => {
    return id == value.id;
  });

  let Bankinfo = Bankinformation?.filter((value, index) => {
    return id == value.id;
  });

  let Contactinfo = Emergency?.filter((value, index) => {
    return id == value.id;
  });

  let Educationalinfo = Educational?.filter((value, index) => {
    return id == value.id;
  });

  console.log(Bankinfo);
  console.log(Emp_Detail);
  console.log(Contactinfo);
  console.log(Educationalinfo);

  let employee = Emp_Detail[0];
  let bank = Bankinfo[0];
  let Emg_info = Contactinfo[0];
  let Personal_info = Educationalinfo[0];

  return (
    <div>
      <div>
        <Typography variant="h4" style={{ fontWeight: "600" }}>
          Profile
        </Typography>
        <div style={{ display: "flex", paddingTop: "10px" }}>
          <Typography variant="h5">Dashboard /</Typography>
          <Typography variant="h6"> profile</Typography>
        </div>
      </div>

      <div>
        {/* .......Profile Card...... */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            marginTop: { sx: "none", md: "40px" },
            overflow: { xs: "auto", sm: "initial" },
            display: "flex",
          }}
        >
          <Card
            elevation={5}
            sx={{
              width: "100%",
              flexWrap: "wrap",
              [`& > *`]: {
                "--stack-point": "500px",
                minWidth:
                  "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
              },
              display: "flex",
            }}
          >
            <Box sx={{ display: "felx", alignItems: "center", p: 3 }}>
              <Avatar
                alt="User Avatar"
                src={employee?.avatarurl}
                sx={{ width: 130, height: 130, marginTop: "7px" }}
              />
            </Box>

            <CardContent>
              <div>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ marginTop: "10px" }}
                >
                  {employee.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bold"
                >
                  {employee.jobtitle}
                </Typography>
                <br />

                <Typography fontWeight="bold">
                  Employee ID : {employee.Emp_id}
                </Typography>
              </div>
            </CardContent>

            <CardContent
              sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
              <EditIcon
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginLeft: "auto",
                  cursor: "pointer",
                  color: "primary",
                }}
              />

              <div>
                <Typography sx={{ fontWeight: "bold", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Phone:</span>{" "}
                  {employee.phone}
                </Typography>
                <br />

                <Typography sx={{ fontWeight: "bold", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Email:</span>
                  {employee.Email}
                </Typography>
                <br />

                <Typography sx={{ fontWeight: "bold", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Secondary Email:</span>
                  {employee.sec_email}
                </Typography>
                <br />

                <Typography sx={{ fontWeight: "bold", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Birthday:</span>
                  {employee.Dob}
                </Typography>
                <br />

                <Typography sx={{ fontWeight: "bold", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Address:</span>{" "}
                  {employee.Address}
                </Typography>
                <br />

                <Typography sx={{ fontWeight: "bold", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Gender :</span>{" "}
                  {employee.Gender}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>

      {/* ....Bank Informations..... */}

      <Box
        className="box1"
        sx={{
          width: "100%",
          flexDirection: "row",
          // justifyContent: "space-between",
          // gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 400px), 1fr))",
          gap: "20px",
        }}
      >
        <Card
          elevation={9}
          sx={{
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <CardContent>
            <EditIcon
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginLeft: "auto",
                cursor: "pointer",
                color: "primary",
              }}
            />

            <div>
              <div>
                <Typography variant="h5">Bank Information</Typography>
                <Divider inset="none" />
              </div>

              <div>
                <Typography
                  sx={{ marginTop: "20px", display: "flex", padding: "15px" }}
                >
                  <span style={{ minWidth: "150px" }}>Bank Name:</span>{" "}
                  {bank.bank_name}
                </Typography>

                <Typography sx={{ display: "flex", padding: "15px" }}>
                  <span style={{ minWidth: "150px" }}>Bank Account No:</span>{" "}
                  {bank.acc_no}
                </Typography>

                <Typography sx={{ display: "flex", padding: "15px" }}>
                  <span style={{ minWidth: "150px" }}>IFSC Code:</span>{" "}
                  {bank["IFSC code"]}
                </Typography>

                <Typography sx={{ display: "flex", padding: "15px" }}>
                  <span style={{ minWidth: "150px" }}>PAN No:</span>{" "}
                  {bank["PAN no"]}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* ....... Expirence............ */}
        <Card
          elevation={9}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "50px",
          }}
        >
          <CardContent>
            <EditIcon
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginLeft: "auto",
                cursor: "pointer",
                color: "primary",
              }}
            />

            <div>
              <div>
                <Typography variant="h5">Experience</Typography>
                <Divider inset="none" />
              </div>

              <div>
                <Typography sx={{ padding: "10px", marginTop: "20px" }}>
                  Frontend Developer - 2 Years
                  <br />
                  Navadhiti Solutions
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  Frontend Developer - 2 Years
                  <br />
                  Navadhiti Solutions
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  Frontend Developer - 2 Years
                  <br />
                  Navadhiti Solutions
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  Frontend Developer - 2 Years
                  <br />
                  Navadhiti Solutions
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>

      {/* ....Educational Information..... */}
      <Box
        className="box2"
        sx={{
          width: "100%",
          flexDirection: "row",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 400px), 1fr))",
          gap: "20px",
        }}
      >
        <Card
          elevation={9}
          sx={{
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <CardContent>
            <EditIcon
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginLeft: "auto",
                cursor: "pointer",
                color: "primary",
              }}
            />

            <div>
              <div>
                <Typography variant="h5">Educational Information</Typography>
                <Divider inset="none" />
              </div>

              <div>
                <Typography sx={{ marginTop: "20px", padding: "10px" }}>
                  {Personal_info.collage.pg.pg_name}
                  <br />
                  {Personal_info.collage.pg.pg_degree}
                  <br />
                  {Personal_info.collage.pg.pg_batch}
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                {Personal_info.collage.ug.ug_name}
                  <br />
                  {Personal_info.collage.ug.ug_degree}
                  <br />
                  {Personal_info.collage.ug.ug_batch}
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                {Personal_info.school.HSC.HSC_name}
                  <br />
                  {Personal_info.school.HSC.HSC_batch}
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                {Personal_info.school.SSLC.SSLC_name}
                  <br />
                  {Personal_info.school.SSLC.SSLC_batch}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ....... Personal Information............ */}

        <Card
          elevation={9}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "50px",
          }}
        >
          <CardContent>
            <EditIcon
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginLeft: "auto",
                cursor: "pointer",
                color: "primary",
              }}
            />

            <div>
              <div>
                <Typography variant="h5">Personal Information</Typography>
                <Divider inset="none" />
              </div>

              <div>
                <Typography
                  sx={{ padding: "10px", marginTop: "20px", display: "flex" }}
                >
                  <span style={{ minWidth: "150px" }}>Aadhar No:</span>{" "}
                  {Personal_info.Aadhar_no}
                </Typography>

                <Typography sx={{ padding: "10px", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Tel No:</span> {Personal_info["Tel no"]}
                </Typography>

                <Typography sx={{ padding: "10px", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Nationality:</span> {Personal_info.Nationality}
                </Typography>

                <Typography sx={{ padding: "10px", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Marital Status:</span>{" "}
                  {Personal_info["marital status"]}
                </Typography>

                <Typography sx={{ padding: "10px", display: "flex" }}>
                  <span style={{ minWidth: "190px" }}>
                    Employment of Spouse:
                  </span>{" "}
                  {Personal_info.Emp_of_Spouse}
                </Typography>

                <Typography sx={{ padding: "10px", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Children:</span> {Personal_info.children}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>

      {/* ....Emergency Contact..... */}

      <Box
        className="box3"
        sx={{
          width: "100%",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <Card
          elevation={9}
          sx={{
            width: "100%",
            flex: "1 ",
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <CardContent>
            <EditIcon
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginLeft: "auto",
                cursor: "pointer",
                color: "primary",
              }}
            />

            <div>
              <div>
                <Typography variant="h5">Emergency Contact</Typography>
                <Divider inset="none" />
              </div>

              <div>
                <Typography
                  sx={{
                    marginTop: "20px",
                    padding: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Primary
                </Typography>

                <div>
                  <Typography sx={{ padding: "10px", display: "flex" }}>
                    <span style={{ minWidth: "150px" }}>Name:</span> {Emg_info.contact.primary.name}
                  </Typography>

                  <Typography sx={{ padding: "10px", display: "flex" }}>
                    <span style={{ minWidth: "150px" }}>Relationship:</span>{" "}
                    {Emg_info.contact.primary.Relationship}
                  </Typography>

                  <Typography sx={{ padding: "10px", display: "flex" }}>
                    <span style={{ minWidth: "150px" }}>Phone No:</span>{" "}
                    {Emg_info.contact.primary.ph1},{Emg_info.contact.primary.ph2}
                  </Typography>
                </div>

                <Divider inset="none" />

                <Typography sx={{ padding: "10px", fontWeight: "bold" }}>
                  Secondary
                </Typography>

                <div>
                  <Typography sx={{ padding: "10px", display: "flex" }}>
                    <span style={{ minWidth: "150px" }}>Name:</span> {Emg_info.contact.secondary.name}
                  </Typography>

                  <Typography sx={{ padding: "10px", display: "flex" }}>
                    <span style={{ minWidth: "150px" }}>Relationship:</span>{" "}
                    {Emg_info.contact.secondary.Relationship}
                  </Typography>

                  <Typography sx={{ padding: "10px", display: "flex" }}>
                    <span style={{ minWidth: "150px" }}>Phone No:</span>{" "}
                    {Emg_info.contact.secondary.ph1}, {Emg_info.contact.secondary.ph2}
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ....... Family Information............ */}
        
        <Card
          elevation={9}
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "50px",
          }}
        >
          <CardContent>
            <EditIcon
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginLeft: "auto",
                cursor: "pointer",
                color: "primary",
              }}
            />

            <div>
              <div>
                <Typography variant="h5">Family Information</Typography>
                <Divider inset="none" />
              </div>

              <Table sx={{ marginTop: "30px" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Relationship</TableCell>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell>Phone Number</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{Emg_info.information[0].name}</TableCell>
                    <TableCell>{Emg_info.information[0].relationship}</TableCell>
                    <TableCell>{Emg_info.information[0].Dob}</TableCell>
                    <TableCell>{Emg_info.information[0].phone}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>{Emg_info.information[1].name}</TableCell>
                    <TableCell>{Emg_info.information[1].relationship}</TableCell>
                    <TableCell>{Emg_info.information[1].Dob}</TableCell>
                    <TableCell>{Emg_info.information[1].phone}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>{Emg_info.information[2].name}</TableCell>
                    <TableCell>{Emg_info.information[2].relationship}</TableCell>
                    <TableCell>{Emg_info.information[2].Dob}</TableCell>
                    <TableCell>{Emg_info.information[2].phone}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
