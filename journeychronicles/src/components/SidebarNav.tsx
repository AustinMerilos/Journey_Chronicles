import React from "react";
import { motion } from "framer-motion";
import {
  Aside,
  IconWrapper,
  LogoContainer,
  NavList,
  NavLink,
} from "../styles/SidebarNavStyles";

type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  border?: string;
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
        {items.map(({ label, href, icon, border }) => (
          <motion.li
            key={label}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to={href} $borderColor={border}>
              <IconWrapper>{icon}</IconWrapper>
              {label}
            </NavLink>
          </motion.li>
        ))}
      </NavList>
    </Aside>
  );
};

export default SidebarNav;
