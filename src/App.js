import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
          <Route path="/done/:surveyId" element={<CompletionPage />} />
        </Routes>
      </Box>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Box = styled.div`
  width: 43.75rem;
  min-height: 31.25rem;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 1rem;
  padding: 3.75rem;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;
