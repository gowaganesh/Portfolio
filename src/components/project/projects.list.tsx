import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid'; // Import Grid component
import ProjectImage from "../../assets/project1.jpg";

export const ProjectsList = () => {
  const cards = Array(10).fill(null); 
  return (
    <Grid container spacing={2}>
      {cards.map((_, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <ProjectCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsList;

const ProjectCard = () => {
  return (
    <Card sx={{ maxWidth: "sm", maxHeight: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          src={ProjectImage}
          alt="project"
          sx={{
            height: 150,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Data Project explanation
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
