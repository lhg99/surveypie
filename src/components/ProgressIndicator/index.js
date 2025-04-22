import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import Bar from '../Bar';

function ProgressIndicator() {
  const length = useRecoilValue(questionsLengthState);
  const [answers] = useAnswers();
  const step = useStep();

  const bars = [];
  for (let i = 0; i < length; i++) {
    let status = 'pending';
    if (i === step) {
      status = 'in-progress';
    }
    if (answers[i]) {
      status = 'done';
    }

    bars.push(<Bar key={i} status={status} />);
  }
  return (
    <ProgressIndicatorWrapper>
      {bars}
      <PageCount>
        <span>{step + 1}</span>/{length}
      </PageCount>
    </ProgressIndicatorWrapper>
  );
}

export default ProgressIndicator;

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  bottom: calc(100% + 1.5rem);
  left: 0;
  width: 100%;
  gap: 0.5rem;
`;

const PageCount = styled.div`
  margin-left: 0.5rem;
  color: #636262;
  font-size: 1rem;
  line-height: 1.1875rem;

  span {
    font-weight: bold;
    color: #121111;
  }
`;
