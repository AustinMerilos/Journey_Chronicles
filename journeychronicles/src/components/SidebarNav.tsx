import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

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

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const SidebarNav: React.FC<NavBarProps> = ({ items, logo }) => {
  return (
    <Aside>
      <LogoContainer>{logo}</LogoContainer>
      <NavList>
        {items.map(({ label, href, icon }) => (
          <motion.li
            key={label}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to={href}>
              {icon && <IconWrapper>{icon}</IconWrapper>}
              {label}
            </NavLink>
          </motion.li>
        ))}
      </NavList>
    </Aside>
  );
};

export default SidebarNav;
