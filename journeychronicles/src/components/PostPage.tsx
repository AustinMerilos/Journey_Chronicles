import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import styled from "styled-components";
import { parseHTMLContent } from "../utils/parseHtmlContent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PostWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const CarouselImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 1rem;
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
`;

const PostContent = styled.div`
  margin-top: 1.5rem;
  line-height: 1.7;
  font-size: 1.1rem;

  img {
    display: none;
  }
`;

interface Post {
  ID: number;
  title: string;
  content: string;
  date: string;
}

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://public-api.wordpress.com/rest/v1.1/sites/journeychronicles4.wordpress.com/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading post...</p>;

  const { images } = parseHTMLContent(post.content);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <PostWrapper>
      {images.length > 1 ? (
        <Slider {...sliderSettings}>
          {images.map((img, index) => (
            <div key={index}>
              <CarouselImage src={img.src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      ) : images.length === 1 ? (
        <CarouselImage src={images[0].src} alt="Post image" />
      ) : null}

      <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />

      <PostContent
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </PostWrapper>
  );
};

export default PostPage;
