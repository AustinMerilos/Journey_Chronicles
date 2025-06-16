import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./Constants";

interface NavLinkProps {
  $borderColor?: string;
}

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
  padding: 2rem 1.5rem;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  margin-bottom: 2.5rem;
  font-size: 1.75rem;
  font-weight: 800;
  background-color: ${theme.colors.orange};
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  text-align: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const NavLink = styled(Link)<NavLinkProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.15rem;
  color: ${theme.colors.darkGreen};
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background: white;
  border: 2px solid ${({ $borderColor }) => $borderColor || "transparent"};
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.softYellow};
    color: ${theme.colors.darkGreen};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.softYellow};
  border-radius: 50%;
  padding: 0.5rem;
  font-size: 1.25rem;
`;
