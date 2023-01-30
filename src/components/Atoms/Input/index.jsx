import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = (props) => {
  const InputRef = useRef();
  useEffect(() => {
    InputRef.current.focus()
  }, []);

  const onEditComplete = () => {
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onEditComplete();
    }
  }

  return (
      <SInput defaultValue={props.defaultValue} ref={InputRef} onKeyPress={handleKeyPress} />
  )};

export default Input;

const SInput = styled.input`
  background-color: ${COLOR.BLACK};
  border: none;
  padding: 0;
  height: 20px;
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};


  :focus{
    outline: transparent;
  }
`;