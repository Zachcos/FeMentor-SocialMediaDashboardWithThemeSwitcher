import styled from 'styled-components';
import { mediaQuery } from '../globalStyle';

export const Subheading = styled.strong`
  color: ${(props) => props.theme.text_dark};
  font-size: 0.875rem;
  font-weight: bold;
`;
