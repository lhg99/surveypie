// status = 'pending' | 'in-progress' | 'done'

import styled from 'styled-components';

const Bar = styled.div`
  width: 7.5rem;
  height: 0.5rem;
  border-radius: 1rem;
  background: ${({ status }) => {
    if (status === 'pending') {
      return '#E3E2E7';
    } else if (status === 'in-progress') {
      return '#6542F1';
    } else if (status === 'done') {
      return '#BAA9FF';
    }
  }};
`;

export default Bar;
