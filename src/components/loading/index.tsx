import Lottie from "lottie-react";
import * as S from "./style"
import AnimFoodLoading from "../../assets/anim_food_loading.json"



const LoadingScreen = () => {
  return (
    <S.LoadingContainer>
      <S.LoadingLottieContainer>
        <Lottie animationData={AnimFoodLoading}/>
      </S.LoadingLottieContainer>
      <S.LoadingText>레시피 찾는 중</S.LoadingText>
    </S.LoadingContainer>
  )
}

export default LoadingScreen;