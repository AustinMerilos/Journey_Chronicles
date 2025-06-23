import React from "react";
import { motion } from "framer-motion";
import {
  Aside,
  IconWrapper,
  LogoContainer,
  NavList,
  NavLink,
  Label,
} from "../styles/SidebarNavStyles";
import { FaMountainSun } from "react-icons/fa6";

type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  border?: string;
};

type SidebarNavProps = {
  items: NavItem[];
  logo?: React.ReactNode;
  collapsed: boolean;
  onLogoClick?: () => void;
  visible: boolean;
};

const SidebarNav: React.FC<SidebarNavProps> = ({
  items,
  logo,
  collapsed,
  onLogoClick,
  visible,
}) => {
  return (
    <Aside $collapsed={collapsed}>
      <LogoContainer onClick={onLogoClick}>
        {collapsed ? <FaMountainSun size={24} /> : logo}
      </LogoContainer>

      <NavList>
        {items.map(({ label, href, icon, border }) => (
          <motion.li
            key={label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to={href} $borderColor={border}>
              <IconWrapper>{icon}</IconWrapper>
              {!collapsed && <Label $collapsed={collapsed}>{label}</Label>}
            </NavLink>
          </motion.li>
        ))}
      </NavList>
    </Aside>
  );
};

export default SidebarNav;
