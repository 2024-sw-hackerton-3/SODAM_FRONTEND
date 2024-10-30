import React, { useState } from "react";
import * as S from "./style";
import { ReactComponent as CheckIcon } from "../../assets/image/check.svg"; // Adjust path if necessary

interface AllergyProps {}

const Allergy: React.FC<AllergyProps> = () => {
  const items = ["알류/가금류", "알류/가금류", "땅콩(견과류)", "대두"];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <S.Container>
      <S.Header>알레르기가 있으신가요?</S.Header>
      {items.map((item, index) => (
        <S.Item
          key={index}
          onClick={() =>
            setSelectedIndex(index === selectedIndex ? null : index)
          }
        >
          {item}
          <S.Icon selected={index === selectedIndex}>
            <CheckIcon />
          </S.Icon>
        </S.Item>
      ))}
      <S.Footer>
        <S.Button onClick={() => console.log("Next step!")}>다음</S.Button>
      </S.Footer>
    </S.Container>
  );
};

export default Allergy;
