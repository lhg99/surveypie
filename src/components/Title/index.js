import React from 'react';
import styled from 'styled-components';

function Title({ children }) {
  return (
    <TitleWrapper>
      <span>Q.</span>
      {children}
    </TitleWrapper>
  );
}

export default Title;

const TitleWrapper = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: #121111;
  margin: 0;

  span {
    margin-right: 0.75rem;
  }
`;
