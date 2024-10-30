import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import * as S from './style';
import { useState } from 'react';
import CloseIcon from "../../../assets/image/ic_close.png";

interface RecipePagerProps {
  recipeMenus: string[];
  onClose: () => void;
}

interface RecipeMenu {
  description: string;
}


const RecipePager = ({recipeMenus, onClose}: RecipePagerProps) => {


  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = recipeMenus.length; // 전체 페이지 수 설정



  return (
    <S.RecipePagerContainer>
      <S.Spacer height='20px'/>
      <S.RecipePagerContentContainer>
        <Swiper
          style={{ width: '100%', height: '100%' }}
          onSlideChange={(swiper: SwiperClass) => setCurrentPage(swiper.activeIndex + 1)}
          slidesPerView={1}
          loop={false}
        >
          {[...Array(totalPages)].map((_, index) => (
            <SwiperSlide>
              <S.RecipePagerInnerContainer>
                <S.RecipePagerTitleText>STEP {index + 1}/{totalPages}</S.RecipePagerTitleText>
                <S.RecipePagerContentText>{recipeMenus[index]}</S.RecipePagerContentText>
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