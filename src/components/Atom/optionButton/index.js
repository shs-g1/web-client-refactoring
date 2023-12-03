import { Blue, White } from "./styled";

const OptionButton = ({ text, color }) => {
  if (color === "blue") {
    return <Blue>{text}</Blue>;
  } else {
    return <White>{text}</White>;
  }
};
export default OptionButton;
