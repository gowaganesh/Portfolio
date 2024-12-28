import { Box, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import MarkdownRenderer from "../common/markdownRenderer";
import awardsContent from "../../lib/data/awards.md"
// interface Award {
//   description: string; 
// }

// const awards: Award[] = [
//   {
//     description:
//       "&#x22C6; Appreciation from Leads, Manager, PO, BOFA Client and Business for the creation of File Validation, Data Validation and Data Comparison POC automation's using Python and Pandas to validate <mark>300+ source files in single execution</mark>.",
//   },
//   {
//     description:
//       "&#x22C6; Recognition from <mark>Leadership team</mark> for developing Tableau dashboards and generating QA reports without conflicting deliverables.",
//   },
//   {
//     description:
//       "&#x22C6; <mark>Pinnacle Award FY24</mark> for creating extraordinary value in a short time.",
//   },
//   {
//     description:
//       "&#x22C6; <mark>Client Value Creation Award</mark> (<a class='underline text-blue-600' href='https://drive.google.com/file/d/1UBH2XshL7bsTVAB1BCl0-muxs6YTrvJv/view?usp=sharing' target='_blank'>Link</a>) in Jun 2023 for handling data migration project independently supporting Client.",
//   },
//   {
//     description:
//       "&#x22C6; <mark>Promoted to Application Development Analyst</mark> role (<a class='underline text-blue-600' href='https://drive.google.com/file/d/1qZn9V3gC4CXH4kN2C6hOETI0-MSV0MHJ/view?usp=sharing' target='_blank'>Link 1</a>, <a class='underline text-blue-600' href='https://drive.google.com/file/d/14idcAgQZF1YTqtTA956nuC3wTBzoYOCs/view?usp=sharing' target='_blank'>Link 2</a>) in Mar 2023.",
//   },
//   {
//     description:
//       "&#x22C6; <mark>Client Value Creation Award</mark> (<a class='underline text-blue-600' href='https://drive.google.com/file/d/1s4G1a6KW2HQcw3ijyF8R1wvGyF7B3YQS/view?usp=sharing' target='_blank'>Link</a>) in Dec 2022 for creating data validation framework using Python, SQL, Unix.",
//   },
//   {
//     description:
//       "&#x22C6; <mark>Rising Star Award</mark> (<a class='underline text-blue-600' href='https://drive.google.com/file/d/1X_jiLfWp22Z1XFl2efo4iLQhh-BNA-Ah/view?usp=sharing' target='_blank'>Link</a>) in Jun 2022 for creating data validation tool using NiFi for splitting Valid and Invalid Records.",
//   },
// ];

const Awards: React.FC = () => {
  return (
    <Box>
      <MarkdownRenderer contentUrl={awardsContent}  storageKey="awards" />
      {/* <List>
        {awards.map((award, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText
              primary={
                <span
                  dangerouslySetInnerHTML={{
                    __html: award.description,
                  }}
                />
              }
            />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
};

export default Awards;
