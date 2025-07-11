import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import styled from "styled-components";
import { parseHTMLContent } from "../utils/parseHtmlContent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../utils/loader";

const StyledSliderWrapper = styled.div`
  .slick-dots.slick-thumb {
    display: flex !important;
    justify-content: center;
    gap: 50px;
    margin-top: 1.5rem;

    li {
      margin: 20px;
    }

    button {
      padding: 0;
      border: none;
      background: none;
    }
  }
`;

const PostWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  .slick-active & {
    opacity: 1;
    border: 2px solid orange;
  }

  &:hover {
    opacity: 1;
  }
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
`;

const PostContent = styled.div`
  margin-top: 1.5rem;
  line-height: 1.7;
  font-size: 1.1rem;
`;

interface Post {
  ID: number;
  title: string;
  content: string;
  date: string;
}

const cleanContent = (html: string): string => {
  let cleaned = html.replace(/\[coords:\s*-?\d+\.?\d*,\s*-?\d+\.?\d*\]/gi, "");
  cleaned = cleaned.replace(/<img[^>]*>/gi, "");
  return cleaned;
};

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

  if (!post) return <Loader />;

  const { images } = parseHTMLContent(post.content);
  const cleanedHTML = cleanContent(post.content);

  const sliderSettings = {
    dots: true,
    customPaging: (i: number) => (
      <Thumbnail src={images[i]?.src} alt={`Thumbnail ${i + 1}`} />
    ),
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <PostWrapper>
      {images.length > 1 ? (
        <StyledSliderWrapper>
          <Slider {...sliderSettings}>
            {images.map((img, index) => (
              <div key={index}>
                <CarouselImage src={img.src} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </StyledSliderWrapper>
      ) : images.length === 1 ? (
        <CarouselImage src={images[0].src} alt="Post image" />
      ) : null}

      <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />

      <PostContent dangerouslySetInnerHTML={{ __html: cleanedHTML }} />
    </PostWrapper>
  );
};

export default PostPage;
