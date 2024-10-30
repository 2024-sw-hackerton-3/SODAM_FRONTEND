import * as S from "./style"
import BackIcon from '../../assets/image/ic_back.png';
import SearchIcon from '../../assets/image/ic_search.png';
import { useEffect, useRef, useState } from "react";
import ResultItem from "../resultItem";
import { useLocation, useNavigate } from "react-router-dom";
import FoodApi from "../../api/food/FoodApi";
import FoodSuggestionFoodResponse from "../../api/food/FoodSuggestionFoodResponse";
import LoadingScreen from "../loading";
import { FoodRecipeState } from "../../state/state";
import { useSetRecoilState } from "recoil";

const SearchResultScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchItems, setSearchItems] = useState<FoodSuggestionFoodResponse[]>([]);
  const setFoodRecipeState = useSetRecoilState(FoodRecipeState);

  async function fetchData(text: string) {
    try {
      const response = await FoodApi.getFoodQueryText(text);
      setSearchItems(response);
    } catch (error) {
      alert("검색 결과를 불러오는데 실패했습니다.");
    }
  }

  const onClickItem = async (item: FoodSuggestionFoodResponse) => {
    setIsLoading(true);
    try {
      const response = await FoodApi.getFoodDetail(item.koName, item.cookingTime, item.qnt);
      setFoodRecipeState(response);
      navigate("/recipe");
    } catch (error) {
      alert("상세 정보를 불러오는데 실패했습니다.");
    }
    setIsLoading(false);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = location.state; // 원하는 기본값 설정
    }
    
    fetchData(location.state);
  }, []);

  return (
    <S.SearchResultContainer>
      {isLoading && (
        <LoadingScreen/>
      )}
      <S.SearchResultTopBarContainer>
        <S.SearchResultBackButtonContainer onClick={() => {navigate("/search")}}>
          <S.SearchResultBackButtonImg src={BackIcon}/>
        </S.SearchResultBackButtonContainer>
        
        <S.SearchResultTopBarSearchBar ref={inputRef} placeholder=""/>
      
        <S.SearchResultTopBarSearchIconContainer onClick={() => {
          fetchData(inputRef.current!.value);
        }}>
          <S.SearchResultTopBarSearchIcon src={SearchIcon}/>
        </S.SearchResultTopBarSearchIconContainer>
      </S.SearchResultTopBarContainer>

      <S.Spacer height="24px"/>
      {searchItems.length === 0 && <S.SearchResultEmptyText>검색 결과가 없습니다.</S.SearchResultEmptyText>}
      <S.SearchResultContentContainer>
        {searchItems.map((item, index) => (
          <ResultItem onClick={() => {onClickItem(item)}} key={index} src={item.image} title={item.koName} description={item.summary} caption={`${item.qnt} · ${item.cookingTime}`} />
        ))}
      </S.SearchResultContentContainer>

    </S.SearchResultContainer>
  )
}

export default SearchResultScreen;