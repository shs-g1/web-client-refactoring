// components/Atom/specialization/index.js
import styled from "styled-components";

const Keyword = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 30px;
  background: #fafafa;
  color: #384a7d;
  font-family: "ONE SHINHAN MEDUIM";
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
`;

const AtomSpecialization = ({ text }) => {
  return <Keyword>{text}</Keyword>;
};

export default AtomSpecialization;
