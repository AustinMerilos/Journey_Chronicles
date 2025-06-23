import { styled } from "styled-components";
import { theme } from "./Constants";

const SIDEBAR_WIDTH = {
  expanded: "250px",
  collapsed: "60px",
};

const ContentWrapper = styled.div<{ $collapsed: boolean }>`
  margin-left: ${({ $collapsed }) =>
    $collapsed ? SIDEBAR_WIDTH.collapsed : SIDEBAR_WIDTH.expanded};
  transition: margin-left 0.3s ease;
  padding: 2rem;
  min-height: 100vh;
  background-color: white;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const MainContent = styled.main`
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const HeroSection = styled.section<{
  backgroundImage: string;
  $collapsed: boolean;
}>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 50vh;
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: ${({ $collapsed }) => ($collapsed ? "90px" : "280px")};
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 2rem 1rem;
    min-height: 60vh;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, white 100%);
    z-index: 2;
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeroText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${theme.colors.lightYellow};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubText = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.softYellow};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const HeroImage = styled.img`
  flex: 1 1 300px;
  width: 50%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MobileSidebarToggleButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1200;
  background-color: ${theme.colors.softYellow};
  color: ${theme.colors.darkGreen};
  border: none;
  border-radius: 30%;
  padding: 0.75rem;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${theme.colors.orange};
    transform: scale(1.05);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1090;
  background-color: rgba(0, 0, 0, 0.3);

  @media (min-width: 769px) {
    display: none;
  }
`;

export {
  HeroContent,
  HeroImage,
  HeroSection,
  HeroSubText,
  HeroText,
  MainContent,
  ContentWrapper,
  MobileOverlay,
  MobileSidebarToggleButton,
};
