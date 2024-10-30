import { useState } from "react";
import * as S from "./style";

interface InputProps {
  title: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input = ({
  title,
  placeholder,
  name,
  value,
  onChange,
  type = "text",
}: InputProps) => {
  const [active, setActive] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setActive(e.target.value !== ""); // 입력 중일 때만 active 상태로 설정
  };

  return (
    <S.Layout>
      <S.Title>{title}</S.Title>
      <S.InputWrapper>
        <S.InputField
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          value={value}
          name={name}
          onChange={handleInputChange}
        />
        {value && (
          <S.ClearButton
            onClick={() =>
              onChange({
                target: { name, value: "" },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          >
            ×
          </S.ClearButton>
        )}
      </S.InputWrapper>
      <S.Underline active={active} />
    </S.Layout>
  );
};

export default Input;
