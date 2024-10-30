import * as S from "./style"

interface RecipeIconItemProps {
  icon: string;
  text: string;
}

const RecipeIconItem = ({ icon, text }: RecipeIconItemProps) => {
  return (
    <S.RecipeIconItemContainer>
      <S.RecipeIconItemIcon src={icon} />
      <S.RecipeIconItemText>{text}</S.RecipeIconItemText>
    </S.RecipeIconItemContainer>
  )
}

export default RecipeIconItem;