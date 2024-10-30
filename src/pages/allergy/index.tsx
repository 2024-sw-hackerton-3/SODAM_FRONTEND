import React, { useState } from "react";
import * as S from "./style";
import { ReactComponent as CheckIcon } from "../../assets/image/check.svg"; // 원래 체크 아이콘
import { ReactComponent as CheckIcon2 } from "../../assets/image/check2.svg"; // 새로운 체크 아이콘
import { useNavigate } from "react-router-dom"; // useNavigate 추가

interface AllergyProps {}

const Allergy: React.FC<AllergyProps> = () => {
  const items = ["알레르기가 있습니다", "땅콩(견과류)", "대두"]; // 아이템 리스트
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleClick = (index: number) => {
    const newIndex = index === selectedIndex ? null : index; // 선택 해제
    setSelectedIndex(newIndex);
    console.log("Selected Index:", newIndex); // 상태 확인
  };

  const handle = () => {
    navigate("/like"); // like 페이지로 이동
  };

  return (
    <S.Container>
      <S.Header>알레르기가 있으신가요?</S.Header>
      {items.map((item, index) => (
        <S.Item
          key={index}
          onClick={() => handleClick(index)} // 클릭 핸들러
        >
          {item}
          <S.Icon selected={index === selectedIndex}>
            {index === selectedIndex ? <CheckIcon2 /> : <CheckIcon />}
          </S.Icon>
        </S.Item>
      ))}
      <S.Footer>
        <S.Button onClick={handle}>다음</S.Button>
      </S.Footer>
    </S.Container>
  );
};

export default Allergy;
