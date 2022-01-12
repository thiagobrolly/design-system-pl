export interface GenericInputProps {
  inputType: 'text' | 'number' | 'email' | 'password';
  width: string;
  genericInputType: 'filled' | 'outlined';
  disabled?: boolean;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorMessage?: string;
  readyOnly?: boolean;
  inputId: string;
  inputArialabel: string;
  inputName?: string;
  labelId: string;
  labelArialabel: string;
}

export interface InputProps {
  id?: string;
  name?: string;
  arialabel?: string;
  type: 'text' | 'number' | 'email' | 'password';
  width: string;
  genericInputType: 'filled' | 'outlined';
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorMessage?: string;
}

export interface LabelProps {
  id?: string;
  arialabel?: string;
  htmlfor?: string;
  leftIcon?: React.ReactNode;
  errorMessage?: string;
}
