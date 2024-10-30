import styled from "styled-components";


export const LikeItemContainer = styled.button<{isSelect: Boolean}>`
  padding: 10px;
  background: ${props => props.isSelect ? '#FF7637' : '#FFFFFF'};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
`

export const LikeItemImage = styled.img`
  width: 60px;
  height: 60px;
`

export const LikeText = styled.div<{isSelect: Boolean}>`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: ${props => props.isSelect ? '#FFFFFF' : '#000000'};
`

