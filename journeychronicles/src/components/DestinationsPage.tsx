import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PostDate,
  PostImage,
  PostParagraph,
  ReadMoreLink,
  DestinationsPageCard,
  DestinationsPageTitle,
} from "../styles/DestinationsPageStyles";
import { parseHTMLContent } from "../utils/parseHtmlContent";

interface Post {
  ID: number;
  title: string;
  content: string;
  date: string;
  URL: string;
}

const DestinationsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/journeychronicles4.wordpress.com/posts"
        );
        setPosts(response.data.posts);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {posts.map((post) => {
        const { images, paragraphs } = parseHTMLContent(post.content);
        const imageSrc = images[0]?.src;
        const paragraphHTML = paragraphs[0] || "";

        return (
          <DestinationsPageCard key={post.ID} style={{ marginBottom: "2rem" }}>
            {imageSrc && <PostImage src={imageSrc} alt="Post visual" />}

            <PostDate>
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </PostDate>

            <DestinationsPageTitle
              dangerouslySetInnerHTML={{ __html: post.title }}
            />

            {paragraphHTML && (
              <PostParagraph
                dangerouslySetInnerHTML={{ __html: `<p>${paragraphHTML}</p>` }}
              />
            )}

            <ReadMoreLink href={`/post/${post.ID}`} rel="noopener noreferrer">
              Read More →
            </ReadMoreLink>
          </DestinationsPageCard>
        );
      })}
    </div>
  );
};

export default DestinationsPage;
