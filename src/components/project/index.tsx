import { Box } from '@mui/material'
import AppContainer from '../common/appContainer'
import { ProjectsList } from './projects.list'
import useImageLoader from '../../lib/hooks/useImageLoader';
import HeroImageContainer from '../layout/heroImageContainer';
const loadImage = async () => {
    const module = await import("../../assets/bg1.jpg");
    return module.default;
  };
const ProjectsPage = () => {
    const imageUrl = useImageLoader(loadImage);
  return (
    <>
    {imageUrl && <HeroImageContainer imageUrl={imageUrl} />}
    <AppContainer>
    <Box>
    <ProjectsList/>
    </Box>
    </AppContainer>
    </>
  )
}

export default ProjectsPage