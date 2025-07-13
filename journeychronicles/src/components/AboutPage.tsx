import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AboutContainer,
  ContactButton,
  CTAContainer,
  Paragraph,
  ProfileImage,
  Section,
  SectionTitle,
  Subtitle,
  Title,
  CenteredIntro,
} from "../styles/AboutPageStyles";
import { parseHTMLContent } from "../utils/parseHtmlContent";
import Loader from "../utils/loader";

const AboutPage = () => {
  const [title, setTitle] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/journeychronicles4.wordpress.com/posts/slug:testing-about"
      )
      .then((response) => {
        setTitle(response.data.title);
        setContentHtml(response.data.content);
      })
      .catch((err) => {
        setError("Failed to fetch About page: " + err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  const { titles, paragraphs, images } = parseHTMLContent(contentHtml);

  return (
    <AboutContainer>
      <CenteredIntro>
        <Title>{title}</Title>
        {titles.map((html, i) => (
          <Subtitle key={i} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
        {images.map(({ src, alt }, i) => (
          <ProfileImage key={i} src={src} alt={alt} />
        ))}
      </CenteredIntro>

      <Section>
        <SectionTitle>Who We Are</SectionTitle>
        {paragraphs[0] && (
          <Paragraph dangerouslySetInnerHTML={{ __html: paragraphs[0] }} />
        )}
      </Section>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        {paragraphs[1] && (
          <Paragraph dangerouslySetInnerHTML={{ __html: paragraphs[1] }} />
        )}
      </Section>

      <CTAContainer>
        <ContactButton href="mailto:JourneyChronicles@example.com">
          Get in Touch
        </ContactButton>
      </CTAContainer>
    </AboutContainer>
  );
};

export default AboutPage;
