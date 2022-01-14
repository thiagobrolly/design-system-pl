export interface ResultsContainerProps {
  width: string;
  resultList: string[];
  setWordSearched: React.Dispatch<React.SetStateAction<string>>;
  setResultList: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface ContainerProps {
  width: string;
}

export interface ResultItemProps {
  onClick: React.MouseEventHandler<HTMLLIElement>;
}
