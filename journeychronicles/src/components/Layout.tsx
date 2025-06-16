import React from "react";
import SidebarNav from "./SidebarNav";
import { MainContent } from "../styles/MainContentStyles";
import { FaInfoCircle, FaMountain } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { MdOutlineCabin } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

import images from "../assets";
import { theme } from "../styles/Constants";
import Footer from "./Footer";

type LayoutProps = {
  blurb?: string;
  companyName?: string;
  children: React.ReactNode;
};

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: <MdOutlineCabin />,
    border: theme.colors.softYellow,
  },
  {
    label: "Destinations",
    href: "/destinations",
    icon: <FaMountain />,
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
  return (
    <>
      <MainContent>
        <SidebarNav items={navItems} logo={logo} />
        <main>
          <h2>{companyName}</h2>
          <p>{blurb}</p>
          {children}
        </main>
      </MainContent>
      <Footer />
    </>
  );
};

export default Layout;
