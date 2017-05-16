import styled from 'styled-components';
import { Link } from 'react-router';

/*
  Color Scheme:
  Pale Gold: #C0B283
  Silk: #DCD0C0
  Paper: #F4F4F4
  Charcoal: #373737
*/

export const FooterWrapper = styled.footer`
  background: #373737;
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
  color: #F4F4F4;

  &:hover {
    background-color: #373737;
  }
`;
