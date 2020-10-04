import React, { useContext } from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../globalStyle';

import { AppStateContext } from '../app-context';
import { CardFollower } from './index';

const Container = styled.section`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(15.9375rem, 1fr));
  margin-bottom: 2.875rem;

  @media ${mediaQuery.tablet} {
    gap: 1.875rem;
  }
`;

export const DashboardFollower = () => {
  console.log('grab app state here');

  return (
    <Container>
      <CardFollower />
    </Container>
  );
};
