import Box from '@mui/material/Box'

interface HeroImageContainerProps {
    imageUrl : any;
  }
const HeroImageContainer = (props:HeroImageContainerProps) => {
    const { imageUrl } = props
  return (
    <Box
    sx={{
      display: "flex",
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "500px",
      width: "100%",
      mt : -20
    }}
  />
  )
}

export default HeroImageContainer