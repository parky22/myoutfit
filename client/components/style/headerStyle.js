import styled from 'styled-components';
import { Link } from 'react-router';
import * as colors from './colors';

export const Header = styled.h1`
  background: ${colors.paper};
  text-align: center;
  margin: 25px 0px 0px 0px;
`;

export const HeaderLink = styled(Link)`
  color: ${colors.charcoal};
`;

export const SmallHeader = styled.h2`
  color: ${colors.silk};
  margin: 1em auto;
`;
