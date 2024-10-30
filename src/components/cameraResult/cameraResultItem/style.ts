import styled from "styled-components";

export const CameraResultItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 12px;
`

export const CameraResultItemContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2px;
  padding: 10.5px 0px;
`


export const CameraResultItemImg = styled.img`
  margin-left: 10px;
  width: 64px;
  height: 64px;
  border-radius: 8px;
`

export const CameraResultItemTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
`

export const CameraResultItemDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: #000000;
`

export const CameraResultItemCaption = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: #6B7280;
`

