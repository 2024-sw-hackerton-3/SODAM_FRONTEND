import styled from "styled-components"

export const SearchResultLoadingContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: #F5F5F5;
`

export const SearchResultContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  background-color: #F5F5F5;
  
`

export const SearchResultTopBarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  vertical-align: middle;
`

export const SearchResultBackButtonContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`

export const SearchResultBackButtonImg = styled.img`
  width: 24px;
  height: 24px;
`

export const SearchResultTopBarText = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
  vertical-align: middle;
  align-self: center;
  margin-left: 4px;
`

export const SearchResultTopBarSearchIconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  cursor: pointer;
`

export const SearchResultTopBarSearchBar = styled.input`
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

export const SearchResultTopBarSearchIcon = styled.img`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  filter: opacity(50%);
`

export const SearchResultContentContainer = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 8px;
`

export const SearchResultEmptyText = styled.div`
  font-size: 18px;
  line-height: 1.3;
  font-weight: bold;
  color: #000000;
  margin-left: 16px;
`


export const Spacer = styled.div<{ width?: string, height?: string }>`
  width: ${props => props.width || '0px'};
  height: ${props => props.height || '0px'};
`