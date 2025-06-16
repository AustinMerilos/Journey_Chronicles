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
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(
    135deg,
    ${theme.colors.orange},
    ${theme.colors.softYellow}
  );
  color: ${theme.colors.darkGreen};
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  text-transform: uppercase;
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
    transform: scale(1.03) rotate(-1deg);
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
