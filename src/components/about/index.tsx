import {
  colors,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import WorkExperience from "./workExperience";
import Projects from "./projects";

const AboutIndex = () => {
  const { pathname } = useLocation();
  console.log({
    pathname,
  });
  const [currentPage, setCurrentPage] = useState<string>(() => pathname ? pathname :"/experience");
  const aboutItems = [
    {
      label: "Work Experience",
      path: "/experience",
    },
    {
      label: "Projects",
      path: "/projects",
    },
  ];
  const onClickSections = (item: string) => {
    setCurrentPage(item);
    location.pathname = item
  };

  const getPage = (page: string) => {
    return {
      "/experience": <WorkExperience />,
      "/projects": <Projects />,
    }[page];
  };
  return (
    <Grid container spacing={2}>
      <Grid sx={{ flex: 0.3 , display:{xs:'none',sm:'block'} }}>
        <Typography
          color="textDisabled"
          fontWeight={700}
          variant="h6"
          textAlign="start"
          paddingLeft={2}
          paddingTop={1}
        >
          About
        </Typography>
        <List>
          {aboutItems.map((item) => (
            <ListItem sx={{ py: 0 }}>
              <Typography
                onClick={() => onClickSections(item?.path)}
                sx={{
                  py: 0.5,
                  cursor: "pointer",
                  color: item?.path === currentPage ? "black" : "GrayText",
                  ":hover": { color: "black" },
                }}
                fontWeight={600}
              >
                {item?.label}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid sx={{ flex: 1 }}>
        {getPage(currentPage)}
      </Grid>
    </Grid>
  );
};

export default AboutIndex;
