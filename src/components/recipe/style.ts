import styled from "styled-components"

export const RecipeContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
  
`

export const RecipeTopBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  vertical-align: middle;
`

export const RecipeBackButtonContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`

export const RecipeBackButtonImg = styled.img`
  width: 24px;
  height: 24px;
`

export const RecipeTopBarText = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
  vertical-align: middle;
  align-self: center;
  margin-left: 4px;
`

export const RecipeScrollContainer = styled.div`
  width: 100%;
  height: calc(calc(var(--vh, 1vh) * 100) - 60px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  overflow: auto;
`

export const RecipeThumbnail = styled.img`
  width: 100%;
  height: 191px;
  object-fit: cover;
`

export const RecipeContentContainer = styled.div`
  width: calc(100% - 32px);
  height: calc(calc(var(--vh, 1vh) * 100) - 60px - 191px);
  align-self: center;
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const RecipeTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
  display: flex;
  vertical-align: bottom;
`

export const RecipeDescription = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  color: #000000;
  text-align: start;
`

export const RecipeInfoContainer = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  border: 1px solid #000000;
  align-items: center;
`

export const RecipeInfoIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 10px 0px
`

export const RecipeInfoText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: #000000;
  text-align: start;
`

export const RecipeIngredientContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: center;
`

export const RecipeIngredientText = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
  text-align: start;
`

export const RecipeIngredientIconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const RecipeRecipeMethodText = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: start;
  color: #000000;
  align-self: center;
`


export const Spacer = styled.div<{ width?: string, height?: string }>`
  width: ${props => props.width || '0px'};
  height: ${props => props.height || '0px'};
  background-color: #F5F5F5;
`

export const Divider = styled.div<{width?: string, height?: string, color?: string}>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '1px'};
`

export const SpaerMargin = styled.div`
  margin: auto;
`

