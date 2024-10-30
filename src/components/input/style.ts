import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 14px;
  color: #ff6b00;
  margin-bottom: 4px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 8px 0;
  font-size: 16px;
  border: none;
  outline: none;

  &::placeholder {
    color: #999;
  }
`;

export const Underline = styled.div<{ active: boolean }>`
  height: 2px;
  width: 100%;
  background-color: ${({ active }) => (active ? "#ff6b00" : "#ccc")};
  margin-top: 4px;
  transition: background-color 0.3s ease;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
`;
