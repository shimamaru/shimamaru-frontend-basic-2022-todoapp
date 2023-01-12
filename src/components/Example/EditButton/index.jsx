import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

const SampleButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon src={pencil} />
      <StyledShadow />
    </StyledButton>
  );
};

export default SampleButton;
const StyledShadow = styled.div`
  position: absolute;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  top: 0px;
`;

const StyledButton = styled.button`
  padding: 0;
  border: none;
  height: 24px;
  background-color: transparent;
  position: relative;

  &:hover {
    ${StyledShadow} {
      background-color: ${COLOR.LIGHT_GRAY};
      opacity: 0.2;
    }
  }
`;

const StyledIcon = styled.img`
  cursor: pointer;
`;
