import * as S from "./style"

interface resultItemProps {
  src: string;
  title: string,
  description: string,
  caption: string
  warring?: string
}

const ResultItem = ({ src, title, description, caption, warring }: resultItemProps) => {
  return (
    <S.resultItemContainer>
      <S.resultItemImg src={src}/>
      <S.resultItemContentContainer>
        <S.resultItemTitle>{title}</S.resultItemTitle>
        <S.resultItemDescription>{description}</S.resultItemDescription>
        <S.resultItemCaptionContainer>
          <S.resultItemCaption>{caption}{warring && " ·"}</S.resultItemCaption>
          {warring && (<S.resultItemCaption color="#FF0000"> {"\u00A0" + warring}</S.resultItemCaption>)}
        </S.resultItemCaptionContainer>
      </S.resultItemContentContainer>
    </S.resultItemContainer>
  );
}

export default ResultItem;