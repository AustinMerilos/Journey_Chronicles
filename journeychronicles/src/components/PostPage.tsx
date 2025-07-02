import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import styled from "styled-components";

const PostWrapper = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const CarouselWrapper = styled.div`
  margin-bottom: 2rem;

  .slick-slide img {
    width: 100%;
    border-radius: 12px;
  }
`;

const Content = styled.div`
  line-height: 1.7;
  p {
    margin-bottom: 1rem;
  }
`;

type PostType = {
  title: string;
  content: string;
  images: string[];
};

const extractImagesFromContent = (html: string): string[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const imgs = Array.from(doc.querySelectorAll("img")).map((img) =>
    img.getAttribute("src")
  );
  return imgs.filter(Boolean) as string[];
};

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `https://public-api.wordpress.com/rest/v1.1/sites/journeychronicles4.wordpress.com/posts/${id}`
        );
        const post = res.data;

        const images = extractImagesFromContent(post.content);

        setPost({
          title: post.title,
          content: post.content,
          images,
        });
      } catch (err) {
        console.error("Error fetching post", err);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <PostWrapper>
      <Title>{post.title}</Title>

      {post.images.length > 0 && (
        <CarouselWrapper>
          <Slider
            dots={true}
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {post.images.map((src, idx) => (
              <div key={idx}>
                <img src={src} alt={`Slide ${idx + 1}`} />
              </div>
            ))}
          </Slider>
        </CarouselWrapper>
      )}

      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
    </PostWrapper>
  );
};

export default PostPage;
