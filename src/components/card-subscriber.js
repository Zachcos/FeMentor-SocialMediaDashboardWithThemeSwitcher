import React from 'react';
import styled from 'styled-components';

import { Card, CardTitle, CardStats, Subheading } from './index';

const SubscriberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubscriberValue = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const CardSubscriber = ({ general: { name, Icon }, metrics }) => {
  console.log('destructure props here');
  return (
    <>
      {metrics.map(({ sectionName, total, today, status }) => (
        <Card key={`${name}-${sectionName}`}>
          <CardTitle>
            <h3>
              <Subheading>{sectionName}</Subheading>
            </h3>
            {Icon}
          </CardTitle>
          <SubscriberWrapper>
            <SubscriberValue>{total}</SubscriberValue>
            <CardStats value={today} status={status} />
          </SubscriberWrapper>
        </Card>
      ))}
    </>
  );
};
