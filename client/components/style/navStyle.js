import styled from 'styled-components';
import { Link } from 'react-router';
import * as colors from './colors';

export const Nav = styled.nav`
  background: ${colors.palegold};
  opacity: 0.75;
  padding: 1%;
  float: left;
  width: 20%;
`;

export const NavLink = styled(Link)`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: ${colors.paper};

  &:hover {
    background-color: ${colors.charcoal};
  }
`;

export const NavUl = styled.ul`
  width: 90%;
`;
