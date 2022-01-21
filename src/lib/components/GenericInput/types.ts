export interface GenericInputProps {
  inputType?: 'text' | 'number' | 'email';
  width: string;
  genericInputType: 'filled' | 'outline';
  disabled?: boolean;
  label?: string;
  leftIcon?: boolean;
  leftIconType?: IconType;
  rightIcon?: boolean;
  rightIconType?: IconType;
  errorMessage?: string;
  readyOnly?: boolean;
  autocomplete?: boolean;
  inputId: string;
  inputArialabel: string;
  inputName?: string;
  labelId: string;
  labelArialabel: string;
}

export type IconType = 'searchIcon' | 'lockIcon' | 'userIcon';

export interface InputProps {
  id?: string;
  name?: string;
  arialabel?: string;
  type: 'text' | 'number' | 'email';
  width: string;
  genericInputType: 'filled' | 'outline';
  disabled?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
  errorMessage?: string;
}

export interface LabelProps {
  id?: string;
  arialabel?: string;
  htmlfor?: string;
  leftIcon?: React.ReactNode;
  errorMessage?: string;
}
