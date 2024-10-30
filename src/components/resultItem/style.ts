import styled from "styled-components";

export const resultItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 12px;
`

export const resultItemContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2px;
  padding: 10.5px 0px;
`


export const resultItemImg = styled.img`
  margin-left: 10px;
  width: 64px;
  height: 64px;
  border-radius: 8px;
`

export const resultItemTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
`

export const resultItemDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: #000000;
`

export const resultItemCaption = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: #6B7280;
`

