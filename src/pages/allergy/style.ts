import styled from "styled-components";

// Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
`;

// Header
export const Header = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
`;

// Item styling with fixed text color
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #d9d9d9;
  color: #000;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

// Icon style to change SVG color based on selection
export const Icon = styled.div<{ selected: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ selected }) =>
      selected ? "#ff5722" : "#a5a5a5"}; // Adjust SVG color based on selection
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
