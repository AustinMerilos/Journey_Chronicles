import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Constants";
import { parseHTMLContent } from "../utils/parseHtmlContent";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  description: string;
  link?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const TimelineContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2rem 0;
  padding-left: 2rem;
  border-left: 4px solid ${theme.colors.orange};
`;

const TimelineEntry = styled.div`
  margin-bottom: 2rem;
  position: relative;
  padding-left: 1rem;

  &:before {
    content: "";
    position: absolute;
    left: -1.1rem;
    top: 0.25rem;
    width: 1rem;
    height: 1rem;
    background-color: ${theme.colors.darkGreen};
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 0 2px ${theme.colors.orange};
  }
`;

const EntryTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: ${theme.colors.darkGreen};
`;

const EntryDate = styled.p`
  font-size: 0.9rem;
  margin: 0.25rem 0;
  color: #888;
`;

const EntryDescription = styled.p`
  font-size: 1rem;
  color: #444;
`;

const EntryLink = styled.a`
  color: ${theme.colors.orange};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <TimelineContainer>
      {items.map((item) => {
        const { titles, paragraphs } = parseHTMLContent(item.description);

        return (
          <TimelineEntry key={item.id}>
            <EntryTitle>{titles[0] || item.title}</EntryTitle>
            <EntryDate>{item.date}</EntryDate>
            <EntryDescription>
              {paragraphs[0] || item.description}
            </EntryDescription>
            {item.link && (
              <EntryLink href={`/post/${item.id}`} rel="noopener noreferrer">
                Read more →
              </EntryLink>
            )}
          </TimelineEntry>
        );
      })}
    </TimelineContainer>
  );
};

export default Timeline;
