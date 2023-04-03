import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
import COLOR from "../../../variables/color";
import { AlertHandlerContext } from "../../contexts/alert_handler";

import { useContext } from "react";

const localStorageKey = "taskList";

const TodoCard = () => {
  const alertHandler = useContext(AlertHandlerContext);

  const [taskList, setTaskList] = useState(() => {
    const storedTaskList = localStorage.getItem(localStorageKey);
    return storedTaskList ? JSON.parse(storedTaskList) : [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(taskList));
  }, [taskList]);

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
        alertHandler.showAlert("タスクの名前が設定されていません。");

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
`;

const StyledTaskList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 9px;
`;

export default TodoCard;
