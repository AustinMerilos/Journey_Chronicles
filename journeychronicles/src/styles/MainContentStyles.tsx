import { styled } from "styled-components";
import { theme } from "./Constants";

export const MainContent = styled.main`
  margin-left: 20rem;
  padding: 1rem;
`;

export const HomePageCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.softYellow};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 1rem 12rem;
  max-width: 1000px;
`;

export const HomePageCardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const HomePageCardContent = styled.div`
  padding: 1rem;
`;

export const HomePageCardTitle = styled.h2`
  font-size: 1.5rem;
  color: ${theme.colors.darkGreen};
  margin-bottom: 0.5rem;
`;

export const HomePageCardText = styled.p`
  font-size: 1rem;
  color: white;
  line-height: 1.6;
`;
