import { InputHTMLAttributes } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
  label,
  labelFor = '',
  labelColor,
  ...props
}: CheckboxProps) => {
  return (
    <S.Wrapper>
      <S.Input id={labelFor} type="checkbox" {...props} />

      {label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};
