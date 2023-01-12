import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import CheckMarkImage from "../../../assets/svg/check.svg";

const Checkbox = ({ onClick }) => {
  return (
    <StyleCheckbox onClick={onClick}>
      <StyledCheckMarkImg src={CheckMarkImage} />
    </StyleCheckbox>
  );
};
export default Checkbox;

const StyledCheckMarkImg = styled.img`
  width: 13px;
  height: 10px;
  visibility: hidden;
`;

const StyleCheckbox = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  height: 20px;
  width: 20px;
  padding: 0;
  border-radius: 2px;
  border: 1px solid ${COLOR.LIGHT_GRAY};

  &:hover {
    ${StyledCheckMarkImg} {
      visibility: visible;
    }
  }
`;
