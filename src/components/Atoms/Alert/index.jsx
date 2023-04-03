import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import TEXT from "../../../variables/texts.js";
import BREAKPOINT from "../../../variables/breakpoint.js";

const Alert = ({ show, message }) => {
  return <StyledAlert show={show}>{message}</StyledAlert>;
};

const StyledAlert = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  margin: 0 auto;
  border-radius: 4px;
  padding: 10px 20px;
  width: 90%;
  ${TEXT.S}
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  white-space: normal;
  word-wrap: normal;
  max-width: 400px;

  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 280px;
  }
`;

export default Alert;
