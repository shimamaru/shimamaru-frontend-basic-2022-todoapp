import React from "react";
import { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

const TodoCard = () => {
  const onAddTaskButtonClick = () => {
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      { name: "", initializing: true },
    ]);
  };

  const onTaskComplete = (index) => {
    setTaskList((prevTaskList) => prevTaskList.filter((_, i) => i !== index));
  };

  const [taskList, setTaskList] = useState([{ name: "", initializing: false }]);

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
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledTaskList = styled.ul`
  margin: 0;
  padding: 0;
`;

export default TodoCard;
