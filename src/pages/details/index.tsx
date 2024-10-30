// ProductDetail.tsx
import React from "react";
// import { useParams } from "react-router-dom";
import Back from "../../assets/image/back.svg";
import * as S from "./style";

const ProductDetail = () => {
//   const { productId } = useParams<{ productId: string }>();

  return (
    <S.Layout>
      <S.Header>
        <S.BackIcon src={Back} alt="뒤로가기" />
        <S.HeaderTitle>구매하기</S.HeaderTitle>
      </S.Header>

      <S.ProductImageDetail
        src="https://via.placeholder.com/300"
        alt="Product Image"
      />

      <S.ProductInfoContainer>
        <S.ProductBrandDetail>삼립</S.ProductBrandDetail>
        <S.ProductPriceDetail>632,300원</S.ProductPriceDetail>
        <S.ProductDescription>할아버지가 직접 키운 농산물</S.ProductDescription>
        <S.ProductDescriptionEn>
          Produce grown by my grandfather
        </S.ProductDescriptionEn>

        <S.QuantityContainer>
          <label>수량</label>
          <S.QuantitySelect>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </S.QuantitySelect>
        </S.QuantityContainer>

        <S.ProductDetails>
          <S.DetailItem>
            <S.DetailTitle>상품번호</S.DetailTitle>
            <S.DetailContent>8473649283748392</S.DetailContent>
          </S.DetailItem>
          <S.DetailItem>
            <S.DetailTitle>제조사</S.DetailTitle>
            <S.DetailContent>할아버지 컴퍼니</S.DetailContent>
          </S.DetailItem>
          <S.DetailItem>
            <S.DetailTitle>상품상태</S.DetailTitle>
            <S.DetailContent>A등급</S.DetailContent>
          </S.DetailItem>
          <S.DetailItem>
            <S.DetailTitle>원산지</S.DetailTitle>
            <S.DetailContent>충청남도 아산시</S.DetailContent>
          </S.DetailItem>
        </S.ProductDetails>
      </S.ProductInfoContainer>

      <S.PurchaseButton>구매</S.PurchaseButton>
    </S.Layout>
  );
};

export default ProductDetail;
