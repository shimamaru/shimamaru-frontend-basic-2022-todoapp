import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import StyledInput from "../../Atoms/Input";

const Task = ({
  onTaskChange,
  onTaskComplete,
  taskName = "",
  defaultIsEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const handleEditComplete = (editedTaskName) => {
    setIsEditing(false);
    onTaskChange(editedTaskName);
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <StyledInput
          onEditComplete={handleEditComplete}
          defaultValue={taskName}
        />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={handleEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledCheckboxWrapper = styled.div`
  margin-right: 10px;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledTaskName = styled.div``;

const StyledEditButtonWrapper = styled.div``;

export default Task;
