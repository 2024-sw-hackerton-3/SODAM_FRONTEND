import * as S from "./style";
import Alarm from "../../assets/image/alarm.svg";

const Header = () => {
  return (
    <div>
      <S.Layout>
        <S.Logo>소담</S.Logo>
        <S.Alarm>
          <img src={Alarm} alt="알림" />
        </S.Alarm>
      </S.Layout>
    </div>
  );
};
export default Header;
