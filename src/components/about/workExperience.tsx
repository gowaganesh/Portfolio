import React from "react";
import { Box, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import MarkdownRenderer from "../common/markdownRenderer";
import workExp from "../../lib/data/workExperience.md"
interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

// const experiences: Experience[] = [
//   {
//     role: "Data Engineer (Application Development Analyst)",
//     company: "Accenture, Coimbatore",
//     duration: "Mar 2023 - Present",
//     responsibilities: [
//       "&#x22C6; Developed and maintained data integration solutions to consolidate <mark>structured and semi-structured data</mark> from sources (<mark>REST API, Complex JSON, Databases, and Delimited files</mark>) into unified format for analysis by incorporating data quality checks.",
//       "&#x22C6; Designed and implemented multiple data pipelines in <mark>NiFi</mark> for <mark>history, monthly and daily data loading</mark>, by managing <mark>SCD</mark> types.",
//       "&#x22C6; <mark>Independent E2E project experience</mark> with timely deliverables in data mapping, extracting, cleansing, validation, transformation pipelines, ingestion, unit testing, document preparation till production deployment, by <mark>imposing automation</mark> in all possible areas.",
//       "&#x22C6; Automated creation of Impala DDL create statements for <mark>90+</mark> tables (<mark>2000+</mark> fields) into SQL file by <mark>reducing 100% manual effort</mark>.",
//       "&#x22C6; Gathered requirements from vendor, provided updates on project progress and addressed any issues.",
//       "&#x22C6; Structured working methods and ability to work independently with personal responsibility and a proactive approach.",
//     ],
//   },
//   {
//     role: "Data Engineer (Application Development Analyst)",
//     company: "Accenture, Coimbatore",
//     duration: "Jun 2021 - Feb 2023",
//     responsibilities: [
//       "&#x22C6; Designed and implemented multiple data pipelines in <mark>NiFi</mark> for <mark>history, monthly and daily data loading</mark>, by managing SCD types.",
//     ],
//   },
// ];

const WorkExperienceEntry: React.FC<Experience> = ({
  role,
  company,
  duration,
  responsibilities,
}) => (
  <Box sx={{ width: "100%", mb: 4 }}>
    {/* <Stack direction="column" alignItems="start" justifyContent="space-between">
      <Typography variant="body1" fontWeight={600}>
        {role} - {company}
      </Typography>
      <Typography variant="caption">({duration})</Typography>
    </Stack>
    <List >
      {responsibilities.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemText
            primary={
              <span
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
              />
            }
          />
        </ListItem>
      ))}
    </List> */}
  </Box>
);

// Main WorkExperience component
const WorkExperience: React.FC = () => (
  <Box  sx={{ width: "100%" }}>
    <MarkdownRenderer contentUrl={workExp} storageKey="workExperience"/>
    {/* {experiences.map((experience, index) => (
      <WorkExperienceEntry key={index} {...experience} />
    ))} */}
  </Box>
);

export default WorkExperience;
