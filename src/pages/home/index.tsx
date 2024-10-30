import * as S from "./style";
import Header from "../../components/header";
import SearchSm from "../../assets/image/search.svg";
import MenuImage from "../../assets/image/menu.png";
import Camera from "../../assets/image/camera.svg";
import Rice from "../../assets/image/rice.svg";
import { ReactComponent as First} from "../../assets/image/ic_first.svg";
import { ReactComponent as Second} from "../../assets/image/ic_second.svg";
import { ReactComponent as Third} from "../../assets/image/ic_third.svg";
import { useEffect, useState } from "react";
import UserApi from "../../api/user/UserApi";
import UserSuggestionFoodResponse from "../../api/user/UserSuggestionFoodResponse";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [suggestionFood, setSuggestionFood] = useState<UserSuggestionFoodResponse[]>([]);
  const functions = [
    {
      img: Camera,
      title: "이 음식 모징?",
      content: "사진 한장으로 원하는\n레시피를 얻을 수 있어요.",
      route: "/camera",
    },
    {
      img: Rice,
      title: "주문하기",
      content: "현재 없는 재료를\n주문하세요.",
      route: "/order",
    },
  ];
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await UserApi.getSuggestionFood()
        setSuggestionFood(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <Header />
      <S.Layout>
        <S.SearchContainer onClick={() => {
          navigate("/search");
        }}>
          <S.Search>소담에서 검색하세요!</S.Search>
          <S.SearchSm>
            <img src={SearchSm} alt="검색" />
          </S.SearchSm>
        </S.SearchContainer>
        <S.Section>
          <S.SectionTitle>오늘의 메뉴는 이거닷!</S.SectionTitle>

          {/* 시간 관계상 pager 생략 */}
          {suggestionFood.length > 0 && (
            <S.Section>
              <S.MenuImage src={MenuImage} alt="메뉴 이미지" />
              <S.MenuLabel>토마토 파스타</S.MenuLabel>
              <S.MenuDescription>2인분 | 10분</S.MenuDescription>
            </S.Section>
          )}
        </S.Section>
        <S.Section>
          <S.SectionTitle>실시간 트렌드</S.SectionTitle>
          <S.SectionBox>
            <S.TrendList>
              {Array.from({ length: 3 }, (_, i) => (
                <S.TrendItem key={i}>
                  <S.TrendContent>
                    {i == 0 && <First />}
                    {i == 1 && <Second />}
                    {i == 2 && <Third />}
                    <S.Spacer width="4px"/>
                    <S.TrendImage src={MenuImage} alt={`트렌드 ${i + 1}`} />
                    <S.TrendText>
                      <S.TrendLabel>토마토 파스타</S.TrendLabel>
                      <S.TrendDescription>2인분 | 10분</S.TrendDescription>
                    </S.TrendText>
                  </S.TrendContent>
                </S.TrendItem>
              ))}
            </S.TrendList>
          </S.SectionBox>
        </S.Section>
        <S.Functions>이런 기능도 사용해보세요!</S.Functions>
        <S.FunctionBoxContainer>
          {functions.map((func, index) => (
            <S.FunctionBox key={index} onClick={() => {
              navigate(func.route);
            }}>
              <S.FunctionHeader>
                <S.FunctionImage src={func.img} alt={func.title} />
                <S.FunctionTitle>{func.title}</S.FunctionTitle>
              </S.FunctionHeader>
              <S.FunctionContent>{func.content}</S.FunctionContent>
            </S.FunctionBox>
          ))}
        </S.FunctionBoxContainer>
        <S.Section>
          <S.SectionTitle>이런 간편한 식사 준비는 어떠세요?</S.SectionTitle>
          <S.SectionBox>
            <S.TrendList>
              {Array.from({ length: 5 }, (_, i) => (
                <S.TrendItem key={i}>
                  <S.TrendNumber>{i + 1}</S.TrendNumber>
                  <S.TrendContent>
                    <S.TrendImage src={MenuImage} alt={`밀키트 ${i + 1}`} />
                    <S.TrendText>
                      <S.TrendLabel>[삼립] 밀키트</S.TrendLabel>
                      <S.TrendDescription>6,500원</S.TrendDescription>
                    </S.TrendText>
                  </S.TrendContent>
                </S.TrendItem>
              ))}
            </S.TrendList>
          </S.SectionBox>
        </S.Section>
      </S.Layout>
    </div>
  );
};

export default Home;
