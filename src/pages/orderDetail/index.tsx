import * as S from "./style"
import BackIcon from "../../assets/image/ic_back.png"
import { useSearchParams } from "react-router-dom";
import FoodApi from "../../api/food/FoodApi";
import OrderDetailItem from "./orderDetailItem";
import BookmarkIcon from "../../assets/image/ic_bookmark.png";

const OrderDetail = () => {

  const [ searchParams , setSearchParams] = useSearchParams();
  const id = searchParams.get("id")

  const data = FoodApi.getOrderById(Number(id));

  return (
    <S.OrderDetailContainer>
      <S.OrderDetailTopBarContainer>
        <S.OrderDetailBackButtonContainer>
          <S.OrderDetailBackButtonImg src={BackIcon}/>
        </S.OrderDetailBackButtonContainer>
        <S.OrderDetailTopBarText>구매하기</S.OrderDetailTopBarText>
      </S.OrderDetailTopBarContainer>
      <S.OrderDetailContentImageContainer>
        <S.OrderDetailThumbnail src={data.src}/>
        <S.OrderDetailScrollContainer>
          <S.Spacer height="16px"/>
          <S.OrderDetailBrandText>삼립</S.OrderDetailBrandText>
          <S.OrderDetailPriceText>{data.price}원</S.OrderDetailPriceText>
          <S.Spacer height="12px"/>

          <S.OrderDetailDescriptionText>{data.title}</S.OrderDetailDescriptionText>
          <S.OrderDetailCaptionText>{data.enTitle}</S.OrderDetailCaptionText>
          <S.Spacer height="16px"/>

          <select>
            <option value="1">1개</option>
            <option value="2">2개</option>
            <option value="3">3개</option>
            <option value="4">4개</option>
            <option value="5">5개</option>
          </select>

          <S.Spacer height="16px"/>
          <OrderDetailItem category="상품번호" content={data.productNumber}></OrderDetailItem>
          <OrderDetailItem category="제조사" content={data.company}></OrderDetailItem>
          <OrderDetailItem category="상품상태" content={data.state}></OrderDetailItem>
          <OrderDetailItem category="원산지" content={data.madeIn}></OrderDetailItem>
        </S.OrderDetailScrollContainer>
      </S.OrderDetailContentImageContainer>
      <S.OrderDetailBottomContainer>
        <S.OrderDetailBackButtonImg src={BookmarkIcon}/>
        <S.OrderDetailBottomButton>
          구매
        </S.OrderDetailBottomButton>
      </S.OrderDetailBottomContainer>
    </S.OrderDetailContainer>


  )
}

export default OrderDetail;