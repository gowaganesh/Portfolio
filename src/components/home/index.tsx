import  Box  from "@mui/material/Box";
import HeroImageContainer from "../layout/heroImageContainer";
import homeBannerImage from "../../assets/bg2.jpg";
import AppContainer from "../common/appContainer";
import MarkdownRenderer from "../common/markdownRenderer";
import home from "../../lib/data/home.md"
const HomeIndex = () => {

  return (
    <>
      <HeroImageContainer imageUrl={homeBannerImage} />
      <AppContainer>
        <Box p={2}>
          <MarkdownRenderer contentUrl={home} storageKey="home"/>
        </Box>
      </AppContainer>
    </>
  );
};

export default HomeIndex;
