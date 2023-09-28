import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
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
              <div>
                <Typography fontWeight="bold">Phone : 987654321</Typography>
                <br />

                <Typography fontWeight="bold">
                  Email : ajay@gmail.com
                </Typography>
                <br />

                <Typography fontWeight="bold">Birthday : 24th july</Typography>
                <br />

                <Typography fontWeight="bold">
                  Adress : Veerapandi pirivu karamadai,Mettupaplayam
                </Typography>
                <br />

                <Typography fontWeight="bold">Gender : Male</Typography>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>

      {/* ....Bank Informations..... */}

      <Box
        sx={{
          width: "100%",
          display: "flex",
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

            <div style={{ padding: "15px" }}>
              <div>
                <Typography variant="h5">Bank Information</Typography>
                <Divider inset="none" />
              </div>

              <div>
                <Typography sx={{ marginTop: "20px", padding: "10px" }}>
                  Bank Name : ICICI Bank
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  Bank Account No : 1598345678
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  IFSC Code : ICI4567
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  PAN No : TC000011
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

            <div style={{ padding: "15px" }}>
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
        sx={{
          width: "100%",
          display: "flex",
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

            <div style={{ padding: "15px" }}>
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

            <div style={{ padding: "15px" }}>
              <div>
                <Typography variant="h5">Personal Information</Typography>
                <Divider inset="none" />
              </div>

              <div>
                <Typography sx={{ padding: "10px", marginTop: "20px" }}>
                  Aadhar No : 123456789
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  Tel no : 9876543210
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  Nationality : Indian
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  Marital Status : Single
                </Typography>

                <Typography sx={{ padding: "10px" }}>
                  Employement of Spouse : No
                </Typography>

                <Typography sx={{ padding: "10px" }}>children : NO</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
