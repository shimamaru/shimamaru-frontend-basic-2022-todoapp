import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue = "" }) => {
  const InputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEditComplete();
    }
  };

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  return (
    <div>
      <SInput
        defaultValue={defaultValue}
        ref={InputRef}
        onKeyPress={handleKeyPress}
        onBlur={() => onEditComplete(InputRef.current.value)}
      />
    </div>
  );
};

export default Input;

const SInput = styled.input`
  background-color: ${COLOR.BLACK};
  border: none;
  padding: 0;
  height: 20px;
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};

  :focus {
    outline: transparent;
  }
`;
