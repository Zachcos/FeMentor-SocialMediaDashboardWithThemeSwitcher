import React from 'react';
import styled from 'styled-components';
import { AppProvider } from './app-context';

import { DashboardHeader, DashboardFollower } from './components/index';

const Container = styled.div`
  max-width: 69.375rem;
  margin: 0 auto;
  padding: 2.25rem 1.5rem;
`;

function App() {
  return (
    <AppProvider>
      <Container>
        <DashboardHeader />
        <main>
          <DashboardFollower />
        </main>
      </Container>
    </AppProvider>
  );
}

export default App;
