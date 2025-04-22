import React from 'react';
import styled from 'styled-components';

function TextAreaInput({ answer = '', setAnswer, options }) {
  return (
    <TextArea
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={options.placeholder}
      {...(options?.max && { maxLength: options?.max })}
    />
  );
}

const TextArea = styled.input`
  border: 0.0625rem solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 0.3125rem;
  padding: 0.75rem 1.125rem;
  width: 100%;

  font-size: 1.125rem;
  line-height: 1.3125rem;
  height: 12.25rem;
  resize: none;
`;

export default TextAreaInput;
