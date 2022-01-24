import * as S from './styles';

export interface SeparatorProps {
  color?: string;
  marginTop?: string;
  marginBottom?: string;
}

export const Separator = ({
  color,
  marginTop,
  marginBottom,
}: SeparatorProps) => (
  <S.Wrapper color={color} marginTop={marginTop} marginBottom={marginBottom} />
);
