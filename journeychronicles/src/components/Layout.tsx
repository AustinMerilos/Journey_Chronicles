import React, { useState, useEffect } from "react";
import SidebarNav from "./SidebarNav";
import { FaInfoCircle, FaPlaneDeparture, FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineTipsAndUpdates, MdOutlineCabin } from "react-icons/md";

import images from "../assets";
import { theme } from "../styles/Constants";
import Footer from "./Footer";
import {
  ContentWrapper,
  HeroContent,
  HeroSection,
  HeroSubText,
  HeroText,
  MainContent,
  MobileOverlay,
  MobileSidebarToggleButton,
} from "../styles/LayoutStyles";
import { FaMountainSun } from "react-icons/fa6";

type LayoutProps = {
  blurb?: string;
  companyName?: string;
  children: React.ReactNode;
};

const navItems = [
  {
    label: "Home",
    href: "/home",
    icon: <MdOutlineCabin />,
    border: theme.colors.softYellow,
  },
  {
    label: "Destinations",
    href: "/destinations",
    icon: <FaPlaneDeparture />,
    border: theme.colors.orange,
  },
  {
    label: "Travel Tips",
    href: "/tips",
    icon: <MdOutlineTipsAndUpdates />,
    border: theme.colors.softYellow,
  },
  {
    label: "Map",
    href: "/map",
    icon: <FaMapMarkedAlt />,
    border: theme.colors.softYellow,
  },
  {
    label: "About",
    href: "/about",
    icon: <FaInfoCircle />,
    border: theme.colors.orange,
  },
];

const logo = (
  <img
    alt="logo"
    src={images.logo}
    style={{ width: "100%", borderRadius: "3.5rem" }}
  />
);

const Layout: React.FC<LayoutProps> = ({
  companyName = "Journey Chronicles",
  blurb = "Just random text should be here explaining the blog",
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarVisible(true);
        setCollapsed(false);
      } else {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebarVisibility = () => setSidebarVisible((v) => !v);

  const toggleCollapse = () => setCollapsed((c) => !c);

  return (
    <>
      {isMobile && !sidebarVisible && (
        <MobileSidebarToggleButton
          onClick={toggleSidebarVisibility}
          aria-label="Open sidebar"
        >
          <FaMountainSun />
        </MobileSidebarToggleButton>
      )}

      {sidebarVisible && (
        <SidebarNav
          items={navItems}
          logo={logo}
          collapsed={collapsed && !isMobile}
          visible={sidebarVisible}
          onLogoClick={() => {
            if (isMobile) setSidebarVisible(false);
            else toggleCollapse();
          }}
        />
      )}

      {isMobile && sidebarVisible && (
        <MobileOverlay onClick={() => setSidebarVisible(false)} />
      )}

      <HeroSection backgroundImage={images.banner} $collapsed={collapsed}>
        <HeroContent>
          <HeroText>{companyName}</HeroText>
          <HeroSubText>{blurb}</HeroSubText>
        </HeroContent>
      </HeroSection>

      <ContentWrapper $collapsed={collapsed}>
        <MainContent>{children}</MainContent>
        <Footer />
      </ContentWrapper>
    </>
  );
};

export default Layout;
