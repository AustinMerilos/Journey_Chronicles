import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseHTMLContent } from "../utils/parseHtmlContent";
import {
  HomePageContainer,
  Paragraph,
  Image,
  Subtitle,
  Title,
  ZSection,
} from "../styles/HomepageStyles";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/journeychronicles4.wordpress.com/posts/slug:home"
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
    <HomePageContainer>
      <Title>{title}</Title>

      {titles.map((html, i) => (
        <Subtitle key={i} dangerouslySetInnerHTML={{ __html: html }} />
      ))}

      {images.map(({ src, alt }, i) => (
        <ZSection key={i} reverse={i % 2 !== 0}>
          <Image src={src} alt={alt} />
          <Paragraph
            dangerouslySetInnerHTML={{
              __html: paragraphs[i] || "Missing paragraph content",
            }}
          />
        </ZSection>
      ))}
    </HomePageContainer>
  );
};

export default HomePage;
