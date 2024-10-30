import * as S from "./style"
import BackIcon from '../../assets/ic_back.png';
import SearchIcon from '../../assets/ic_search.png';
import WarringIcon from '../../assets/ic_warring.png';
import { useRef } from "react";
import SearchItem from "./searchItem";


const SearchScreen = () => {

  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <S.SearchContainer>
      <S.SearchTopBarContainer>
        <S.SearchBackButtonContainer>
          <S.SearchBackButtonImg src={BackIcon}/>
        </S.SearchBackButtonContainer>
        
        <S.SearchTopBarSearchBar ref={inputRef} placeholder="대전왔는데 그대로 다시 대구가기~"/>
      
        <S.SearchTopBarSearchIconContainer>
          <S.SearchTopBarSearchIcon src={SearchIcon}/>
        </S.SearchTopBarSearchIconContainer>
      </S.SearchTopBarContainer>

      <S.SearchContentContainer>
        <S.SearchContentTitleText>최근 검색어</S.SearchContentTitleText>
        <S.SearchContentCategoryContainer>
          {[1, 2, 3, 4, 5, 2, 2, 2, 2, 2, 3, 3, 3].map((_, index) => (<SearchItem item="탕후루"/>))}
        </S.SearchContentCategoryContainer>

        <S.Spacer height="12px"/>
        <S.SearchContentRecommendContaienr>
          <S.SearchContentTitleText>추천 메뉴</S.SearchContentTitleText>
          <S.SearchContentWrarringIcon src={WarringIcon}/>
        </S.SearchContentRecommendContaienr>
        <S.SearchContentCategoryContainer>
          {[1, 2, 3, 4, 5, 2, 2, 2, 2, 2, 3, 3, 3].map((_, index) => (<SearchItem item="탕후루"/>))}
        </S.SearchContentCategoryContainer>
      </S.SearchContentContainer>
    </S.SearchContainer>
  )
}



export default SearchScreen;