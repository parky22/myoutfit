import styled from 'styled-components';
import { Link } from 'react-router';

/*
  Color Scheme:
  Pale Gold: #C0B283
  Silk: #DCD0C0
  Paper: #F4F4F4
  Charcoal: #373737
*/

export const Button = styled.button`
  background: ${props => props.primary ? '#DCD0C0' : '#F4F4F4'};
  color: ${props => props.primary ? '#F4F4F4' : '#DCD0C0'};
  font-family: Courier New;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #DCD0C0;
  border-radius: 3px;

  &:hover {
    background: #C0B283;
  }
`;

export const ChildrenWrapper = styled.div`
  background: #F4F4F4;
  float: right;
  width: 78%;
`;

export const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em;
  color: #DCD0C0;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

export const StyledA = styled.a`
  color: #373737;
`;

// weird bug where primary doesn't make text white
export const StyledLink = styled(Link)`
  color: '#DCD0C0';
  display: block;
  margin: 0.5em 0;
`;

export const Wrapper = styled.div`
  background: #F4F4F4;
  width: 90%;
  margin: auto;
`;
