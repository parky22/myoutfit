import styled from 'styled-components';
import { Link } from 'react-router';
import * as colors from './colors';

export const Button = styled.button`
  background: ${props => props.primary ? colors.silk : colors.paper};
  color: ${props => props.primary ? colors.paper : colors.silk};
  font-family: Courier New;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
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
  width: 78%;
`;

export const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em;
  color: ${colors.silk};
  background: papayawhip;
  border: none;
  border-radius: 3px;

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
