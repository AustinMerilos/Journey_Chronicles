import styled from "styled-components";
import { theme } from "./Constants";

const PageWrapper = styled.div`
  padding: 2rem;
`;

const HeroSection = styled.section`
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  justify-items: center;

  h1 {
    color: ${theme.colors.darkGreen};
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.25rem;
    color: #444;
  }
`;

const TipsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Category = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    color: ${theme.colors.orange};
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: #333;
  }
`;

const TipCategoryTitle = styled.h2`
  font-size: 1.5rem;
  color: ${theme.colors.orange};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const TipList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TipItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: ${theme.colors.darkGreen};
  font-size: 1rem;

  &::before {
    content: "📌";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1rem;
    line-height: 1;
  }
`;

export {
  TipCategoryTitle,
  TipItem,
  TipList,
  TipsSection,
  PageWrapper,
  HeroSection,
  Category,
};
