import * as S from "./style"


interface SearchItemProps {
  item: string;
}

const SearchItem = ({ item }: SearchItemProps) => {
  return (
    <S.SearchItemContainer>
      <S.SearchItemText>{item}</S.SearchItemText>
    </S.SearchItemContainer>
  );
}

export default SearchItem;