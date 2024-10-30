import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import * as S from './style';
import { useState } from 'react';
import CloseIcon from "../../../assets/ic_close.png";

interface RecipePagerProps {
  onClose: () => void;
}

interface RecipeMenu {
  description: string;
}


const RecipePager = ({onClose}: RecipePagerProps) => {

  const [recipeMenus, setRecipeMenus] = useState<RecipeMenu[]>([
    {
      description: "1. 파스타 생면을 물이 펄펄 끓을 때 투하합니다. (바로 다음단계를 동시에 진행해주세요.)"
    },
    {
      description: "2. 후라이펜 베이컨이 익을 때 까지 기다립니다."
    },
    {
      description: "3. 토마토 페이스트를 후라이펜에 붙고 파스타 생면을 건져, 같이 익힙니다."
    },
    {
      description: "3. 맛있게 만들어진 파스타를 욤뇸뇸합니다."
    },
  ])

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = recipeMenus.length; // 전체 페이지 수 설정



  return (
    <S.RecipePagerContainer>
      <S.RecipePagerContentContainer>
        <Swiper
          style={{ width: '100%', height: '100%' }}
          onSlideChange={(swiper: SwiperClass) => setCurrentPage(swiper.activeIndex + 1)}
          slidesPerView={1}
          loop={false}
        >
          {[...Array(totalPages)].map((_, index) => (
            <SwiperSlide key={index}>
              <S.RecipePagerInnerContainer>
                <S.RecipePagerTitleText>STEP {currentPage}/{totalPages}</S.RecipePagerTitleText>
                <S.RecipePagerContentText>{recipeMenus[index].description}</S.RecipePagerContentText>
              </S.RecipePagerInnerContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.RecipePagerContentContainer>

      <S.RecipePagerExitButton onClick={onClose}>
        <S.RecipePagerExitImage src={CloseIcon} alt="exit" />
      </S.RecipePagerExitButton>

        <S.RecipePagerIndicatorContainer>
          <S.RecipePagerIndicatorFlexContainer>
            <S.RecipePagerIndicatorText color='#FE4E26'>{currentPage}</S.RecipePagerIndicatorText>
            <S.RecipePagerIndicatorText>
              / {totalPages}
            </S.RecipePagerIndicatorText>
          </S.RecipePagerIndicatorFlexContainer>
        </S.RecipePagerIndicatorContainer>
    </S.RecipePagerContainer>
  );
}


export default RecipePager;