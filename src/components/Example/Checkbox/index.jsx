import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";

const Checkbox = ({ onClick }) => {
  return (
    <StyleCheckbox onClick={onClick}>
      <img src={check} alt="" />
    </StyleCheckbox>
  );
};
export default Checkbox;

const StyleCheckbox = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.S}
`;
