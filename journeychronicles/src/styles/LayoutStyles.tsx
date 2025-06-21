import { styled } from "styled-components";
import { theme } from "./Constants";

export const MainContent = styled.main`
  margin: 7rem;
  padding: 1rem;
`;

export const ContentWrapper = styled.div<{ $collapsed: boolean }>`
  margin-left: ${({ $collapsed }) => ($collapsed ? "60px" : "250px")};
  transition: margin-left 0.3s ease;
  padding: 2rem;
`;

export const HeroSection = styled.section`
  background: ${theme.colors.lightYellow};
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 4px solid ${theme.colors.orange};
`;

export const HeroText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${theme.colors.darkGreen};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const HeroSubText = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.orange};
  max-width: 800px;
  line-height: 1.6;
`;

export const HeroImage = styled.img`
  flex: 1 1 300px;
  width: 50%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
`;
