// components/Molecule/specialization/index.js

import React from "react";
import AtomSpecialization from "../../Atom/specialization";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-around;
  margin-top: -10px;
`;
const MolculeSpecialization = ({ specialization }) => {

  return (
    <Container>
      {specialization.map((spec, index) => (
        <AtomSpecialization key={index} text={spec} />
      ))}
    </Container>
  );
};

export default MolculeSpecialization;
