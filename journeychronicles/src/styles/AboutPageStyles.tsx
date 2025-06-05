import { styled } from "styled-components";

export const AboutPageMainContent = styled.main`
  padding: 1rem;
`;
export const AboutPageTitles = styled.div``;
export const AboutPageText = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
export const AboutPageImages = styled.img`
  maxwidth: 100%;
  marginbottom: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 1rem 12rem;
  max-width: 1000px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;
