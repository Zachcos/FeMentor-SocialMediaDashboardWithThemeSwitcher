import React from 'react';
import styled from 'styled-components';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

const Container = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) =>
    props.status === 'up' ? 'var(--limeGreen)' : 'var(--brightRed)'};
`;

export const CardStats = ({ status, value, label }) => {
  const Caret = status === 'up' ? FaCaretUp : FaCaretDown;

  return (
    <Container status={status}>
      <Caret style={{ marginRight: '0.25rem' }} />
      <b>
        {value} {label}
      </b>
    </Container>
  );
};
