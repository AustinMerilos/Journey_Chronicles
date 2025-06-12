import React from "react";
import SidebarNav from "./SidebarNav";
import { MainContent } from "../styles/MainContentStyles";
import { FaInfoCircle, FaMountain } from "react-icons/fa";

type LayoutProps = {
  blurb?: string;
  companyName?: string;
  children: React.ReactNode;
};

const navItems = [
  { label: "Home", href: "/", icon: <FaMountain /> },
  { label: "Destinations", href: "/destinations", icon: <FaMountain /> },
  { label: "Travel Tips", href: "/tips", icon: <FaMountain /> },
  { label: "About", href: "/about", icon: <FaMountain /> },
  { label: "Contact", href: "/contact", icon: <FaInfoCircle /> },
];

const logo = <h1>Logo image</h1>;

const Layout: React.FC<LayoutProps> = ({
  companyName = "Journey Chronicles",
  blurb = "Just random text should be here explaining the blog",
  children,
}) => {
  return (
    <MainContent>
      <SidebarNav items={navItems} logo={logo} />
      <main>
        <h2>{companyName}</h2>
        <p>{blurb}</p>
        {children}
      </main>
    </MainContent>
  );
};

export default Layout;
