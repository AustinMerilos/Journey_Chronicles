import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Constants";

interface FeaturedPostCardProps {
  title: string;
  image: string;
  excerpt: string;
  link: string;
}

const Card = styled.article`
  width: 100%;
  max-width: 360px;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.darkGreen};
`;

const CardExcerpt = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

const CardLink = styled.a`
  display: inline-block;
  margin-top: 0.75rem;
  font-weight: bold;
  color: ${theme.colors.orange};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FeaturedCard: React.FC<FeaturedPostCardProps> = ({
  title,
  image,
  excerpt,
  link,
}) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardExcerpt>{excerpt}</CardExcerpt>
        <CardLink href={link} target="_blank" rel="noopener noreferrer">
          Read more →
        </CardLink>
      </CardContent>
    </Card>
  );
};

export default FeaturedCard;
