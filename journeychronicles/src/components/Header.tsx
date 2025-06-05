import React from "react";
import SidebarNav from "./SidebarNav";
import { MainContent } from "../styles/MainContentStyles";

type LayoutProps = {
  blurb?: string;
  companyName?: string;
  children: React.ReactNode;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Travel Tips", href: "/tips" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const logo = <h1>Logo image</h1>;

const Layout: React.FC<LayoutProps> = ({
  companyName = "Journey Chronicles",
  blurb = "Just random text should be here explaining the blog I guess",
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
