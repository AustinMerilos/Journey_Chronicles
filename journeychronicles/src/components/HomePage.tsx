import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  HomePageCard,
  HomePageCardTitle,
  MainContent,
} from "../styles/MainContentStyles";

interface Post {
  ID: number;
  title: string;
  content: string;
}

const HompePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/journeychronicles4.wordpress.com/posts/?slug=hello-world"
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
      {posts.map((post) => (
        <HomePageCard key={post.ID} style={{ marginBottom: "2rem" }}>
          <HomePageCardTitle dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </HomePageCard>
      ))}
    </div>
  );
};

export default HompePage;
