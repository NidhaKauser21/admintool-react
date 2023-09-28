import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import projectCard from "../../Data/Project_data.json";
import { Link } from "react-router-dom";

export default function ProjectCard() {
  return (
    <div>
      <div style={{ display: "flex", paddingRight: "25px" }}>
        <Typography variant="h4">All projects</Typography>

        <Button
          size="medium"
          sx={{
            backgroundColor: "#BECE20",
            color: "white",
            marginLeft: "auto",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#BECE20",
            },
          }}
        >
          + NEW PROJECT
        </Button>
      </div>

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
                to={`/project_detail/${data.id}`}
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
