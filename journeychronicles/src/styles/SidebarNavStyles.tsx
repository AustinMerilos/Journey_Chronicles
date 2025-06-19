import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./Constants";

interface NavLinkProps {
  $borderColor?: string;
}

export const Aside = styled.aside<{ $collapsed?: boolean }>`
  width: ${({ $collapsed }) => ($collapsed ? "60px" : "250px")};
  transition: width 0.3s ease;
  background-color: ${theme.colors.darkGreen};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #eee;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Label = styled.span`
  font-size: 1rem;
  white-space: nowrap;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  margin-right: 1rem;
`;

export const LogoContainer = styled.div`
  margin-bottom: 2.5rem;
  background: linear-gradient(
    135deg,
    ${theme.colors.orange},
    ${theme.colors.softYellow}
  );
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.03) rotate(-1deg);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const NavLink = styled(RouterNavLink)<NavLinkProps>`
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
    transform: scale(1.03) rotate(-1deg);
  }

  &.active {
    color: ${theme.colors.orange};
    background-color: ${theme.colors.lightYellow};
    font-weight: bold;
  }
`;
