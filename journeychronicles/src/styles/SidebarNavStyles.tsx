import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./Constants";

export const Aside = styled.aside`
  width: 16rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${theme.colors.darkGreen};
  color: ${theme.colors.lightYellow};
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const LogoContainer = styled.div`
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: ${theme.colors.orange};
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.colors.lightYellow};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${theme.colors.softYellow};
  }
`;

export const IconWrapper = styled.span`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;
