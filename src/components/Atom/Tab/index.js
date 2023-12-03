import { Container } from "./styled";

const Tab = ({ Text, onSelect, isSelected }) => {
  return (
    <Container isSelected={isSelected} onClick={onSelect}>
      {Text}
    </Container>
  );
};

export default Tab;
