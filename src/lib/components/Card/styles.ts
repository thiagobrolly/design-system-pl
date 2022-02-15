import styled from 'styled-components';
import { CardProps } from '.';
import { theme } from '../..';

export const Wrapper = styled.div<CardProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  background-color: ${theme.color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 7%);
  border-radius: ${theme.border.radius};
`;

export const SubTitle = styled.span`
  margin-top: 0.5rem;
  font-size: ${theme.font.size.medium};
  color: ${theme.color.gray_900};
`;
