import { searchUserDataMock } from './searchUserDataMock';

export interface SearchInputProps {
  searchInputType: 'filled' | 'outline';
  disabled?: boolean;
  label?: string;
  defaultErrorMessage: string;
  readyOnly?: boolean;
  autocomplete?: boolean;
  inputId: string;
  inputArialabel: string;
  inputName?: string;
  labelId: string;
  labelArialabel: string;
  options: typeof searchUserDataMock;
}

export interface InputProps {
  id?: string;
  name?: string;
  arialabel?: string;
  searchInputType: 'filled' | 'outline';
  disabled?: boolean;
  errorMessage?: string;
}

export interface LabelProps {
  id?: string;
  arialabel?: string;
  htmlfor?: string;
  errorMessage?: string;
}
