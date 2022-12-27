import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

const SampleButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon src={pencil} />
    </StyledButton>
  );
};

export default SampleButton;

const StyledButton = styled.button`
  padding: 0;
  border: none;
`;

const StyledIcon = styled.img`
  cursor: pointer;

  &:hover {
    background-color: #dcdcdc;
    border-radius: 50%;
  }
`;
