import * as S from "./style";
import Alarm from "../../assets/image/alarm.svg";
import { ReactComponent as SodamLogo} from "../../assets/image/sodam_logo.svg";

const Header = () => {
  return (
    <div>
      <S.Layout>
        <SodamLogo style={{marginLeft: "20px", alignSelf: "center", justifySelf: "center"}}/>
        {/* <S.Logo>소담</S.Logo> */}
        <S.Alarm>
          <img src={Alarm} alt="알림" />
        </S.Alarm>
      </S.Layout>
    </div>
  );
};
export default Header;
