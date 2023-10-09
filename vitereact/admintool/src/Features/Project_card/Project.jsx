import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import projectCard from "../../Data/projectCard.json";
import { Link } from "react-router-dom";
import Searchbar from "../../Components/Searchbar/Searchbar";

export default function ProjectCard() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Typography variant="h4" style={{ fontWeight: "600" }}>
            Project
          </Typography>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Typography variant="h5">Dashboard /</Typography>
            <Typography variant="h6">Project</Typography>
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
          + NEW PROJECT
        </Button>
      </div>

      <Searchbar />

      <div
        className="projectCard"
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "30px",
        }}
      >
        {projectCard.map((data) => (
          <Card elevation={9} key={data.id} sx={{ maxWidth: 320 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200px"
                image={data.Image}
                alt={data.Project_title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {data.Project_title}
                </Typography>
                <Typography variant="body2">
                  {data.Project_description}
                </Typography>

                <Typography>Start Date : {data.Start_date}</Typography>

                <Typography>End Date : {data.End_date}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                component={Link}
                to={`project_detail/${data.id}`}
                size="small"
                sx={{
                  backgroundColor: "",
                  marginLeft: 25,
                  color: "#BECE20",
                  fontWeight: "bold",
                }}
              >
                Learn more
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
