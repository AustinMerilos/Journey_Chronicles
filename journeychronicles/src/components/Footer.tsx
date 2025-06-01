import React from "react";

type FooterProps = {
  year?: number;
  companyName?: string;
};

const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  companyName = "Journey Chronicles",
}) => {
  return (
    <footer>
      <p>
        &copy; {year} {companyName}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
