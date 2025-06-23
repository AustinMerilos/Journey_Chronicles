import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./Constants";

interface NavLinkProps {
  $borderColor?: string;
}

const Aside = styled.aside<{ $collapsed?: boolean }>`
  width: ${({ $collapsed }) => ($collapsed ? "60px" : "250px")};
  background-color: ${theme.colors.darkGreen};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 15px;
  transition: width 0.3s ease, background-color 0.3s ease, padding 0.3s ease;
  z-index: 1100;

  @media (max-width: 768px) {
    width: ${({ $collapsed }) => ($collapsed ? "0" : "200px")};
    padding: ${({ $collapsed }) => ($collapsed ? "0" : "15px")};
    box-shadow: ${({ $collapsed }) =>
      $collapsed ? "none" : "4px 0 10px rgba(0,0,0,0.2)"};
    background-color: ${({ $collapsed }) =>
      $collapsed ? "transparent" : "rgba(22, 97, 14, 0.85)"};
  }
`;

const Label = styled.span<{ $collapsed?: boolean }>`
  font-size: 1rem;
  white-space: nowrap;
  opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
  width: ${({ $collapsed }) => ($collapsed ? "0px" : "auto")};
  overflow: hidden;
  transition: opacity 0.3s ease, width 0.3s ease;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`;

const LogoContainer = styled.div`
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
  cursor: pointer;

  &:hover {
    transform: scale(1.03) rotate(-1deg);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding: 0.75rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(RouterNavLink)<NavLinkProps>`
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
  }
`;

export { NavLink, NavList, LogoContainer, Aside, Label, IconWrapper };
