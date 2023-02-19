import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <TodoCard />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  align-items: center;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 20px;

  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 0 20px;
  }
`;

export default MainPage;
