import { useState } from "react";
import * as S from "./style";
import Input from "../../components/input";
import Back from "../../assets/image/back.svg";
import { useNavigate } from "react-router-dom";
import UserApi from "../../api/user/UserApi";
import { saveToken } from "../../api/saveToken";

const SingUp = () => {
  const navigate = useNavigate();
  const loginText = "소담에 오신 것을\n 진심으로 환영합니다.";
  const [input, setInput] = useState({
    name: "",
    userid: "",
    password: "",
    passwordCheck: "",
  });

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSignUp = async () => {
    if (input.name === "") {
      alert("이름을 입력해주세요.");
      return;
    }
    if (input.userid === "") {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (input.password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (input.passwordCheck === "") {
      alert("비밀번호를 재입력해주세요.");
      return;
    }

    if (input.password !== input.passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      // const response = await UserApi.postSignUp(input.name, input.userid, input.password)
      // saveToken(response.access_token)
      // navigate("/")
      navigate("/like", { state: { name: input.name, userid: input.userid, password: input.password } });
    } catch (error) {
      alert("회원가입에 실패했습니다.")
    }
  }

  return (
    <S.Layout>
      <S.Header>
        <S.Back src={Back} alt="뒤로가기" />
      </S.Header>
      <S.Title>{loginText}</S.Title>
      <S.InputContainer>
        <Input
          value={input.name}
          name="name"
          title="이름"
          placeholder="이름을 입력해주세요"
          onChange={handleInputValue}
        />
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
        <Input
          value={input.passwordCheck}
          name="passwordCheck"
          title="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력해주세요"
          onChange={handleInputValue}
          type="passwordCheck"
        />
      </S.InputContainer>
      <S.LoginButton
        onClick={onClickSignUp}
      >
        다음
      </S.LoginButton>
    </S.Layout>
  );
};

export default SingUp;
