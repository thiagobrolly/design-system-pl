export interface SearchInputProps {
  width: string;
  searchInputType: 'filled' | 'outlined';
  disabled?: boolean;
  label?: string;
  errorMessage?: string;
  readyOnly?: boolean;
  autocomplete?: boolean;
  inputId: string;
  inputArialabel: string;
  inputName?: string;
  labelId: string;
  labelArialabel: string;
  options: string[];
}

export interface InputProps {
  id?: string;
  name?: string;
  arialabel?: string;
  width: string;
  searchInputType: 'filled' | 'outlined';
  disabled?: boolean;
  errorMessage?: string;
}

export interface LabelProps {
  id?: string;
  arialabel?: string;
  htmlfor?: string;
  errorMessage?: string;
}
