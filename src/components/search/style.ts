import styled from "styled-components";


export const SearchLoadingContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: #F5F5F5;
`

export const SearchContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
  
`

export const SearchTopBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  vertical-align: middle;
`

export const SearchBackButtonContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`

export const SearchBackButtonImg = styled.img`
  width: 24px;
  height: 24px;
`

export const SearchTopBarText = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
  vertical-align: middle;
  align-self: center;
  margin-left: 4px;
`

export const SearchTopBarSearchIconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  cursor: pointer;
`

export const SearchTopBarSearchBar = styled.input`
  width: 100%;
  border: none;
  background-color: #F5F5F5;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  ::placeholder {
    color: #AAAAAA;
    font-size: 18px;
    font-weight: 600;
  }
`

export const SearchTopBarSearchIcon = styled.img`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  filter: opacity(50%);
`

export const SearchContentContainer = styled.div`
  width: calc(100% - 16px);
  height: calc(calc(var(--vh, 1vh) * 100) - 60px);
  align-self: flex-start;
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  overflow: auto;
  margin-left: 16px;
`

export const SearchContentTitleText = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  color: #000000;
`

export const SearchContentCategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  overflow-x: scroll;
  overflow: auto;
  flex-wrap: nowrap;
  scrollbar-width: none;
`

export const SearchContentRecommendContaienr = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`

export const SearchContentWrarringIcon = styled.img`
  width: 16px;
  height: 16px;
`

export const Spacer = styled.div<{ width?: string, height?: string }>`
  width: ${props => props.width || '0px'};
  height: ${props => props.height || '0px'};
  background-color: #F5F5F5;
`