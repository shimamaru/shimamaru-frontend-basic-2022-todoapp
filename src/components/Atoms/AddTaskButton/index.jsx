import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledAddTaskButton onClick={onClick}>
      <PlusButton src={plus} />
      <ButtonText>タスクを追加</ButtonText>
      <StyledShadow />
    </StyledAddTaskButton>
  );
};

export default AddTaskButton;

const StyledShadow = styled.div`
  position: absolute;
  top: -2px;
  left: -6px;
  width: 126px;
  height: 24px;
  border-radius: 12px;
`;

const StyledAddTaskButton = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  column-gap: 10px;

  &:hover {
    cursor: pointer;
    ${StyledShadow} {
      background-color: ${COLOR.GREEN};
      opacity: 0.2;
    }
  }
`;

const PlusButton = styled.img`
  width: 20px;
  height: 20px;
`;

const ButtonText = styled.p`
  ${TEXT.S}
  color: ${COLOR.GREEN};
  margin: 0;
`;
