import * as S from "./style"


interface SearchItemProps {
  item: string;
  onClick?: () => void;
}

const SearchItem = ({ item, onClick }: SearchItemProps) => {
  return (
    <S.SearchItemContainer onClick={onClick}>
      <S.SearchItemText>{item}</S.SearchItemText>
    </S.SearchItemContainer>
  );
}

export default SearchItem;