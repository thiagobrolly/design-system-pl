import { useState, ChangeEvent } from 'react';
import * as S from './styles';

export type SelectProps = {
  label?: string;
  placeholder?: string;
  initalValue?: number | string;
  options: {
    value: number | string;
    displayValue: number | string;
  }[];
};

export const Select = ({
  label,
  placeholder,
  initalValue = '',
  options,
}: SelectProps) => {
  const [value, setValue] = useState<number | string>(initalValue);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    // console.log(newValue);
  };

  const renderOptions = () => {
    return (
      <>
        {options.map((option) => {
          return (
            <S.Option key={option.value} value={option.value}>
              {option.displayValue}
            </S.Option>
          );
        })}
      </>
    );
  };

  return (
    <S.Wrapper>
      {label && <S.Label htmlFor="select">{label}</S.Label>}
      <S.Select id="select" value={value} onChange={handleChange}>
        {placeholder && (
          <S.Option value="" disabled>
            {placeholder}
          </S.Option>
        )}
        {renderOptions()}
      </S.Select>
    </S.Wrapper>
  );
};
