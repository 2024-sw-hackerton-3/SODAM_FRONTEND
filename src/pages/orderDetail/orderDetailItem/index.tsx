import * as S from "./style"

interface OrderDetailItemProps {
  // Declare props here
  category: string;
  content: string;
}

const OrderDetailItem = ({category, content}: OrderDetailItemProps) => {
  return (
    <S.Container>
      <S.Category>{category}</S.Category>
      <S.Content>{content}</S.Content>
    </S.Container>
  )
}

export default OrderDetailItem;