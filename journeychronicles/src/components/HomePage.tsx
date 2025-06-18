import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  HomePageCard,
  HomePageCardTitle,
  PostDate,
  PostImage,
  PostParagraph,
  ReadMoreLink,
} from "../styles/HomepageStyles";

interface Post {
  ID: number;
  title: string;
  content: string;
  date: string;
  URL: string;
}

const HomePage: React.FC = () => {
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
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content, "text/html");

        const imageElement = doc.querySelector("img");
        const imageSrc = imageElement?.getAttribute("src");

        const paragraphElement = doc.querySelector("p");
        const paragraphHTML = paragraphElement?.innerHTML || "";

        return (
          <HomePageCard key={post.ID} style={{ marginBottom: "2rem" }}>
            {imageSrc && <PostImage src={imageSrc} alt="Post visual" />}

            <PostDate>
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </PostDate>

            <HomePageCardTitle
              dangerouslySetInnerHTML={{ __html: post.title }}
            />

            {paragraphHTML && (
              <PostParagraph
                dangerouslySetInnerHTML={{ __html: `<p>${paragraphHTML}</p>` }}
              />
            )}

            <ReadMoreLink
              href={post.URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More →
            </ReadMoreLink>
          </HomePageCard>
        );
      })}
    </div>
  );
};

export default HomePage;
