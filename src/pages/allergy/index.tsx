import React, { useState } from "react";
import * as S from "./style";
import { ReactComponent as CheckIcon } from "../../assets/image/check.svg"; // 원래 체크 아이콘
import { ReactComponent as CheckIcon2 } from "../../assets/image/check2.svg"; // 새로운 체크 아이콘
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import UserApi from "../../api/user/UserApi";

interface AllergyProps {}

interface AllergyItemState {
  isCheck: boolean;
  enName: string;
  krName: string;
}

const Allergy: React.FC<AllergyProps> = () => {
  const [items, setItems] = useState<AllergyItemState[]>([
    {
      isCheck: false,
      enName: "EGGS",
      krName: "난류"
    },
    {
      isCheck: false,
      enName: "MILK",
      krName: "우유"
    },
    {
      isCheck: false,
      enName: "BUCKWHEAT",
      krName: "메밀"
    },
    {
      isCheck: false,
      enName: "PEANUT",
      krName: "땅콩"
    },
    {
      isCheck: false,
      enName: "SOY",
      krName: "대두"
    },
    {
      isCheck: false,
      enName: "WHEAT",
      krName: "밀"
    },
    {
      isCheck: false,
      enName: "MACKEREL",
      krName: "고등어"
    },
    {
      isCheck: false,
      enName: "CRAB",
      krName: "게"
    },
    {
      isCheck: false,
      enName: "SHRIMP",
      krName: "새우"
    },
    {
      isCheck: false,
      enName: "PORK",
      krName: "돼지고기"
    },
    {
      isCheck: false,
      enName: "PEACH",
      krName: "복숭아"
    },
    {
      isCheck: false,
      enName: "TOMATO",
      krName: "토마토"
    },
    {
      isCheck: false,
      enName: "SULFITES",
      krName: "아황산염"
    },
    {
      isCheck: false,
      enName: "WALNUT",
      krName: "호두"
    },
    {
      isCheck: false,
      enName: "CHICKEN",
      krName: "닭고기"
    },
    {
      isCheck: false,
      enName: "BEEF",
      krName: "소고기"
    },
    {
      isCheck: false,
      enName: "SQUID",
      krName: "오징어"
    },
    {
      isCheck: false,
      enName: "SHELLFISH",
      krName: "조개류"
    },
    {
      isCheck: false,
      enName: "PINE_NUT",
      krName: "잣"
    },
    {
      isCheck: false,
      enName: "NONE",
      krName: "없음"
    },
  ]); // 아이템 리스트
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleClick = (index: number) => {
    setItems(items.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          isCheck: !item.isCheck
        };
      }
      return item;
    }))
  };

  const handle = async () => {
    try {
      await UserApi.patchAllergy(
        items.filter(item => item.isCheck)
        .map(item => item.enName)
      ); // 체크된 아이템들만 필터링하여 API 호출
    } catch (e) {
      alert("알레르기 정보를 저장하는데 실패했습니다.");
      return
    }
    navigate("/"); // like 페이지로 이동
  };

  return (
    <S.LikeContainer>
      <S.Spacer height="43px"/>
      <S.LikeTitleText>알레르기가 있으신가요?</S.LikeTitleText>
      <S.Spacer height="23px"/>
      <S.LikeItemContainer>
        {items.map((item, index) => (
          <S.Item
            key={index}
            onClick={() => handleClick(index)} // 클릭 핸들러
          >
            {item.krName}
            <S.Icon selected={item.isCheck}>
              {item.isCheck ? <CheckIcon2 /> : <CheckIcon />}
            </S.Icon>
          </S.Item>
        ))}
      </S.LikeItemContainer>
      <S.LikeButtonContainer>
        <S.LikeButton onClick={handle}>다음</S.LikeButton>
      </S.LikeButtonContainer>
    </S.LikeContainer>
  );
};

export default Allergy;
