import { on } from "events";
import * as S from "./style"

interface LikeItemProps {
  src: string;
  title: string;
  isSelect: Boolean,
  onClick: () => void;
}

const LikeItem = (
  { src, title, isSelect, onClick }: LikeItemProps
) => {
  
  return (
    <S.LikeItemContainer isSelect={isSelect} onClick={onClick}>
      <S.LikeItemImage src={src}/>
      <S.LikeText isSelect={isSelect}>{title}</S.LikeText>
    </S.LikeItemContainer>
  )
}

export default LikeItem;