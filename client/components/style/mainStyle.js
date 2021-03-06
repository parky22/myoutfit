import styled from 'styled-components';
import { Link } from 'react-router';
import * as colors from './colors';

export const Button = styled.button`
  background: ${props => props.primary ? colors.silk : colors.paper};
  color: ${props => props.primary ? colors.paper : colors.silk};
  font-family: Courier New;
  font-size: 1em;
  margin: 3%;
  padding: 3%;
  border: 2px solid ${colors.silk};
  border-radius: 3px;

  &:hover {
    background: ${colors.palegold};
  }
`;

export const ChildrenWrapper = styled.div`
  background: ${colors.paper};
  float: right;
  margin-bottom: 5%;
  width: 77%;
`;

export const Input = styled.input`
  font-size: 1em;
  padding: 3%;
  margin: 1%;
  color: ${colors.silk};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

export const StyledA = styled.a`
  color: ${colors.charcoal};
`;

// weird bug where primary doesn't make text white
export const StyledLink = styled(Link)`
  color: ${colors.silk};
  display: block;
  margin: 0.5em 0;
`;

export const Wrapper = styled.div`
  background: ${colors.paper};
  width: 90%;
  margin: auto;
`;
