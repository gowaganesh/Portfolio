import React, { useState, useEffect, ReactNode } from "react";
import { Typography, List, ListItem, ListItemText, Link } from "@mui/material";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";

interface MarkdownRendererProps {
    contentUrl: string; 
    storageKey: string; 
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ contentUrl, storageKey }) => {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        const storedContent = sessionStorage.getItem(storageKey);

        // if (storedContent) {
        //     setContent(storedContent);
        // } else {
            fetch(contentUrl)
                .then((response) => response.text())
                .then((text) => {
                    setContent(text);
                    sessionStorage.setItem(storageKey, text);
                })
                .catch(() => setContent("Failed to load content. Please reload the page!"));
        // }
    }, [contentUrl, storageKey]);

    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[remarkRehype, rehypeRaw]}
            components={{
                h1: ({ children }: { children?: ReactNode }) => (
                    <Typography variant="h1">{children}</Typography>
                ),
                h2: ({ children }: { children?: ReactNode }) => (
                    <Typography variant="h2">{children}</Typography>
                ),
                h3: ({ children }: { children?: ReactNode }) => (
                    <Typography variant="h3">{children}</Typography>
                ),
                h4: ({ children }: { children?: ReactNode }) => (
                    <Typography variant="h4">{children}</Typography>
                ),
                h5: ({ children }: { children?: ReactNode }) => (
                    <Typography variant="h5">{children}</Typography>
                ),
                h6: ({ children }: { children?: ReactNode }) => (
                    <Typography variant="h6">{children}</Typography>
                ),
                ul: ({ children }: { children?: ReactNode }) => (
                    <List
                        sx={{ pt: 0 }}
                        style={{ listStyleType: "disc", paddingLeft: "20px" }}
                    >
                        {children}
                    </List>
                ),
                ol: ({ children }: { children?: ReactNode }) => (
                    <List
                        sx={{ pt: 0 }}
                        style={{ listStyleType: "decimal", paddingLeft: "20px" }}
                    >
                        {children}
                    </List>
                ),
                li: ({ children }: { children?: ReactNode }) => (
                    <ListItem
                        style={{ display: "list-item", paddingLeft: 0 }}
                        sx={{ pt: 0, pb: 1 }}
                        disableGutters
                    >
                        <ListItemText sx={{ pt: 0 }}>{children}</ListItemText>
                    </ListItem>
                ),
                a: ({ href, children }: { href?: string; children?: ReactNode }) => (
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                        {children}
                    </Link>
                ),
                p: ({ children }: { children?: ReactNode }) => (
                    <Typography variant="body1">{children}</Typography>
                ),
            }}
        >
            {content}
        </Markdown>
    );
};

export default React.memo(MarkdownRenderer);
