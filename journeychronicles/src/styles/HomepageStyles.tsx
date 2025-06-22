import styled from "styled-components";

const HomePageContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-top: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #444;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Subtitle = styled.h3`
  font-size: 1.4rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export {
  ProfileImage,
  Paragraph,
  Subtitle,
  Section,
  SectionTitle,
  HomePageContainer,
  Title,
};
