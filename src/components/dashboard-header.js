import React, { useContext } from 'react';
import styled from 'styled-components';

import { mediaQuery } from '../globalStyle';
import { AppStateContext } from '../app-context';
import { Theme } from '../models/themes';

import { Heading, Subheading } from './index';

const Header = styled.header`
  margin-bottom: 2.5rem;

  @media ${mediaQuery.tablet} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.857rem;
  }
`;

const TitleWrapper = styled.div`
  padding-bottom: 1.5rem;
  border-bottom-size: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.hrBg};
  margin-bottom: 1rem;

  @media ${mediaQuery.tablet} {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const Title = styled(Heading)`
  margin-bottom: 0.25rem;
`;

export const DashboardHeader = () => {
  const { totalFollowers } = useContext(AppStateContext);

  return (
    <Header>
      <TitleWrapper>
        <Title>Social Media Dashboard</Title>
        <Subheading>Total followers: {totalFollowers}</Subheading>
      </TitleWrapper>
    </Header>
  );
};
