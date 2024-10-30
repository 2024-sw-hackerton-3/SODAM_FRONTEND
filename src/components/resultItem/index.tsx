import * as S from "./style"

interface resultItemProps {
  src: string;
  title: string,
  description: string,
  caption: string
}

const ResultItem = ({ src, title, description, caption }: resultItemProps) => {
  return (
    <S.resultItemContainer>
      <S.resultItemImg src={src}/>
      <S.resultItemContentContainer>
        <S.resultItemTitle>{title}</S.resultItemTitle>
        <S.resultItemDescription>{description}</S.resultItemDescription>
        <S.resultItemCaption>{caption}</S.resultItemCaption>
      </S.resultItemContentContainer>
    </S.resultItemContainer>
  );
}

export default ResultItem;