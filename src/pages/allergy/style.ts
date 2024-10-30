import styled from "styled-components";

// Container
export const Container = styled.div`
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const Header = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

export const Icon = styled.div<{ selected: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ selected }) => (selected ? "#ff5722" : "#a5a5a5")}; // 색상 변경
    width: 100%;
    height: 100%;
  }
`;

// Footer
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// Button styling
export const Button = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #ff5722;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;
