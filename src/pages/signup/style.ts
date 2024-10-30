import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 6%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10% 0;
`;

export const Back = styled.img`
  width: 24px;
  height: 24px;
`;

export const Title = styled.p`
  font-size: 24px;
  white-space: pre-line;
  font-family: "pretendard-Medium";
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #ff6b00;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  font-size: 16px;
  &:focus {
    border-bottom-color: #ff6b00;
  }
  &:focus + label {
    color: #ff6b00;
  }
`;
