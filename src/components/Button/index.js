import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  padding: 1rem 1.5rem;
  min-width: 12.5rem;

  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background-color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border-radius: 0.25rem;
  border: none;
  font-weight: bold;
  font-size: 1.125rem;

  border: ${({ type }) =>
    type === 'TERTIARY'
      ? `1px solid ${TERTIARY.BUTTON.DEFAULT.BORDER}`
      : 'none'};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.HOVER.BORDER}`
        : 'none'};
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.PRESSED.BORDER}`
        : 'none'};
  }

  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background-color: ${({ type }) =>
      colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? `1px solid ${TERTIARY.BUTTON.DISABLED.BORDER}`
        : 'none'};
  }
`;

export default Button;
