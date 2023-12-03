import { OptionButton } from "../../index";
import CustomerImg from "../../../assets/images/customerImg.png";
import {
  Container,
  ButtonContainer,
  LeftContainer,
  RightContainer,
  CustomerImage,
  TextContainer,
  Text,
  Name,
  NameContainer,
} from "./styled";

const CustomerInfoContainer = ({ customer }) => {
  console.log(customer, "customer");
  return (
    <Container>
      <LeftContainer>
        <CustomerImage src={CustomerImg}></CustomerImage>
      </LeftContainer>
      <RightContainer>
        <NameContainer>
          <Name>{customer.name}</Name>
          <TextContainer>
            <Text>{customer.phone}</Text>
            <Text>{customer.email}</Text>
          </TextContainer>
        </NameContainer>
        <ButtonContainer>
          <OptionButton text={customer.type} color="white"></OptionButton>
          <OptionButton
            text={customer.option + " 고객"}
            color="blue"
          ></OptionButton>
        </ButtonContainer>
      </RightContainer>
    </Container>
  );
};
export default CustomerInfoContainer;
