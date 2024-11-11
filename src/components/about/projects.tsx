import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const Projects = () => {
  const projectItems = [
    {
      title: "Banking Data Integration for BANK OF AMERICA",
      description: "Consolidated diverse datasets, ensuring they met stringent quality standards for high-impact banking projects.",
    },
    {
      title: "SQL DDL Automation",
      description: "Achieved a 97% reduction in manual effort by automating SQL file generation for extensive databases, improving team efficiency and accuracy.",
    },
    {
      title: "NiFi Data Pipelines",
      description: "Designed and managed data flows for historical and incremental loads, encompassing full data lifecycle processes like mapping, cleansing, and validation.",
    },
    {
      title: "Vendor Collaboration",
      description: "Maintained clear communication with vendors, gathering requirements, providing updates, and promptly addressing project issues.",
    },
  ];

  return (
    <Box>
      <List>
        {projectItems.map((project, index) => (
          <ListItem key={index} >
            <Box sx={{ width: "100%" }}>
              <ListItemText
                primary={
                  <Typography variant="body1" fontWeight="bold">
                    {project.title}
                  </Typography>
                }
              />
              {project.description && (
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  {project.description}
                </Typography>
              )}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Projects;
