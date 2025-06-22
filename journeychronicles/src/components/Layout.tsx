import React, { useState } from "react";
import SidebarNav from "./SidebarNav";
import { FaInfoCircle, FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineTipsAndUpdates, MdOutlineCabin } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

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
} from "../styles/LayoutStyles";

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
    label: "About",
    href: "/about",
    icon: <FaInfoCircle />,
    border: theme.colors.orange,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <IoMdContact />,
    border: theme.colors.softYellow,
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

  return (
    <>
      <SidebarNav
        items={navItems}
        logo={logo}
        collapsed={collapsed}
        onLogoClick={() => setCollapsed((prev) => !prev)}
      />
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
