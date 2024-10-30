import styled from "styled-components";
import theme from "../../styles/theme";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.background};
  padding: 16px;
  box-sizing: border-box;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 93%;
  height: 40px;
  padding: 0 2% 0 5%;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.gray300};
  margin-bottom: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Search = styled.div`
  font-family: "pretendard-Regular";
  font-size: 14px;
  color: ${theme.gray700};
`;

export const SearchSm = styled.div`
  padding: 6px 8px;
  display: flex;
  align-items: center;
`;

export const Section = styled.div`
  position: relative;
`;

export const SectionTitle = styled.h2`
  font-family: "pretendard-Bold";
  font-size: 18px;
`;

export const MenuImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const MenuLabel = styled.div`
  position: absolute;
  font-family: "pretendard-Bold";
  font-size: 20px;
  bottom: 40px;
  color: ${theme.white};
  left: 16px;
`;

export const MenuDescription = styled.div`
  position: absolute;
  font-family: "pretendard-Medium";
  font-size: 16px;
  bottom: 20px;
  left: 16px;
  color: ${theme.gray500};
`;

export const SectionBox = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 8px;
  padding-bottom: 8px;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TrendList = styled.div`
  display: flex;
  gap: 8px;
`;

export const TrendItem = styled.div`
  display: flex;
  background-color: ${theme.white};
  border-radius: 16px;
  padding: 12px;
  width: 160px;
  height: 48px;
  align-items: center;
  gap: 8px;
`;

export const TrendNumber = styled.div`
  font-family: "pretendard-Bold";
  font-size: 18px;
  color: ${theme.gray600};
  margin-right: 8px;
`;

export const TrendContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TrendImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
`;

export const TrendText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrendLabel = styled.div`
  font-family: "pretendard-Bold";
  font-size: 14px;
  margin-bottom: 2px;
`;

export const TrendDescription = styled.div`
  font-family: "pretendard-Regular";
  font-size: 12px;
  color: ${theme.gray500};
`;

export const Functions = styled.div`
  display: flex;
  font-family: "pretendard-SemiBold";
  font-size: 20px;
  margin: 24px 0;
`;

export const FunctionBoxContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const FunctionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 182px;
  height: 65px;
  border-radius: 12px;
  background-color: ${theme.white};
  align-items: flex-start;
  padding: 12px;
  cursor: pointer;
`;

export const FunctionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FunctionImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const FunctionTitle = styled.h4`
  font-family: "pretendard-Bold";
  font-size: 16px;
  color: ${theme.gray800};
  margin: 0;
  text-align: left;
`;

export const FunctionContent = styled.p`
  font-family: "pretendard-Regular";
  font-size: 14px;
  color: ${theme.gray600};
  white-space: pre-line;
  text-align: left;
  margin-top: 2px;
`;


export const Spacer = styled.div<{ width?: string, height?: string }>`
  width: ${props => props.width || '0px'};
  height: ${props => props.height || '0px'};
`