import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f5f5f5;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 8px 0;
  width: 100%;
  background-color: #ffffff;
`;

export const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 8px;
  margin-left: 8px;
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
`;

export const ProductImageDetail = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductInfoContainer = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
`;

export const ProductBrandDetail = styled.div`
  font-size: 14px;
  color: #888;
`;

export const ProductPriceDetail = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #e74c3c;
  margin-top: 8px;
`;

export const ProductDescription = styled.div`
  font-size: 14px;
  margin-top: 4px;
`;

export const ProductDescriptionEn = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 4px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const QuantitySelect = styled.select`
  flex: 1;
  padding: 8px;
  margin-left: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ProductDetails = styled.div`
  margin-top: 16px;
  border-top: 1px solid #e0e0e0;
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const DetailTitle = styled.div`
  font-size: 14px;
  color: #888;
`;

export const DetailContent = styled.div`
  font-size: 14px;
`;

export const PurchaseButton = styled.button`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  color: #fff;
  background-color: #e74c3c;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  cursor: pointer;
`;
