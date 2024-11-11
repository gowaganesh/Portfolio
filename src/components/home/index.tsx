import { Box, Typography } from "@mui/material";
import React from "react";

const HomeIndex = () => {
  const getHighLightedText = (text: string) => (
    <span className="text-slate-400">{text}</span>
  );

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Box mb={3}>
      <Typography variant="h5" fontFamily="serif">{title}</Typography>
      <Typography fontFamily="serif" variant="body1" fontSize={16}>{children}</Typography>
    </Box>
  );

  return (
    <Box p={2}>
      <Section title="WORK">
        I am currently working as {getHighLightedText("Data Engineer - Application Development Analyst")} at {getHighLightedText("Accenture")} in Coimbatore, where I focus on building and maintaining robust data integration solutions for {getHighLightedText("BANK OF AMERICA")}. My role involves {getHighLightedText("consolidating structured and semi-structured data")} from a variety of sources, including APIs, databases, and complex JSON files, ensuring data consistency and quality throughout.
        <br />
        <br />
        In my current position, I {getHighLightedText("design and implement data pipelines")} using {getHighLightedText("Apache NiFi")} for history, monthly, and daily data loading, while managing slowly changing dimensions (SCD) to accommodate evolving data requirements. Additionally, I led an automation project that {getHighLightedText("reduced manual work by 97%")}, generating SQL DDL statements for over 90 tables with more than 2000 fields—a task that significantly streamlined our database management process.
        <br />
        <br />
        Previously, as a Data Engineer - {getHighLightedText("Application Development Associate")} (June 2021 - Feb 2023), I handled similar data pipeline responsibilities, focusing on large-scale data loads and automation. My independent end-to-end project experience includes data mapping, extraction, cleansing, transformation, and ingestion, with a commitment to timely deliverables, unit testing, and documentation from development through to production deployment.
      </Section>

      <Section title="Education">
        I have a strong foundation in data engineering principles, particularly in data integration, pipeline design, and automation, allowing me to approach complex data challenges with both technical skills and a solutions-oriented mindset.
      </Section>

      <Section title="Side Hustle">
        Outside of work, I am passionate about exploring and experimenting with new data engineering tools and processes, refining my understanding of automation in data workflows, and staying updated on trends in data integration and pipeline optimization.
      </Section>

      <Section title="Social">
        I actively engage with other data professionals on LinkedIn, sharing my project insights and connecting with peers in the industry to discuss best practices and advancements in data engineering.
      </Section>
    </Box>
  );
};

export default HomeIndex;




// const [content, setContent] = useState<string>("");

// useEffect((): void => {
//   fetch(home as RequestInfo)
//     .then((response: Response): Promise<string> => response.text())
//     .then((text: string): void => {
//       setContent(text);
//       localStorage.home = text;
//     })
//     .catch((): void =>
//       setContent("Failed to load content. Please reload the page!")
//     );
// }, [content]);


// <ReactMarkdown
// components={{
//   h1: ({ children }: { children?: ReactNode }) => (
//     <Typography variant="h3" gutterBottom>
//       {children}
//     </Typography>
//   ),
//   h2: ({ children }: { children?: ReactNode }) => (
//     <Typography textAlign={'start'} variant="h4" fontFamily={'serif'} color="textDisabled" py={2} >
//       {children}
//     </Typography>
//   ),
//   h3: ({ children }: { children?: ReactNode }) => (
//     <Typography textAlign={'start'} variant="h5"  gutterBottom>
//       {children}
//     </Typography>
//   ),
//   a: ({ href, children }: { href?: string; children?: ReactNode }) => (
//     <Link href={href} target="_blank" rel="noopener noreferrer">
//       {children}
//     </Link>
//   ),
//   ul: ({ children }: { children?: ReactNode }) => (
//     <ul className="mb-8 flex flex-wrap gap-2">{children}</ul>
//   ),
//   li: ({ children }: { children?: ReactNode }) => (
//     <li>
//       <p className="border-2 rounded-2xl px-2 border-blue-400">{children}</p>
//     </li>
//   ),
//   p : ({ children }: { children?: ReactNode }) => (
//     <Typography textAlign={'start'} fontFamily={'serif'} variant="body1">
//       {children}
//     </Typography>
//   ),
//   head : ({ children }: { children?: ReactNode }) => (
//     <Typography textAlign={'start'} fontFamily={'serif'} color="error">
//       {children}
//     </Typography>
//   ),
//   b : ({ children }: { children?: ReactNode }) => (
//     <Typography textAlign={'start'} fontFamily={'serif'} color="error">
//       {children}
//     </Typography>
//   ),

// }}
// >
// {localStorage.getItem("home") as string}
// </ReactMarkdown>