import React from "react";
import SidebarNav from "./SidebarNav";

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

const logo = <h1>TravelBlog</h1>;

const Layout: React.FC<LayoutProps> = ({
  companyName = "Journey Chronicles",
  blurb = "Just random text should be here explaining the blog I guess",
  children,
}) => {
  return (
    <div className="flex">
      <SidebarNav items={navItems} logo={logo} />
      <main className="ml-64 p-6 w-full min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">{companyName}</h2>
        <p className="mb-6">{blurb}</p>
        {children}
      </main>
    </div>
  );
};

export default Layout;
