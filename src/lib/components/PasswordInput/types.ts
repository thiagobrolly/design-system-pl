export interface PasswordInputProps {
  width: string;
  passwordInputType: 'filled' | 'outlined';
  disabled?: boolean;
  label?: string;
  errorMessage?: string;
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
  width: string;
  passwordInputType: 'filled' | 'outlined';
  disabled?: boolean;
  errorMessage?: string;
}

export interface LabelProps {
  id?: string;
  arialabel?: string;
  htmlfor?: string;
  errorMessage?: string;
}
