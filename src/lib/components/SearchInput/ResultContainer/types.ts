export interface ResultsContainerProps {
  resultList: string[];
  setWordSearched: React.Dispatch<React.SetStateAction<string>>;
  setResultList: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface ResultItemProps {
  onClick: React.MouseEventHandler<HTMLLIElement>;
}
