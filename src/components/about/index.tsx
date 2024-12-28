import {
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState, useMemo, lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { constants } from "../../lib/utils/constants/constants";
import AppContainer from "../common/appContainer";
import HeroImageContainer from "../layout/heroImageContainer";
import useImageLoader from "../../lib/hooks/useImageLoader";

const WorkExperience = lazy(() => import("./workExperience"));
const Awards = lazy(() => import("./awards"));
const Certifications = lazy(() => import("./certifications"));
const Education = lazy(() => import("./education"));

const loadImage = async () => {
  const module = await import("../../assets/bg3.jpg");
  return module.default;
};

const AboutIndex = () => {
  const { pathname } = useLocation();
  const { ABOUT, AWARDS, CERTIFICATIONS, EDUCATION } = constants.ROUTES;
  const [currentPage, setCurrentPage] = useState(pathname || ABOUT);
  const imageUrl = useImageLoader(loadImage);

  const aboutItems = useMemo(() => [
    { label: "Work Experience", path: ABOUT },
    { label: "Awards & Recognitions", path: AWARDS },
    { label: "Certifications", path: CERTIFICATIONS },
    { label: "Education", path: EDUCATION },
  ], [ABOUT, AWARDS, CERTIFICATIONS, EDUCATION]);

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname]);

  const getPage = () => {
    switch (currentPage) {
      case ABOUT:
        return <WorkExperience />;
      case AWARDS:
        return <Awards />;
      case CERTIFICATIONS:
        return <Certifications />;
      case EDUCATION:
        return <Education />;
      default:
        return <WorkExperience />;
    }
  };

  const getPageName = () => {
    switch (currentPage) {
      case ABOUT:
        return "Work Experience";
      case AWARDS:
        return "Awards & Recognition";
      case CERTIFICATIONS:
        return "Certifications";
      case EDUCATION:
        return "Education";
      default:
        return "Work Experience";
    }
  };


  return (
    <>
      {imageUrl && <HeroImageContainer imageUrl={imageUrl} />}
      <AppContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} sx={{ display: { xs: "none", sm: "block" } }}>
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
              {aboutItems.map(({ label, path }) => (
                <ListItem key={path} sx={{ py: 0 }}>
                  <Link to={path} replace>
                    <Typography
                      sx={{
                        py: 0.5,
                        cursor: "pointer",
                        color: path === currentPage ? "black" : "GrayText",
                        ":hover": { color: "black" },
                        fontSize: path === currentPage ? 20 : 14,
                      }}
                      fontWeight={600}
                    >
                      {label}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} sm={9}>
            <Suspense fallback={<Typography>Loading...</Typography>}>
              <Typography sx={{
                visibility : {
                  sm : 'hidden'
                }
              }} variant="h3" py={2}>{getPageName()}</Typography>
              {getPage()}
            </Suspense>
          </Grid>
        </Grid>
      </AppContainer>
    </>
  );
};

export default AboutIndex;
