import * as S from "./style"
import BackIcon from "../../assets/image/ic_back.png";
import LikeItem from "./likeItem";
import { useState } from "react";

interface LikeItemProps {
  id: number;
  src: string;
  title: string;
  isSelect: Boolean,
}

const LikeScreen = () => {
  const [testItems, setTestItems] = useState<LikeItemProps[]>([
    {
      id: 1,
      src: "https://i.namu.wiki/i/8drgvI-cQLUfJDC00zbl2ZolK4W3o4ZkVSpR-zM5FZk_QzT58vYnx_7ohk0qwGYYiSLPiZgwccyIEFUtYKDjUQ.webp",
      title: "김치찌개",
      isSelect: false,
    },
    {
      id: 2,
      src: "https://art.whisk.com/image/upload/fl_progressive,h_560,w_560,c_fill,dpr_2.0/v1692889848/v3/user-recipes/20e0e747323f97deef24c9c983b8257b.jpg",
      title: "된장찌개",
      isSelect: false,
    },
    {
      id: 3,
      src: "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/01/cbdcad39283af740afd0e08f97849c7c1.jpg",
      title: "순두부찌개",
      isSelect: false,
    },
    {
      id: 4,
      src: "https://i.namu.wiki/i/dgjXU86ae29hDSCza-L0GZlFt3T9lRx1Ug9cKtqWSzMzs7Cd0CN2SzyLFEJcHVFviKcxAlIwxcllT9s2sck0RA.jpg",
      title: "비빔밥",
      isSelect: false,
    },
    {
      id: 5,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Korean.food-Bibimbap-02.jpg/1200px-Korean.food-Bibimbap-02.jpg",
      title: "돌솥비빔밥",
      isSelect: false,
    },
    {
      id: 6,
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Gimbap_%28pixabay%29.jpg",
      title: "김밥",
      isSelect: false,
    },
    {
      id: 7,
      src: "https://recipe1.ezmember.co.kr/cache/recipe/2022/03/13/14eaa9f7286f13e402a12aec4178bf2c1.jpg",
      title: "칼국수",
      isSelect: false,
    },
    {
      id: 8,
      src: "https://tohomeimage.thehyundai.com/PD/PDImages/S/9/3/5/8809645740539_00.jpg?RS=720x864",
      title: "냉면",
      isSelect: false,
    },
    {
      id: 9,
      src: "https://ottogi.okitchen.co.kr/pds/upfile/2020-08-20_620177542[4].jpg",
      title: "잔치국수",
      isSelect: false,
    },
    {
      id: 10,
      src: "https://i.namu.wiki/i/-vMvKRJlY0tB9nw0rLEYsT0u8Dzv9mq9x2mAyc2gp8sJOOEUaasTPUPmQlCentQ8hlked3nek-EFY2aLnWCo9Q.webp",
      title: "호떡",
      isSelect: false,
    },
    {
      id: 11,
      src: "https://static.wtable.co.kr/image/production/service/recipe/634/712d44b4-775f-4002-b473-a737762fb445.jpg?size=800x800",
      title: "팥빙수",
      isSelect: false,
    },
    {
      id: 12,
      src: "https://i.namu.wiki/i/9-xDKp6dekOL5WK2-tjFfhuQtP5eNNfRyn7voaKbj8MW7sa4tbWs4VkAHa6FaDf1_7PVqUMulyHeLo0_FSBbpg.webp",
      title: "떡",
      isSelect: false,
    },
    {
      id: 13,
      src: "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/099862a72ddaecfbdb39715f965286cf1.jpg",
      title: "미나리무침",
      isSelect: false,
    },
    {
      id: 14,
      src: "https://recipe1.ezmember.co.kr/cache/recipe/2018/09/06/fd90bc74ddb4580b2dad22c83b42ec6f1.jpg",
      title: "콩나물무침",
      isSelect: false,
    },
    {
      id: 15,
      src: "https://recipe1.ezmember.co.kr/cache/recipe/2023/09/16/7dbb36575d7f1d26346f794f3af0d2de1.jpg",
      title: "잡채",
      isSelect: false,
    },
    {
      id: 16,
      src: "https://i.namu.wiki/i/1fMv9BlDolXCcO2TlBW0zuV14FbmYAQf71zBGjY8RvtoP3x-zDBo0jiQxy4gdQ8ipfOqa9NNgGc5AOPVfRHlzQ.webp",
      title: "불고기",
      isSelect: false,
    },
    {
      id: 17,
      src: "https://i.namu.wiki/i/vihx_Z00oit9tpfHTWPq99drxtNjKlBfxoIxaRbkM8-fPpw50O9y6LIB3SZfYH_AoU6VcWfQ5e-FUsXeRiisGA.webp",
      title: "고등어구이",
      isSelect: false,
    },
    {
      id: 18,
      src: "https://i.namu.wiki/i/oFHlYDjoEh8f-cc3lNK9jAemRkbXxNGwUg7XiW5LGS6DF1P2x8GCeNQxbQhVIwtUS1u53YPw-uoyqpmLtrGNJA.webp",
      title: "삼겹살",
      isSelect: false,
    },
    {
      id: 19,
      src: "https://i.namu.wiki/i/z-jc70uRle0yJ0limzUKV20mzyPjgytslSSHpOhCt0xYi4gx693sETt2YNzWit8MVNfRMIWnWGIWA8DYu0f0kg.webp",
      title: "튀김",
      isSelect: false,
    },
    {
      id: 20,
      src: "https://i.namu.wiki/i/6xYbbxwoWYs1HMi2lDKWC4Wdq7hCCRmp-m-_YfCBnCdPcJK7D67kT87qqiFtZws5lRw5aWH_B18VoCbI6qXd_Q.webp",
      title: "치킨",
      isSelect: false,
    },
    {
      id: 21,
      src: "https://i.namu.wiki/i/y74GAJ3lo1kD8QNfVBPnEGxiORaDSJLhGRVWSnl7lDHbtgOanLVgkh_7-GrxxuidO0E8dQ8r7VZ_C19rd_ETgg.webp",
      title: "강정",
      isSelect: false,
    },
  ])

  const onClickLikeItem = (id: number) => {
    setTestItems(testItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isSelect: !item.isSelect
        }
      }
      return item;
    }))
  }

  return (
    <S.LikeContainer>
      <S.LikeTopBarContainer>
        <S.LikeBackButtonContainer>
          <S.LikeBackButtonImg src={BackIcon}/>
        </S.LikeBackButtonContainer>
      </S.LikeTopBarContainer>
      <S.Spacer height="41px"/>
      <S.LikeTitleText>취향에 맞는 음식을 골라주세요</S.LikeTitleText>
      <S.Spacer height="24px"/>

      <S.LikeItemContainer>
        {
          testItems.reduce<JSX.Element[]>((acc, _, index) => {
            // 3개씩 묶어 `S.LikeItemHorizontalContainer`에 담음
            if (index % 3 === 0) {
              acc.push(
                <S.LikeItemHorizontalContainer>
                  {testItems.slice(index, index + 3).map((item, idx) => (
                    <LikeItem 
                      key={idx} 
                      src={item.src} 
                      title={item.title} 
                      isSelect={item.isSelect} 
                      onClick={() => {
                        onClickLikeItem(item.id)
                      }}
                    />
                  ))}
                </S.LikeItemHorizontalContainer>
              );
            }
            return acc;
          }, [])
        }
        
      </S.LikeItemContainer>
      <S.LikeButtonContainer>
        <S.LikeButton>회원가입 완료하기</S.LikeButton>
      </S.LikeButtonContainer>
    </S.LikeContainer>
  )
}



export default LikeScreen;