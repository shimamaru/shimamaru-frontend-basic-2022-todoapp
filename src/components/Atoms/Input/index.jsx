import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

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
  console.log(Input);

  return (
    <div>
      <SInput defaultValue={props.defaultValue} ref={InputRef} onKeyPress={handleKeyPress} />
    </div>
  )};


export default Input;

const SInput = styled.input`
  background-color: ${COLOR.BLACK};
  border: none;
  padding: 0;
  width: 232px;
  height: 20px;

  :focus{
    outline: transparent;
  }
`;