import React, { useContext } from 'react';
import styled from 'styled-components';

import { Card, CardTitle, CardStats, Subheading } from './index';

const Container = styled(Card)`
  text-align: center;
  border-top-width: 0.25rem;
  border-top-style: solid;
  border-top-color: ${(props) => props.color};
`;

const SubscribersWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const SubscribersValue = styled.span`
  font-weight: bold;
  font-size: 3.5rem;
  display: block;
`;

const SubscribersLabel = styled.span`
  color: ${(props) => props.theme.subheadingColor};
  letter-spacing: 0.313rem;
  font-size: 0.75rem;
  text-transform: uppercase;
`;

export const CardFollower = ({
  general: { name, username, Icon, color },
  followers: { total, today, status },
}) => (
  <Container color={color}>
    <CardTitle center>
      {Icon}
      <Subheading style={{ marginLeft: '0.5rem' }}>{username}</Subheading>
    </CardTitle>
    <SubscribersWrapper>
      <SubscribersValue>{total}</SubscribersValue>
      <SubscribersLabel>followers</SubscribersLabel>
    </SubscribersWrapper>
    <CardStats status={status} value={today} label="today" />
  </Container>
);
