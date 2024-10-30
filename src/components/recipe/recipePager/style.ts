import styled from "styled-components";

export const RecipePagerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: absolute;
  z-index: 100;
  background: #ffffff;
`

export const RecipePagerContentContainer = styled.div`
  width: calc(100% - 32px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 16px;
  
  gap: 8px;
`

export const RecipePagerInnerContainer = styled.div`
  width: calc(100% - 20px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 10px;
  gap: 12px;
`

export const RecipePagerTitleText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`

export const RecipePagerContentText = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  text-align: start;
`

export const RecipePagerExitButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 26px;
  top: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 101;
`

export const RecipePagerExitImage = styled.img`
  width: 24px;
  height: 24px;
`

export const RecipePagerIndicatorContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const RecipePagerIndicatorFlexContainer = styled.div`
  background: rgba(0, 0, 0, .7);
  border-radius: 12px;
  border: none;
  padding: 4px 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-self: center;
`

export const RecipePagerIndicatorText = styled.div<{color?: string}>`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.color?? '#FFFFFF'};
`

export const Spacer = styled.div<{ width?: string, height?: string }>`
  width: ${props => props.width || '0px'};
  height: ${props => props.height || '0px'};
`