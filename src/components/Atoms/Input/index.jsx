import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue = "" }) => {
  const InputRef = useRef(null);

  useEffect(() => {
    InputRef.current.focus();
    InputRef.current.value = defaultValue;
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEditComplete(InputRef.current.value);
    }
  };

  return (
    <StyledInput
      type="text"
      ref={InputRef}
      defaultValue={defaultValue}
      onKeyPress={handleKeyPress}
      onBlur={() => onEditComplete(InputRef.current.value)}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  background-color: ${COLOR.BLACK};
  border: none;
  padding: 0;
  width: 100%;
  height: 20px;
  padding: 3px;
  padding-left: 4px;
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};

  :focus {
    outline: transparent;
  }
`;
