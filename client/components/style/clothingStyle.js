import styled from 'styled-components';
import * as colors from './colors';

export const Description = styled.div`
  display: inline-block;
  height: 250px;
  width: 250px;
  margin-left: 5%;
`

export const Img = styled.img`
  display: inline-block;
  float: left;
  height: 250px;
  width: 250px;
  border: 3px solid ${colors.palegold};
  border-radius: 5px;
`;

export const PieceLabel = styled.h3`
  background: ${colors.charcoal};
  color: ${colors.paper};
  opacity: 0.7;
  padding: auto 1em;
`;

export const Tags = styled.h5`
  color: ${colors.silk};
`;
