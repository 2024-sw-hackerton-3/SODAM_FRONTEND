// ProductList.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Back from "../../assets/image/back.svg";
import * as S from "./style";

const Order = () => {
  const navigate = useNavigate();
  const categories = [
    "면류",
    "밥류",
    "구이류",
    "디저트류",
    "샐러드류",
    "찌개류",
    "볶음류",
  ];
  const products = Array(6).fill({
    brand: "삼립",
    name: "하이면 사골 포차 칼국수",
    price: "38,000원",
    image: "https://via.placeholder.com/150",
    productId: "123456",
  });

  const handleProductClick = (productId: string) => {
    navigate(`/order/${productId}`);
  };

  return (
    <S.Layout>
      {/* Header */}
      <S.Header>
        <S.BackIcon src={Back} alt="뒤로가기" onClick={() => {navigate("/")}} />
        <S.HeaderTitle>주문하기</S.HeaderTitle>
      </S.Header>
      
      {/* Category Tabs */}
      <S.CategoryTabs>
        {categories.map((category, index) => (
          <S.Category key={index}>{category}</S.Category>
        ))}
      </S.CategoryTabs>
      <S.Container>
        {/* Product Grid */}
        <S.ProductGrid>
          {products.map((product, index) => (
            <S.ProductItem
              key={index}
              onClick={() => handleProductClick(product.productId)}
            >
              <S.ProductImage src={product.image} alt={product.name} />
              <S.ProductBrand>{product.brand}</S.ProductBrand>
              <S.ProductName>{product.name}</S.ProductName>
              <S.ProductPrice>{product.price}</S.ProductPrice>
            </S.ProductItem>
          ))}
        </S.ProductGrid>
      </S.Container>
    </S.Layout>
  );
};

export default Order;
