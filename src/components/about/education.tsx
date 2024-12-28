import { Box, Typography } from '@mui/material'
import MarkdownRenderer from '../common/markdownRenderer'
import educationContent from '../../lib/data/education.md'

const Education = () => {
  return (
    <Box>
      <MarkdownRenderer contentUrl={educationContent} storageKey='education'/>
        {/* <Typography>Completed <mark>B.E in Computer Science and Engineering</mark> at KPR Institute of Engineering and Technology with <mark>82%</mark>/100 in academics.</Typography> */}
    </Box>
  )
}

export default Education