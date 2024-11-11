import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const WorkExperience = () => {
  const workExperienceItems = [
    {
      companyName: "Accenture Coimbatore",
      duration: "(March 2023 - Present)",
      role: "Data Engineer",
      position: "Application Development Analyst",
      description: "Working on data integration and analysis projects.",
    },
    {
      companyName: "Accenture Coimbatore",
      duration: "(June 2021 - February 2023)",
      role: "Data Engineer",
      position: "Application Development Associate",
      description: "Developed ETL pipelines and data warehousing solutions.",
    },
  ];

  return (
    <Box>
      <List>
        {workExperienceItems.map((exp, index) => (
          <ListItem key={index} disablePadding>
            <Box sx={{ width: "100%" }}>
              <ListItemText
                primary={
                  <Typography>
                    <b>{exp.companyName}:</b> {exp.role} - {exp.position}
                  </Typography>
                }
                secondary={exp.duration}
              />
              {exp.description && (
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  {exp.description}
                </Typography>
              )}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default WorkExperience;
