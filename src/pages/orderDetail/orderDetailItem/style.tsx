import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 36px;
  border-top: 1px solid #B3B3B3;
`;

export const Category = styled.div`
  display: flex;
  width: 28%;
  height: 100%;
  text-align: center;
  padding: 0 6%;
  font-size: 13px;
  font-weight: 400;
  color: #4D4D4D;
  background: #F2F2F2;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
`;

export const Content = styled.div`
  display: flex;
  width: 72%;
  height: 100%;
  text-align: start;
  padding: 0 6%;
  font-size: 13px;
  font-weight: 400;
  color: #000000;
  padding-left: 12px;
  justify-content: start;
  align-items: center;
`;
