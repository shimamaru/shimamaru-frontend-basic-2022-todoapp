import React from "react";
import { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
import COLOR from "../../../variables/color";
const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      { name: "", initializing: true },
    ]);
  };

  const onTaskComplete = (index) => {
    setTaskList((prevTaskList) => prevTaskList.filter((_, i) => i !== index));
  };

  const onTaskNameChange = (value, index) => {
    setTaskList((prevTaskList) => {
      if (value === "") {
        return prevTaskList.filter((_, i) => i !== index);
      } else {
        const newTaskList = [...prevTaskList];
        newTaskList[index] = { ...newTaskList[index], name: value };
        return newTaskList;
      }
    });
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick}>Add Task</AddTaskButton>
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  padding: 22px 26px;
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  width: 100%;
  max-width: 500pxs;
`;

const StyledTaskList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 9px;
`;

export default TodoCard;
