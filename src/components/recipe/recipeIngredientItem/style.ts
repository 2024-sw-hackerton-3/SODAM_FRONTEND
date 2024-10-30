import styled from "styled-components";

export const RecipeIngredientItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const RecipeIngredientItemText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  color: #000000;
  text-align: start;
`

export const RecipeIngredientItemButtonContainer = styled.button`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  border: 0.5px solid #6B7280;
`

export const RecipeIngredientItemButtonText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: #495057;
  text-align: start;
  margin: 6px 3px;
`