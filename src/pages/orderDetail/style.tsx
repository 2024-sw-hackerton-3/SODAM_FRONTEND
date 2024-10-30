import styled from "styled-components"

export const OrderDetailContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
  
`

export const OrderDetailTopBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  vertical-align: middle;
`

export const OrderDetailBackButtonContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`

export const OrderDetailBackButtonImg = styled.img`
  width: 24px;
  height: 24px;
`

export const OrderDetailTopBarText = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
  vertical-align: middle;
  align-self: center;
  margin-left: 4px;
`
export const OrderDetailContentImageContainer = styled.div`
  width: 100%;
  height: calc(100% - 60px - 60px);
  display: flex;
  flex-direction: column;
`

export const OrderDetailScrollContainer = styled.div`
  width: calc(100% - 48px);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: center;
  overflow-y: scroll;
  overflow: auto;
`

export const OrderDetailThumbnail = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

export const OrderDetailContentContainer = styled.div`
  width: calc(100% - 32px);
  height: calc(calc(var(--vh, 1vh) * 100) - 60px - 191px);
  align-self: center;
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const OrderDetailBrandText = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #4D4D4D;
`

export const OrderDetailPriceText = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #000000;
`

export const OrderDetailDescriptionText = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #000000;
`


export const OrderDetailCaptionText = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #4D4D4D;
`

export const OrderDetailBottomContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  background-color: #F5F5F5;
  padding: 8px 20px;
`

export const OrderDetailBottomButton = styled.button`
  width: 80%;
  min-height: 44px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  background: #FE4E26;
  border-radius: 8px;
  border: none;
`

export const OrderDetailBottomIcon = styled.img`
  width: 33px;
  height: 33px;
`

export const Spacer = styled.div<{ width?: string, height?: string }>`
  width: ${props => props.width || '0px'};
  height: ${props => props.height || '0px'};
`