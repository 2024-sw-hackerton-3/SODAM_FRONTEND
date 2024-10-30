
import * as S from "./style"

interface RecipeIngredeintItemProps {
  text: string,
  amount: string,
  onClick?: () => void
}

const RecipeIngredeintItem = ({ text, amount, onClick}: RecipeIngredeintItemProps) => {
  return (
    <S.RecipeIngredientItemContainer>
      <S.RecipeIngredientItemText>{text}</S.RecipeIngredientItemText>
      <S.RecipeIngredientItemText>{amount}</S.RecipeIngredientItemText>
      
      <S.RecipeIngredientItemButtonContainer>
        <S.RecipeIngredientItemButtonText>구매하기</S.RecipeIngredientItemButtonText>
      </S.RecipeIngredientItemButtonContainer>
    </S.RecipeIngredientItemContainer>
  );
}

export default RecipeIngredeintItem;