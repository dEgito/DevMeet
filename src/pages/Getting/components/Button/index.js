import { BackButton } from "./style";
import ArrowIcon from "../../../../assets/Arrow-1.svg";

function Button() {
  return (
    <BackButton>
      <img src={ArrowIcon} alt="arrow-icon" />
    </BackButton>
  );
}

export default Button;
