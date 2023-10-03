import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import "../../Style/EmployeeDetails.css";

export default function EmployeeDetails() {
  return (
    <div>
      <div>
        <Typography variant="h4">Profile</Typography>
      </div>

      {/* .......Profile Card...... */}

      <div>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            marginTop: "60px",
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
                src="https://www.navadhiti.com/static/a29663c6a8f421bd07024992a03d6758/e87b8/Ajay.I.webp"
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
                  AJAY I
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bold"
                >
                  Software Engineer
                </Typography>
                <br />

                <Typography fontWeight="bold">Employee ID : ND-0001</Typography>
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
                  <span style={{ minWidth: "150px" }}>Phone:</span> 987654321
                </Typography>
                <br />

                <Typography sx={{ fontWeight: "bold", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Email:</span>{" "}
                  ajay@navadhiti.com
                </Typography>
                <br />

                <Typography sx={{ fontWeight: "bold", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Secondary Email:</span>{" "}
                  ajay1@gmail.com
                </Typography>
                <br />

                <Typography sx={{ fontWeight: "bold", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Birthday:</span> 24th July
                </Typography>
                <br />

                <Typography sx={{ fontWeight: "bold", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Address:</span> Veerapandi
                  Pirivu Karamadai, Mettupalayam
                </Typography>
                <br />

                <Typography sx={{ fontWeight: "bold", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Gender:</span> Male
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
                <Typography variant="h5">Bank Information</Typography>
                <Divider inset="none" />
              </div>

              <div>
                <Typography
                  sx={{ marginTop: "20px", display: "flex", padding: "15px" }}
                >
                  <span style={{ minWidth: "150px" }}>Bank Name:</span> ICICI
                  Bank
                </Typography>

                <Typography sx={{ display: "flex", padding: "15px" }}>
                  <span style={{ minWidth: "150px" }}>Bank Account No:</span>{" "}
                  1598345678
                </Typography>

                <Typography sx={{ display: "flex", padding: "15px" }}>
                  <span style={{ minWidth: "150px" }}>IFSC Code:</span> ICI4567
                </Typography>

                <Typography sx={{ display: "flex", padding: "15px" }}>
                  <span style={{ minWidth: "150px" }}>PAN No:</span> TC000011
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
                  RV College of Arts and Science. (PG)
                  <br />
                  Msc Computer Science
                  <br />
                  2014-2016
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  RV College of Arts and Science. (UG)
                  <br />
                  Bsc Computer Science
                  <br />
                  2011-2014
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  SRSI Matric Higher Secondary School. (HSC)
                  <br />
                  2009-2011
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  SRSI Matric Higher Secondary School. (SSLC)
                  <br />
                  2008-2009
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
                  123456789
                </Typography>

                <Typography sx={{ padding: "10px", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Tel No:</span> 9876543210
                </Typography>

                <Typography sx={{ padding: "10px", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Nationality:</span> Indian
                </Typography>

                <Typography sx={{ padding: "10px", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Marital Status:</span>{" "}
                  Single
                </Typography>

                <Typography sx={{ padding: "10px", display: "flex" }}>
                  <span style={{ minWidth: "190px" }}>
                    Employment of Spouse:
                  </span>{" "}
                  No
                </Typography>

                <Typography sx={{ padding: "10px", display: "flex" }}>
                  <span style={{ minWidth: "150px" }}>Children:</span> No
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
                    <span style={{ minWidth: "150px" }}>Name:</span> John Doe
                  </Typography>

                  <Typography sx={{ padding: "10px", display: "flex" }}>
                    <span style={{ minWidth: "150px" }}>Relationship:</span>{" "}
                    Father
                  </Typography>

                  <Typography sx={{ padding: "10px", display: "flex" }}>
                    <span style={{ minWidth: "150px" }}>Phone No:</span>{" "}
                    9876543210, 9876543210
                  </Typography>
                </div>

                <Divider inset="none" />

                <Typography sx={{ padding: "10px", fontWeight: "bold" }}>
                  Secondary
                </Typography>

                <div>
                  <Typography sx={{ padding: "10px", display: "flex" }}>
                    <span style={{ minWidth: "150px" }}>Name:</span> Karen wills
                  </Typography>

                  <Typography sx={{ padding: "10px", display: "flex" }}>
                    <span style={{ minWidth: "150px" }}>Relationship:</span>{" "}
                    Brother
                  </Typography>

                  <Typography sx={{ padding: "10px", display: "flex" }}>
                    <span style={{ minWidth: "150px" }}>Phone No:</span>{" "}
                    9876543210, 9876543210
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
                    <TableCell>Karen Wills</TableCell>
                    <TableCell>Brother</TableCell>
                    <TableCell>04/06/1997</TableCell>
                    <TableCell>9876543210</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>John Wills</TableCell>
                    <TableCell>father</TableCell>
                    <TableCell>04/06/1997</TableCell>
                    <TableCell>9876543210</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>july Wills</TableCell>
                    <TableCell>Mother</TableCell>
                    <TableCell>04/06/1997</TableCell>
                    <TableCell>9876543210</TableCell>
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
