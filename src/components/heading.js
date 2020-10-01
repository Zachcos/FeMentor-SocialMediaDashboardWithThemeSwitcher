import styled from 'styled-components';
import { mediaQuery } from '../globalStyle';

export const Heading = styled.h1`
  color: ${(props) => props.theme.text_light};
  font-size: 1.5rem;
  font-weight: bold;

  @media ${mediaQuery.tablet} {
    font-size: 1.75rem;
  }
`;
