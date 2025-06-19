import { styled } from "styled-components";
import { theme } from "./Constants";

export const MainContent = styled.main`
  margin: 7rem;
  padding: 1rem;
`;

export const HeroSection = styled.section`
  padding: 4rem 2rem 2rem 2rem;
  background: linear-gradient(
    to right,
    ${theme.colors.lightYellow},
    ${theme.colors.softYellow}
  );
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const HeroText = styled.div`
  flex: 1 1 400px;
  color: ${theme.colors.darkGreen};

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
  }
`;

export const HeroImage = styled.img`
  flex: 1 1 300px;
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
`;
