import { Heading } from '../Heading';
import { Separator } from '../Separator';
import * as S from './styles';

export type CardProps = {
  showTitle?: boolean;
  title?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const Card = ({
  title = '',
  showTitle,
  children,
  fullWidth = false,
  ...props
}: CardProps) => (
  <S.Wrapper showTitle={showTitle} fullWidth={fullWidth} {...props}>
    {showTitle && (
      <>
        <Heading bold>{title}</Heading> <Separator color="#f0eff4" />
      </>
    )}

    {children}
  </S.Wrapper>
);
