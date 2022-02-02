import styled from 'styled-components';
import { theme } from '../..';

export const Wrapper = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  background-color: ${theme.color.gray_500};
  border-radius: 0.2rem;
  padding: 0 ${theme.spacings.xsmall};
  border: 0.2rem solid;
  border-color: ${theme.color.gray_500};

  &:focus-within {
    box-shadow: 0 0 0.5rem ${theme.color.primary};
  }
`;

export const Input = styled.input`
  color: ${theme.color.black};
  font-size: ${theme.font.size.medium};
  padding: ${theme.spacings.xxsmall} 0;
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${theme.font.size.small};
  color: ${theme.color.black};
  cursor: pointer;
`;
