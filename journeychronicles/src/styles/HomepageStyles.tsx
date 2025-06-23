import { styled } from "styled-components";
import { theme } from "./Constants";

const HomePageContainer = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 2rem;
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

const Subtitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${theme.colors.orange};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Section = styled.section`
  padding: 2rem 0;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${theme.colors.orange};

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ZSection = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 2rem;

  ${Image}, ${Paragraph} {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;

    ${Image}, ${Paragraph} {
      width: 100%;
    }
  }
`;

export {
  HomePageContainer,
  Title,
  Subtitle,
  Section,
  SectionTitle,
  Paragraph,
  Image,
  ZSection,
};
