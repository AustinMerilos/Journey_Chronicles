import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../styles/Constants";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid ${theme.colors.softYellow};
  border-top-color: ${theme.colors.orange};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => (
  <LoaderWrapper>
    <Spinner />
  </LoaderWrapper>
);

export default Loader;
