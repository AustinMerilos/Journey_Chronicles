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
} from "../styles/AboutPageStyles";
import { parseHTMLContent } from "../utils/parseHtmlContent";

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

  if (loading) return <p>Loading About page...</p>;
  if (error) return <p>{error}</p>;

  const { titles, paragraphs, images } = parseHTMLContent(contentHtml);

  return (
    <AboutContainer>
      <Title>{title}</Title>

      {titles.map((html, i) => (
        <Subtitle key={i} dangerouslySetInnerHTML={{ __html: html }} />
      ))}

      {images.map(({ src, alt }, i) => (
        <ProfileImage key={i} src={src} alt={alt} />
      ))}

      <Section>
        <SectionTitle>Who We Are</SectionTitle>
        {paragraphs.map((html, i) => (
          <Paragraph key={i} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
      </Section>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <Paragraph>
          Our mission is to create accessible, elegant, and meaningful solutions
          that empower individuals and organizations. We believe in simplicity,
          transparency, and impact-driven work.
        </Paragraph>
      </Section>

      <CTAContainer>
        <ContactButton>Get in Touch</ContactButton>
      </CTAContainer>
    </AboutContainer>
  );
};

export default AboutPage;
