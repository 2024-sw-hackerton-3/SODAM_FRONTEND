import styled from "styled-components";

export const CameraResultContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
  
`

export const CameraResultTopBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  vertical-align: middle;
`

export const CameraResultBackButtonContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`

export const CameraResultBackButtonImg = styled.img`
  width: 24px;
  height: 24px;
`

export const CameraResultTopBarText = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
  vertical-align: middle;
  align-self: center;
  margin-left: 4px;
`

export const CameraResultContentContainer = styled.div`
  width: calc(100% - 32px);
  height: calc(calc(var(--vh, 1vh) * 100) - 60px);
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: start;
  gap: 8px;
  overflow-y: scroll;
  overflow: auto;
`

export const CameraResultSearchText = styled.div`
  font-size: 18px;
  line-height: 1.3;
  font-weight: bold;
  color: #000000;
`

export const CameraResultSuggestionText = styled.div`
  font-size: 14px;
  line-height: 1.3;
  font-weight: 500;
  color: #000000;
`


export const Spacer = styled.div<{ width?: string, height?: string }>`
  width: ${props => props.width || '0px'};
  height: ${props => props.height || '0px'};
`
