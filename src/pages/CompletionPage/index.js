import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import congrats from '../../assets/congrats.png';
import reload from '../../assets/reload.png';
import Button from '../../components/Button';
import useSurveyId from '../../hooks/useSurveyId';

function CompletionPage() {
  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    <CompletionPageWrapper>
      <img src={congrats} alt="" width="209" height="204" />
      <MidText>설문을 완료했습니다.</MidText>

      <ReloadButton
        type="TERTIARY"
        onClick={() => {
          navigate(`/survey/${surveyId}/0`);
        }}
      >
        <img src={reload} alt="" width="24" height="24" />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageWrapper>
  );
}

export default CompletionPage;

const CompletionPageWrapper = styled.div`
  width: 100%;
  align-items: center;
`;

const MidText = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.75rem;
  margin-top: 16px;
  margin-bottom: 56px;
  gap: 0.625rem;
`;

const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
`;
