import styled from 'styled-components';
import { Link } from 'react-router';

export const Logo = styled.h1`
  font-family: Courier New;
`

export const Nav = styled.nav`
  background: #C0B283;
  opacity: 0.75;
  float: left;
  width: 200px;
`;

export const NavLink = styled(Link)`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: #F4F4F4;

  &:hover {
    background-color: #373737;
  }
`;

export const NavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
`;