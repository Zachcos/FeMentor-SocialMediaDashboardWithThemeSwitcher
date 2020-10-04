import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.75rem;
  justify-content: ${(props) => (props.center ? 'center' : 'space-between')};
`;

export const CardTitle = ({ children, center }) => (
  <Container center={center}>{children}</Container>
);
