import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 0.25rem;
  padding: 1.5rem;
  position: relative;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${(props) => props.theme.cardHoverBg};
  }
`;
