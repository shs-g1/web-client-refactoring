import { Container } from "./styled";

const SlideButton = ({ text, onSelect, isSelected }) => {
  return (
    <Container isSelected={isSelected} onClick={onSelect}>
      {text}
    </Container>
  );
};

export default SlideButton;
