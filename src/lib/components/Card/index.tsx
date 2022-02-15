import { Heading } from '../Heading';
import { Separator } from '../Separator';
import * as S from './styles';

export type CardProps = {
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const Card = ({
  title = '',
  subTitle = '',
  children,
  fullWidth = false,
  ...props
}: CardProps) => (
  <S.Wrapper fullWidth={fullWidth} {...props}>
    {!!title && (
      <>
        <Heading bold color="black" size="xlarge">
          {title}
        </Heading>
        {!!subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
        <Separator color="#f0eff4" marginBottom="2rem" />
      </>
    )}

    {children}
  </S.Wrapper>
);
