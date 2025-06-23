import { styled } from "styled-components";
import { theme } from "./Constants";

export const HomePageContainer = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: ${theme.colors.darkGreen};
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${theme.colors.orange};
`;

export const Section = styled.section`
  padding: 2rem 0;
`;

export const SectionTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${theme.colors.orange};
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #333;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

export const ZSection = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  ${Image} {
    flex: 1;
  }

  ${Paragraph} {
    flex: 1;
  }
`;
