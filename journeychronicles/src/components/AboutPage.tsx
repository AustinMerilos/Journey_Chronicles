import React, { useEffect, useState } from "react";
import axios from "axios";
import { MainContent } from "../styles/MainContentStyles";

const AboutPage = () => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/journeychronicles4.wordpress.com/posts/slug:testing-about"
      )
      .then((response) => {
        setContent(response.data.content);
      })
      .catch((err) => {
        setError("Failed to fetch About page: " + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading About page...</p>;
  if (error) return <p>{error}</p>;

  return (
    <MainContent
      style={{ padding: "1rem" }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default AboutPage;
