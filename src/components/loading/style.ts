import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const LoadingText = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  color: #343A40;
  text-align: start;
`

export const LoadingLottieContainer = styled.div`
  width: 240px;
  height: 140px;
`