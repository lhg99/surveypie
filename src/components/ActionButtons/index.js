import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useAnswers from '../../hooks/useAnswers';
import useRequiredOption from '../../hooks/useRequiredOption';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import postAnswers from '../../services/postAnswers';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import Button from '../Button';

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const [answers, setAnswers] = useAnswers();
  const [isPosting, setIsPosting] = useState(false);
  const isRequired = useRequiredOption();

  const questionsLength = useRecoilValue(questionsLengthState);

  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();
  const isBlockToNext = isRequired ? !answers[step]?.length : false;
  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="TERTIARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                setAnswers([]);
                navigate(`/done/${surveyId}`);
              })
              .catch((err) => {
                console.log('error: ', err.response);
                alert('에러가 발생했습니다. 다시 시도해주세요.');
                setIsPosting(false);
              });
          }}
          disabled={isPosting || isBlockToNext}
        >
          {isPosting ? '제출 중입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
          disabled={isBlockToNext}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

export default ActionButtons;

const ActionButtonsWrapper = styled.div`
  margin-top: 4.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
