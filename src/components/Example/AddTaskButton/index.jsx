import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledAddTaskButton onClick={onClick}>
      <PlusButton src={plus} />
      <ButtonText>タスクを追加</ButtonText>
    </StyledAddTaskButton>
  );
};

export default AddTaskButton;

const StyledAddTaskButton = styled.div`
  display: flex;
  width: fit-content;
  column-gap: 10px;
  border-radius: 12px;
  padding: 2px 6px;

  &:hover {
    background-color: #c5d8d2;
    cursor: pointer;
  }
`;

const PlusButton = styled.img``;

const ButtonText = styled.p`
  color: ${COLOR.GREEN};
  margin: 0;
`;

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.S}
`;
