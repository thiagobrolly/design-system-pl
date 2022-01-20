import styled from 'styled-components';
import { IconContainerProps } from './types';

export const IconContainer = styled.div<IconContainerProps>`
  /* max-width: max-content; */
  /* pointer-events: none; */
  svg {
    fill: ${(props) => props.color};
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
  }
`;
