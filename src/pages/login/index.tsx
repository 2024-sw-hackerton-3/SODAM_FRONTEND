import { useState } from "react";
import * as S from "./style";
import Input from "../../components/input";
import Back from "../../assets/image/back.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginText = "아이디와 비밀번호를\n 입력해주세요!";
  const [input, setInput] = useState({
    userid: "",
    password: "",
  });

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <S.Layout>
      <S.Header>
        <S.Back src={Back} alt="뒤로가기" />
      </S.Header>
      <S.Title>{loginText}</S.Title>
      <S.InputContainer>
        <Input
          value={input.userid}
          name="userid"
          title="아이디"
          placeholder="아이디를 입력해주세요"
          onChange={handleInputValue}
        />
        <Input
          value={input.password}
          name="password"
          title="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleInputValue}
          type="password"
        />
      </S.InputContainer>
      <S.LoginButton
        onClick={() => {
          navigate(`/`);
        }}
      >
        로그인
      </S.LoginButton>
    </S.Layout>
  );
};

export default Login;
