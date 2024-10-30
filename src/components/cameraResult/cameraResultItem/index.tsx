import * as S from "./style"

interface CameraResultItemProps {
  src: string;
  title: string,
  description: string,
  caption: string
}

const CameraResultItem = ({ src, title, description, caption }: CameraResultItemProps) => {
  return (
    <S.CameraResultItemContainer>
      <S.CameraResultItemImg src={src}/>
      <S.CameraResultItemContentContainer>
        <S.CameraResultItemTitle>{title}</S.CameraResultItemTitle>
        <S.CameraResultItemDescription>{description}</S.CameraResultItemDescription>
        <S.CameraResultItemCaption>{caption}</S.CameraResultItemCaption>
      </S.CameraResultItemContentContainer>
    </S.CameraResultItemContainer>
  );
}

export default CameraResultItem;