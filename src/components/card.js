import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 0.25rem;
  padding: 1.5rem;
  position: relative;

  & > * {
    position: relative;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background-color: transparent;
    transition: background-color 0.5s ease;
    border-radius: 0.25rem;
  }

  &:hover {
    &::after {
      background-color: ${(props) => props.theme.cardHoverBg};
    }
  }
`;
