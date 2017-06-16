import styled from 'styled-components';
import { Link } from 'react-router';
import * as colors from './colors';


export const FooterWrapper = styled.footer`
  background: ${colors.charcoal};
  bottom: 0;
  clear: both;
  opacity: 0.5;
  position: relative;
`;

export const FooterLink = styled(Link) `
  display: block;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  color: ${colors.paper};

  &:hover {
    background-color: pink;
  }
`;
