import {
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WorkExperience from "./workExperience";
import Projects from "./projects";
import { constants } from "../../lib/utils/constants/constants";

const AboutIndex = () => {
  const { pathname } = useLocation();
  const { ABOUT , PROJECTS } = constants.ROUTES
  const [currentPage, setCurrentPage] = useState<string>( pathname ? pathname : ABOUT);
  const aboutItems = [
    {
      label: "Work Experience",
      path: ABOUT,
    },
    {
      label: "Projects",
      path: PROJECTS,
    },
  ];

  console.log({
    currentPage,pathname
  })
  useEffect(()=> {
    setCurrentPage(pathname)
  },[pathname])

  const getPage = () => {
    return {
      [ABOUT]: <WorkExperience />,
      [PROJECTS]: <Projects />,
    }[currentPage];
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
              <Link to={item?.path} replace>
              <Typography
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
            </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid sx={{ flex: 1 }}>
        {getPage()}
      </Grid>
    </Grid>
  );
};

export default AboutIndex;
