import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { parseHTMLContent } from "../utils/parseHtmlContent";
import { theme } from "../styles/Constants";

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${theme.colors.darkGreen};

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;
const FeaturedWrapper = styled.section`
  max-width: 960px;
  margin: 3rem auto;
  padding: 0 1rem;
`;

const Card = styled.article`
  width: 100%;
  max-width: 900px;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const CardLink = styled(Link)`
  display: inline-block;
  margin-top: 0.75rem;
  font-weight: bold;
  color: ${theme.colors.orange};
  text-decoration: none;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

const FeaturedCard: React.FC = () => {
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/journeychronicles4.wordpress.com/posts?number=1"
        );
        const latestPost = response.data.posts[0];
        setPost(latestPost);
      } catch (err: any) {
        setError("Failed to load latest post: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPost();
  }, []);

  if (loading) return <p>Loading featured post...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return null;

  const { paragraphs, images } = parseHTMLContent(post.content);
  const excerpt = paragraphs[1] || "";
  const imageSrc = images[0]?.src || post.featured_image;

  return (
    <FeaturedWrapper>
      <Title>Checkout the Newest Adventure</Title>
      <Card>
        {imageSrc && <CardImage src={imageSrc} alt={post.title} />}
        <CardContent>
          <CardTitle>{post.title}</CardTitle>
          <CardExcerpt>{excerpt}</CardExcerpt>
          <CardLink to={`/post/${post.ID}`}>Read more →</CardLink>
        </CardContent>
      </Card>
    </FeaturedWrapper>
  );
};

export default FeaturedCard;
