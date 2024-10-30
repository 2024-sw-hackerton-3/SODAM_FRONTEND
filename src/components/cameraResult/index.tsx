import * as S from './style';
import BackIcon from '../../assets/ic_back.png';
import CameraResultItem from './cameraResultItem';


const CameraResultScreen = () => {


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
        <S.CameraResultSearchText>토마토 파스타로 추론하고 검색된 결과에요.</S.CameraResultSearchText>
        <S.Spacer height='8px' />
        {[1, 2, 3, 4, 5, 2, 2, 2, 2, 2, 3, 3, 3].map((_, index) => (
          <CameraResultItem key={index} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAV2rUrUswif9EdhpizFtbW1nz2zaA4fU2ww&s"} title='토마토 파스타' description='이미지를 통해 추론된 결과입니다.' caption='2인분 · 10분' />
        ))}
      </S.CameraResultContentContainer>
    </S.CameraResultContainer>
  )
};

export default CameraResultScreen;