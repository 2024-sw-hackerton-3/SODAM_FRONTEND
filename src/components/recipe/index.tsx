import * as S from "./style"
import BackIcon from '../../assets/ic_back.png';
import UserIcon from '../../assets/ic_user.png';
import ClockIcon from '../../assets/ic_clock.png';
import BaconIcon from '../../assets/ic_bacon.png';
import SaltIcon from '../../assets/ic_salt.png';
import RecipeIconItem from "./recipeIconItem";
import RecipeIngredeintItem from "./recipeIngredientItem";

const RecipeScreen = () => {

  const recipeImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAV2rUrUswif9EdhpizFtbW1nz2zaA4fU2ww&s";
  return (
    <S.RecipeContainer>
      <S.RecipeTopBarContainer>
        <S.RecipeBackButtonContainer>
          <S.RecipeBackButtonImg src={BackIcon}/>
        </S.RecipeBackButtonContainer>
        <S.RecipeTopBarText>레시피</S.RecipeTopBarText>
      </S.RecipeTopBarContainer>
      <S.RecipeScrollContainer>
        <S.RecipeThumbnail src={recipeImage}/>

        <S.Spacer height='8px'/>
        <S.RecipeContentContainer>
          <S.RecipeTitle>토마토 파스타 만들기</S.RecipeTitle>
          <S.RecipeDescription>손만 있다면 만들 수 있는 토마토 파스타 레시피 입니다.쉽게 도전해보세요.</S.RecipeDescription>

          <S.RecipeInfoContainer>
            <S.Spacer width="60px"/>
            <S.RecipeInfoIcon src={UserIcon}/>
            <S.Spacer width="10px"/>
            <S.RecipeInfoText>2인분</S.RecipeInfoText>
            <S.SpaerMargin/>
            <S.RecipeInfoIcon src={ClockIcon}/>
            <S.Spacer width="10px"/>
            <S.RecipeInfoText>2인분</S.RecipeInfoText>
            <S.Spacer width="60px"/>
          </S.RecipeInfoContainer>

          <S.Spacer height='26px'/>
          <S.RecipeTitle>재료</S.RecipeTitle>
          <S.RecipeIngredientContainer>
            <S.RecipeIngredientText>[ 재료 ]</S.RecipeIngredientText>
            <S.Spacer height='4px'/>
            <S.RecipeIngredientIconContainer>
              <RecipeIconItem icon={BaconIcon} text="베이컨"/>
              <RecipeIconItem icon={SaltIcon} text="소금"/>
              <RecipeIconItem icon={SaltIcon} text="후추"/>
            </S.RecipeIngredientIconContainer>

            <S.Spacer height='4px'/>
            <RecipeIngredeintItem text="토마토 페이스트" amount="4스푼"/>
            <S.Divider width="100%" height="1px"/>
            <RecipeIngredeintItem text="토마토 페이스트" amount="4스푼"/>
            <S.Divider width="100%" height="1px"/>
            <RecipeIngredeintItem text="토마토 페이스트" amount="4스푼"/>
          </S.RecipeIngredientContainer>

          <S.RecipeIngredientContainer>
            <S.RecipeIngredientText>[ 양념 ]</S.RecipeIngredientText>
            <S.Spacer height='4px'/>
            <S.RecipeIngredientIconContainer>
              <RecipeIconItem icon={BaconIcon} text="베이컨"/>
              <RecipeIconItem icon={SaltIcon} text="소금"/>
              <RecipeIconItem icon={SaltIcon} text="후추"/>
            </S.RecipeIngredientIconContainer>

            <S.Spacer height='4px'/>
            <RecipeIngredeintItem text="토마토 페이스트" amount="4스푼"/>
            <S.Divider width="100%" height="1px"/>
            <RecipeIngredeintItem text="토마토 페이스트" amount="4스푼"/>
            <S.Divider width="100%" height="1px"/>
            <RecipeIngredeintItem text="토마토 페이스트" amount="4스푼"/>
          </S.RecipeIngredientContainer>

          <S.Spacer height='26px'/>
          <S.RecipeTitle>조리 방법</S.RecipeTitle>
          <S.RecipeTitle>
            1.
            <S.RecipeRecipeMethodText>파스타 생면을 물이 펄펄 끓을 때 투하합니다. (바로 다음단계를 동시에 진행해주세요.)</S.RecipeRecipeMethodText>
          </S.RecipeTitle>

          <S.RecipeTitle>
            2.
            <S.RecipeRecipeMethodText>후라이펜 베이컨이 익을 때 까지 기다립니다.</S.RecipeRecipeMethodText>
          </S.RecipeTitle>

          <S.RecipeTitle>
            3.
            <S.RecipeRecipeMethodText>토마토 페이스트를 후라이펜에 붙고 파스타 생면을 건져, 같이 익힙니다.</S.RecipeRecipeMethodText>
          </S.RecipeTitle>

          <S.Spacer height='60px' width="1px"/>
          <div>ㅤ</div>
        </S.RecipeContentContainer>
      </S.RecipeScrollContainer>
    </S.RecipeContainer>
  )
}



export default RecipeScreen;