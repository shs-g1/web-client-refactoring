import { Container, Blue } from "./styled";

const PageTitle = ({ blueTItle, title }) => {
  return (
    <Container>
      <Blue>{blueTItle}</Blue>
      {title}
    </Container>
  );
};
export default PageTitle;
