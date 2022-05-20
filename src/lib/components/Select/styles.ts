import styled from 'styled-components';
// import { SelectProps } from '.';
import { theme } from '../..';

export const Wrapper = styled.div``;

export const Select = styled.select`
  border-radius: ${theme.border.radius};
  padding: ${theme.spacings.xxsmall};
`;

export const Option = styled.option`
  /* border-radius: ${theme.border.radius};

  &:hover {
    background-color: red;
    color: red;
  } */
`;

export const Label = styled.label`
  font-size: ${theme.font.size.small};
  color: ${theme.color.gray_600};
`;
