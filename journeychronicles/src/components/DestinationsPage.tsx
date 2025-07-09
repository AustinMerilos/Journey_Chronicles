import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PostDate,
  PostImage,
  PostParagraph,
  ReadMoreLink,
  DestinationsPageCard,
  DestinationsPageTitle,
  Title,
  DestinationsGrid,
  PaginationContainer,
  PaginationButton,
  PageInfo,
} from "../styles/DestinationsPageStyles";
import { parseHTMLContent } from "../utils/parseHtmlContent";

interface Post {
  ID: number;
  title: string;
  content: string;
  date: string;
  URL: string;
}

const POSTS_PER_PAGE = 9;

const DestinationsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <Title>Check out our travels</Title>

      <DestinationsGrid>
        {paginatedPosts.map((post) => {
          const { images, paragraphs } = parseHTMLContent(post.content);
          const imageSrc = images[0]?.src;
          const paragraphHTML = paragraphs[0] || "";

          return (
            <DestinationsPageCard key={post.ID}>
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
                  dangerouslySetInnerHTML={{
                    __html: `<p>${paragraphHTML}</p>`,
                  }}
                />
              )}
              <ReadMoreLink href={`/post/${post.ID}`} rel="noopener noreferrer">
                Read More →
              </ReadMoreLink>
            </DestinationsPageCard>
          );
        })}
      </DestinationsGrid>

      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>

        <PageInfo>
          Page {currentPage} of {totalPages}
        </PageInfo>

        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </div>
  );
};

export default DestinationsPage;
