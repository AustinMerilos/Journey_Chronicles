import React from "react";
import { NavLink } from "react-router-dom";
import {
  Aside,
  IconWrapper,
  LogoContainer,
  NavList,
} from "../styles/SidebarNavStyles";

type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type NavBarProps = {
  items: NavItem[];
  logo?: React.ReactNode;
};

const SidebarNav: React.FC<NavBarProps> = ({ items, logo }) => {
  return (
    <Aside>
      <LogoContainer>{logo}</LogoContainer>
      <NavList>
        {items.map(({ label, href, icon }) => (
          <li key={label}>
            <NavLink to={href}>
              {icon && <IconWrapper>{icon}</IconWrapper>}
              {label}
            </NavLink>
          </li>
        ))}
      </NavList>
    </Aside>
  );
};

export default SidebarNav;
