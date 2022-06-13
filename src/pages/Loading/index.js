import {Container, Content, Logo} from "./style";
import Background from "../../assets/Pattern.svg"
import LogoIcon from "../../assets/logo.svg"

function Loading() {
  return (
    <Container>
      <Content src={Background}/>
      <Logo src={LogoIcon} />
    </Container>
  );
}

export default Loading;
