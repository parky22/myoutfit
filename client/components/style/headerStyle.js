import styled from 'styled-components';
import { Link } from 'react-router';

/*
  Color Scheme:
  Pale Gold: #C0B283
  Silk: #DCD0C0
  Paper: #F4F4F4
  Charcoal: #373737
*/

export const Header = styled.h1`
  background: #F4F4F4;
  text-align: center;
  margin: 25px 0px 0px 0px;
`;

export const HeaderLink = styled(Link)`
  color: #373737;
`;
