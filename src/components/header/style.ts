import styled from "styled-components";
import { theme } from "../../styles";

export const Layout = styled.div`
  display: flex;
  background-color: ${theme.background};
  width: 100vw;
  height: 55px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  font-family: "Mungyeong Gamhong Apple";
  font-size: 20px;
  padding: 0 6%;
`;

export const Alarm = styled.div`
  display: flex;
  padding: 0 6%;
`;
