import * as S from "./style"
import BackIcon from '../../assets/image/ic_back.png';
import UserIcon from '../../assets/image/ic_user.png';
import ClockIcon from '../../assets/image/ic_clock.png';
import BaconIcon from '../../assets/image/ic_bacon.png';
import SaltIcon from '../../assets/image/ic_salt.png';
import RecipeIconItem from "./recipeIconItem";
import RecipeIngredeintItem from "./recipeIngredientItem";
import { useState } from "react";
import RecipePager from "./recipePager";
import { useRecoilState } from "recoil";
import { FoodRecipeState } from "../../state/state";

const RecipeScreen = () => {
  const foodRecipeState = useRecoilState(FoodRecipeState)[0];

  const [isRecipePagerOpen, setIsRecipePagerOpen] = useState(false);

  const onCloseRecipePager = () => {
    setIsRecipePagerOpen(false);
  }

  const onOpenRecipePager = () => {
    setIsRecipePagerOpen(true);
  }

  const recipeImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAV2rUrUswif9EdhpizFtbW1nz2zaA4fU2ww&s";

  return (
    <S.RecipeContainer>
      {isRecipePagerOpen && (<RecipePager recipeMenus={foodRecipeState.step.map((step, index) => `${step}`)} onClose={onCloseRecipePager}/>)}
      {!isRecipePagerOpen && 
      (
        <S.RecipeTopBarContainer>
        <S.RecipeBackButtonContainer>
          <S.RecipeBackButtonImg src={BackIcon}/>
        </S.RecipeBackButtonContainer>
        <S.RecipeTopBarText>레시피</S.RecipeTopBarText>
      </S.RecipeTopBarContainer>
      )}
      {!isRecipePagerOpen &&
      (<S.RecipeScrollContainer>
        <S.RecipeThumbnail src={recipeImage}/>

        <S.Spacer height='8px'/>
        <S.RecipeContentContainer>
          <S.RecipeTitle>{`${foodRecipeState.name} 만들기`}</S.RecipeTitle>
          <S.RecipeDescription>{`손만 있다면 만들 수 있는${foodRecipeState.name} 레시피 입니다.쉽게 도전해보세요.`}</S.RecipeDescription>

          <S.RecipeInfoContainer>
            <S.Spacer width="60px"/>
            <S.RecipeInfoIcon src={UserIcon}/>
            <S.Spacer width="10px"/>
            <S.RecipeInfoText>{foodRecipeState.qnt}</S.RecipeInfoText>
            <S.SpaerMargin/>
            <S.RecipeInfoIcon src={ClockIcon}/>
            <S.Spacer width="10px"/>
            <S.RecipeInfoText>{foodRecipeState.cookingTime}</S.RecipeInfoText>
            <S.Spacer width="60px"/>
          </S.RecipeInfoContainer>

          <S.Spacer height='26px'/>
          <S.RecipeTitle>재료</S.RecipeTitle>
          <S.RecipeIngredientContainer>
            <S.RecipeIngredientText>[ 재료 ]</S.RecipeIngredientText>
            <S.Spacer height='4px'/>

            {
              foodRecipeState.substanList.reduce<JSX.Element[]>((acc, _, index) => {
                // 3개씩 묶어 `S.LikeItemHorizontalContainer`에 담음
                if (index % 3 === 0) {
                  acc.push(
                    <S.RecipeIngredientIconContainer>
                      {foodRecipeState.substanList.slice(index, index + 3).map((item, idx) => (
                        <RecipeIconItem 
                          icon={BaconIcon}
                          text={item}
                        />
                      ))}
                    </S.RecipeIngredientIconContainer>
                  );
                }
                return acc;
              }, [])
            }
            <S.Spacer height='4px'/>
            <S.RecipeInfoText>{foodRecipeState.substan.reduce((pre, cur) => pre+ ", " + cur)}</S.RecipeInfoText>
          </S.RecipeIngredientContainer>

          <S.RecipeIngredientContainer>
            <S.RecipeIngredientText>[ 양념 ]</S.RecipeIngredientText>
            <S.Spacer height='4px'/>
            {
              foodRecipeState.sauce.reduce<JSX.Element[]>((acc, _, index) => {
                // 3개씩 묶어 `S.LikeItemHorizontalContainer`에 담음
                if (index % 3 === 0) {
                  acc.push(
                    <S.RecipeIngredientIconContainer>
                      {foodRecipeState.sauce.slice(index, index + 3).map((item, idx) => (
                        <RecipeIconItem 
                          icon={SaltIcon}
                          text={item.split(":")[0]}
                        />
                      ))}
                    </S.RecipeIngredientIconContainer>
                  );
                }
                return acc;
              }, [])
            }
            <S.Spacer height='4px'/>
            <S.RecipeInfoText>{foodRecipeState.sauce.reduce((pre, cur) => pre+ ", " + cur)}</S.RecipeInfoText>
          </S.RecipeIngredientContainer>

          <S.Spacer height='26px'/>
          <S.RecipeMethodTitleContainer>
            <S.RecipeTitle>조리 방법</S.RecipeTitle>
            <S.RecipeMethodDetailButton onClick={onOpenRecipePager}>자세히 보기</S.RecipeMethodDetailButton>
          </S.RecipeMethodTitleContainer>
          {foodRecipeState.step.map((step, index) => 
            (<S.RecipeTitle>{index+1}.<S.RecipeRecipeMethodText>{step.replace(`${index+1}. `, "")}</S.RecipeRecipeMethodText></S.RecipeTitle>)
          )}

          <S.Spacer height='60px' width="1px"/>
          <div>ㅤ</div>
        </S.RecipeContentContainer>
      </S.RecipeScrollContainer>)}
      
    </S.RecipeContainer>
  )
}



export default RecipeScreen;