import { styled } from "styled-components";
import { theme } from "./Constants";

const DestinationsPageCard = styled.div`
  background-color: ${theme.colors.lightYellow};
  padding: 2rem;
  border-radius: 1.25rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  }

  margin-bottom: 2rem;
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: ${theme.colors.darkGreen};

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const DestinationsPageTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${theme.colors.darkGreen};
  margin: 0.5rem 0 1rem 0;
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
  height: clamp(180px, 25vh, 240px);
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.orange};
  margin-bottom: 0.5rem;
`;

const PostParagraph = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-top: 0.75rem;

  p {
    margin: 0;
  }
`;

const ReadMoreLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: ${theme.colors.orange};
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    color: ${theme.colors.darkGreen};
  }
`;
export {
  ReadMoreLink,
  PostDate,
  PostImage,
  PostParagraph,
  DestinationsPageTitle,
  DestinationsPageCard,
  Title,
  DestinationsGrid,
};
