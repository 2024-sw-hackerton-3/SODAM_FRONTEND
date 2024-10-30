import styled from "styled-components";

export const LikeContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
`

export const LikeTopBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  vertical-align: middle;
`

export const LikeBackButtonContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`

export const LikeBackButtonImg = styled.img`
  width: 24px;
  height: 24px;
`

export const LikeTitleText = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 1.3;
  color: #000000;
  margin-left: 16px;
  text-align: start;
`

export const LikeItemContainer = styled.div`
  width: calc(100% - 32px);
  height: calc(100% - 48px - 12px);
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 22px;
  overflow-y: scroll;
  overflow: auto;
`

export const LikeItemHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
`

export const LikeButtonContainer = styled.div`
  width: 100%;
  min-height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`

export const LikeButton = styled.button`
  width: calc(100% - 32px);
  height: 100%;
  border: none;
  border-radius: 12px;
  background: #FE4E26;
  align-self: center;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;
  cursor: pointer;
`



export const Spacer = styled.div<{ width?: string, height?: string }>`
  width: ${props => props.width || '0px'};
  height: ${props => props.height || '0px'};
`