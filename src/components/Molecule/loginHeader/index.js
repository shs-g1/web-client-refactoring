import { Container, Image, Text } from "./styled";
import Header from "../../../assets/images/header.png";
const LoginHeader = ({ width }) => {
  return (
    <Container width={width}>
      <Image src={Header} alt="header" />
      <Text>SHINHAN</Text>
    </Container>
  );
};
export default LoginHeader;
