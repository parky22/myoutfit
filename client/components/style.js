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
