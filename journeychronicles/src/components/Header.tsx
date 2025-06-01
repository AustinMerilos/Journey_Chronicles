import React from "react";

type HeaderProps = {
  blurb?: string;
  companyName?: string;
};

const Header: React.FC<HeaderProps> = ({
  companyName = "Journey Chronicles",
  blurb = "Just random text should be here explainging the blog I guess",
}) => {
  return (
    <header>
      <p>{blurb}.</p>
      <p>{companyName}.</p>
    </header>
  );
};

export default Header;
