import * as S from "./style"
import BackIcon from '../../assets/ic_back.png';
import SearchIcon from '../../assets/ic_search.png';
import { useEffect, useRef } from "react";
import ResultItem from "../resultItem";

const SearchResultScreen = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "기본값 예시 텍스트"; // 원하는 기본값 설정
    }
  }, []);

  return (
    <S.SearchResultContainer>
      <S.SearchResultTopBarContainer>
        <S.SearchResultBackButtonContainer>
          <S.SearchResultBackButtonImg src={BackIcon}/>
        </S.SearchResultBackButtonContainer>
        
        <S.SearchResultTopBarSearchBar ref={inputRef} placeholder="대전왔는데 그대로 다시 대구가기~"/>
      
        <S.SearchResultTopBarSearchIconContainer>
          <S.SearchResultTopBarSearchIcon src={SearchIcon}/>
        </S.SearchResultTopBarSearchIconContainer>
      </S.SearchResultTopBarContainer>

      <S.Spacer height="24px"/>
      <S.SearchResultContentContainer>
        {[1, 2, 3, 4, 5, 2, 2, 2, 2, 2, 3, 3, 3].map((_, index) => (
          <ResultItem key={index} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAV2rUrUswif9EdhpizFtbW1nz2zaA4fU2ww&s"} title='토마토 파스타' description='이미지를 통해 추론된 결과입니다.' caption='2인분 · 10분' />
        ))}
      </S.SearchResultContentContainer>

    </S.SearchResultContainer>
  )
}

export default SearchResultScreen;