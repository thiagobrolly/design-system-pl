import * as S from './styles';

export type SeparatorProps = {
  color?: string;
  marginTop?: string;
  marginBottom?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Separator = ({
  color,
  marginTop,
  marginBottom,
  ...props
}: SeparatorProps) => (
  <S.Wrapper
    color={color}
    marginTop={marginTop}
    marginBottom={marginBottom}
    {...props}
  />
);
