import * as S from "./style";
import Header from "../../components/header";
import SearchSm from "../../assets/image/search.svg";
import MenuImage from "../../assets/image/menu.png";
import Camera from "../../assets/image/camera.svg";
import Rice from "../../assets/image/rice.svg";

const Home = () => {
  const functions = [
    {
      img: Camera,
      title: "이 음식 모징?",
      content: "사진 한장으로 원하는\n레시피를 얻을 수 있어요.",
    },
    {
      img: Rice,
      title: "배달주문하기",
      content: "현재 없는 재료를\n주문하세요.",
    },
  ];

  return (
    <div>
      <Header />
      <S.Layout>
        <S.SearchContainer>
          <S.Search>소담에서 검색하세요!</S.Search>
          <S.SearchSm>
            <img src={SearchSm} alt="검색" />
          </S.SearchSm>
        </S.SearchContainer>
        <S.Section>
          <S.SectionTitle>오늘의 메뉴는 이거닷!</S.SectionTitle>
          <S.MenuImage src={MenuImage} alt="메뉴 이미지" />
          <S.MenuLabel>토마토 파스타</S.MenuLabel>
          <S.MenuDescription>2인분 | 10분</S.MenuDescription>
        </S.Section>
        <S.Section>
          <S.SectionTitle>실시간 트렌드</S.SectionTitle>
          <S.SectionBox>
            <S.TrendList>
              {Array.from({ length: 5 }, (_, i) => (
                <S.TrendItem key={i}>
                  <S.TrendNumber>{i + 1}</S.TrendNumber>
                  <S.TrendContent>
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
            <S.FunctionBox key={index}>
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
                      <S.TrendLabel>[삼립]</S.TrendLabel>
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
