import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppStateContext } from '../app-context';
import { SectionHeading } from './index';

const Container = styled.section`
  display: grid;
  column-gap: 1.875rem;
  row-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(15.9375rem, 1fr));

  ${SectionHeading} {
    grid-column: 1 / -1;
  }
`;

export const DashboardSubscrption = () => {
  console.log('This is the subscription dashboard');

  return (
    <Container>
      <SectionHeading>Overview - Today</SectionHeading>
      <p>data will go here</p>
    </Container>
  );
};
