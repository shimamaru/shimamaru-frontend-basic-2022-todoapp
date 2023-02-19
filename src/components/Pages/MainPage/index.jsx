import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <TodoCard />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin: 0 auto;
  align-items: center;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 20px;
`;

export default MainPage;
