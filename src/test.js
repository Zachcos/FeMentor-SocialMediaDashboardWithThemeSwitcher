import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  background: ${props => props.theme.cardBg}
`;

export default function testDiv() {
  return (
    <Test>
      <h1>This is a test</h1>
    </Test>
  )
}