import * as S from './style';
import BackIcon from '../../assets/image/ic_back.png';
import CameraResultItem from '../resultItem';
import { useRecoilState } from 'recoil';
import { FoodRecipeState } from '../../state/state';


const CameraResultScreen = () => {

  const foodRecipeState = useRecoilState(FoodRecipeState)[0];

  return (
    <S.CameraResultContainer>
      <S.CameraResultTopBarContainer>
        <S.CameraResultBackButtonContainer>
          <S.CameraResultBackButtonImg src={BackIcon} alt='back' />
        </S.CameraResultBackButtonContainer>
        <S.CameraResultTopBarText>결과</S.CameraResultTopBarText>
      </S.CameraResultTopBarContainer>
      <S.CameraResultContentContainer>
        <S.Spacer height='8px' />
        <S.CameraResultSearchText>{`${foodRecipeState.name}(으)로 추론하고 검색된 결과에요.`}</S.CameraResultSearchText>
        <S.Spacer height='8px' />
        <S.CameraResultSuggestionText>이런 밀키트는 어떠세요?</S.CameraResultSuggestionText>
        {[1].map((_, index) => (
          <CameraResultItem key={index} src={"https://img.danawa.com/prod_img/500000/891/318/img/17318891_1.jpg?_v=20230912093927&shrink=360:360"} title='사골 칼국수' description='(주) 삼립에서 제공하는 맛있는 사골 칼국수에요.' caption='2인분 · 6800￦' />
        ))}
        <S.CameraResultSuggestionText>검색결과</S.CameraResultSuggestionText>
        {[1].map((_, index) => (
          <CameraResultItem key={index} src={"https://img.danawa.com/prod_img/500000/891/318/img/17318891_1.jpg?_v=20230912093927&shrink=360:360"} title={foodRecipeState.name} description={foodRecipeState.name} caption={`${foodRecipeState.qnt} · ${foodRecipeState.cookingTime}`} warring={foodRecipeState.danger? '알레르기 주의': undefined} />
        ))}


      </S.CameraResultContentContainer>
    </S.CameraResultContainer>
  )
};

export default CameraResultScreen;