import styled from 'styled-components';
import { Link } from 'react-router';

export const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover {
    background: lightblue;
  }
`;

// weird bug where primary doesn't make text white
export const StyledLink = styled(Link)`
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  display: block;
  margin: 0.5em 0;
`
export const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em;
  color: purple;
  background: red;
  border: none;
  border-radius: 3px;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;