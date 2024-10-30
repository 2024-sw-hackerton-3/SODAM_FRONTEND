import styled from "styled-components";

// Layout
export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f9f9f9;
  box-sizing: border-box;
`;

export const Container = styled.div`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  
`

// Header
export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0px;
`;

export const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: 0px 16px;
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

// Category Tabs
export const CategoryTabs = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  margin-bottom: 16px;
  border-bottom: 1px solid #ddd;
`;

export const Category = styled.div`
  font-size: 14px;
  color: #a5a5a5;
  padding-top: 12px;
  padding: 8px, 0px;
  margin-left: 4px;
  cursor: pointer;
  white-space: nowrap;

  &:first-child {
    color: #000;
    font-weight: bold;
    border-bottom: 2px solid #000;
  }
`;

// Product Grid
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

// Product Item
export const ProductItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  text-align: left; /* Align text to the left */
`;

// Other styles remain unchanged...

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const ProductBrand = styled.div`
  font-size: 12px;
  color: #777;
  margin-bottom: 4px;
`;

export const ProductName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;
