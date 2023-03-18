import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";

const Alert = ({ show }) => {
  return <StyledAlert show={show}>警告</StyledAlert>;
};

const StyledAlert = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  margin: 0 auto;
`;

export default Alert;
