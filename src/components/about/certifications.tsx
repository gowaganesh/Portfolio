import { Box, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import MarkdownRenderer from '../common/markdownRenderer';
import certificationContent from '../../lib/data/certifications.md'
// const certifications: string[] = [
//   'Microsoft Azure Fundamentals (AZ-900)',
//   'Completed SQLForge, Data Engineering, GenAI trainings provided by Accenture',
//   '5-star rating on HackerRank (SQL)',
// ];

const Certifications: React.FC = () => {
  return (
    <Box>
      <MarkdownRenderer contentUrl={certificationContent} storageKey='certification'/>
      {/* <List>
        {certifications.map((certification, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText>&#x22C6; {certification}</ListItemText>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
};

export default Certifications;
