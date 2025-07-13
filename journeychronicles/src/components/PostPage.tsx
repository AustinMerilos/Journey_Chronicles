import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import styled from "styled-components";
import { parseHTMLContent } from "../utils/parseHtmlContent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../utils/loader";
import { useEscapeKey } from "../utils/escapeKey";

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
  max-height: 500px;
  object-fit: cover;
  border-radius: 1rem;
  cursor: pointer;
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

const FullImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const FullImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 10000;
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 0.5rem 0.75rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  useEscapeKey(() => {
    if (selectedImage) setSelectedImage(null);
  });

  if (!post) return <Loader />;

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
        <StyledSliderWrapper>
          <Slider {...sliderSettings}>
            {images.map((img, index) => (
              <div key={index}>
                <CarouselImage
                  src={img.src}
                  alt={`Slide ${index + 1}`}
                  onClick={() => setSelectedImage(img.src)}
                />
              </div>
            ))}
          </Slider>
        </StyledSliderWrapper>
      ) : images.length === 1 ? (
        <CarouselImage
          src={images[0].src}
          alt="Post image"
          onClick={() => setSelectedImage(images[0].src)}
        />
      ) : null}

      <PostTitle dangerouslySetInnerHTML={{ __html: post.title }} />
      <PostContent dangerouslySetInnerHTML={{ __html: cleanedHTML }} />

      {selectedImage && (
        <>
          <FullImageOverlay onClick={() => setSelectedImage(null)}>
            <FullImage src={selectedImage} alt="Full view of post image" />
          </FullImageOverlay>
          <CloseButton onClick={() => setSelectedImage(null)}>×</CloseButton>
        </>
      )}
    </PostWrapper>
  );
};

export default PostPage;
