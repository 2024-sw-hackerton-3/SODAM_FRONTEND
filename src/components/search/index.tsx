import * as S from "./style"
import BackIcon from '../../assets/image/ic_back.png';
import SearchIcon from '../../assets/image/ic_search.png';
import WarringIcon from '../../assets/image/ic_warring.png';
import { useRef, useState } from "react";
import SearchItem from "./searchItem";
import { useNavigate } from "react-router-dom";


const SearchScreen = () => {

  const navigate = useNavigate();
  const [searchHistory, setSearchHistory] = useState<string[]>(JSON.parse(localStorage.getItem("searchHistory") || "[]").reverse());
  const inputRef = useRef<HTMLInputElement>(null);


  const navigateToSearchResult = (text: string) => {
    
    const history = localStorage.getItem("searchHistory");
    if (history) {
      const historyArray = JSON.parse(history);
      historyArray.push(text);
      localStorage.setItem("searchHistory", JSON.stringify(historyArray));
    } else {
      localStorage.setItem("searchHistory", JSON.stringify([text]));
    }

    navigate(`/searchResult`, { state: text});
  }

  return (
    <S.SearchContainer>
      <S.SearchTopBarContainer>
        <S.SearchBackButtonContainer onClick={() => {navigate("/")}}>
          <S.SearchBackButtonImg src={BackIcon}/>
        </S.SearchBackButtonContainer>
        
        <S.SearchTopBarSearchBar ref={inputRef} placeholder="찾고 싶은 요리를 검색해보세요!"/>
      
        <S.SearchTopBarSearchIconContainer onClick={() => {navigateToSearchResult(inputRef.current!.value)}}>
          <S.SearchTopBarSearchIcon src={SearchIcon}/>
        </S.SearchTopBarSearchIconContainer>
      </S.SearchTopBarContainer>

      <S.SearchContentContainer>
        <S.SearchContentTitleText>최근 검색어</S.SearchContentTitleText>
        <S.SearchContentCategoryContainer>
          {searchHistory.map((item, index) => (<SearchItem onClick={() => {navigateToSearchResult(item)}} item={item}/>))}
        </S.SearchContentCategoryContainer>

        <S.Spacer height="12px"/>
        <S.SearchContentRecommendContaienr>
          <S.SearchContentTitleText>추천 메뉴</S.SearchContentTitleText>
          <S.SearchContentWrarringIcon src={WarringIcon}/>
        </S.SearchContentRecommendContaienr>
        <S.SearchContentCategoryContainer>
          {["부대찌개", "닭강정", "두부 무침", "불고기"].map((item, index) => (<SearchItem onClick={() => {navigateToSearchResult(item)}} item={item}/>))}
        </S.SearchContentCategoryContainer>
      </S.SearchContentContainer>
    </S.SearchContainer>
  )
}



export default SearchScreen;