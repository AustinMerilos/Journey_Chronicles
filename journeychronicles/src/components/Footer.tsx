import React from "react";
import { FooterContainer } from "../styles/Footer";
import Newsletter from "./NewsLetter";

type FooterProps = {
  year?: number;
  companyName?: string;
};

const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear(),
  companyName = "Journey Chronicles",
}) => {
  return (
    <FooterContainer>
      <Newsletter />
      <p>
        &copy; {year} {companyName}. All rights reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;
