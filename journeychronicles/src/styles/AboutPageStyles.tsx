import { styled } from "styled-components";
import { theme } from "./Constants";

const AboutContainer = styled.main`
  padding: 4rem 2rem;
  background-color: white;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.orange};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.softYellow};
  margin-bottom: 3rem;
  max-width: 600px;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: ${theme.colors.darkGreen};
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${theme.colors.darkGreen};
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 4px solid ${theme.colors.softYellow};
`;

const CTAContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const ContactButton = styled.button`
  background-color: ${theme.colors.orange};
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.softYellow};
    color: ${theme.colors.darkGreen};
  }
`;

export {
  AboutContainer,
  Title,
  Subtitle,
  Section,
  SectionTitle,
  Paragraph,
  ProfileImage,
  CTAContainer,
  ContactButton,
};
