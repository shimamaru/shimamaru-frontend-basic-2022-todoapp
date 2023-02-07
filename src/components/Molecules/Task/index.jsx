import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Checkbox from "../../Atoms/Checkbox";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import EditButton from "../../Atoms/EditButton";

const Task = (props) => {
  const [isEditing, setIsEditing] = useState(defaultsEditing);

  const {
    onTaskChange,
    onTaskComplete,
    taskName = "",
    defaultsEditing = false,
  } = props;

  const onEditComplete = (e) => {
    setIsEditing(false);
    onTaskChange(e.target.value);
  };

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <SWrapper>
      <Checkbox onClick={onTaskComplete} />
      {isEditing ? (
        <StyledInput onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledTaskName>{taskName}</StyledTaskName>
      )}
      <styledEditButton>
        <EditButton onClick={onEditButtonClick} />
      </styledEditButton>
    </SWrapper>
  );
};

export default Task;

const SWrapper = styled.div`
  display: flex;
  column-gap: 14px;
`;

const StyledTaskName = styled.p`
  background-color: ${COLOR.BLACK};
  width: 214px;
  height: 20px;
  border-radius: 2px;
  margin: 0;
`;

const StyledInput = styled.input`
  background-color: ${COLOR.BLACK};
  border: none;
  padding: 0;
  width: 214px;
  height: 20px;
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};

  :focus {
    outline: transparent;
  }
`;
