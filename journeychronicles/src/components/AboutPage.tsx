import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AboutPageMainContent,
  AboutPageText,
  Card,
  CardContent,
  CardImage,
  CardTitle,
} from "../styles/AboutPageStyles";

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

  const parser = new DOMParser();
  const doc = parser.parseFromString(contentHtml, "text/html");

  const paragraphs = Array.from(doc.querySelectorAll("p")).map(
    (p) => p.innerHTML
  );

  const images = Array.from(doc.querySelectorAll("img")).map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <AboutPageMainContent>
      <CardTitle>{title}</CardTitle>
      <Card>
        <CardContent>
          {paragraphs.map((html, i) => (
            <AboutPageText key={i} dangerouslySetInnerHTML={{ __html: html }} />
          ))}
          {images.map(({ src, alt }, i) => (
            <CardImage key={i} src={src} alt={alt} />
          ))}
        </CardContent>
      </Card>
    </AboutPageMainContent>
  );
};

export default AboutPage;
