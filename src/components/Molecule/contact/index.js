// components/Molecule/contact/index.js

import React from "react";
import AtomContact from "../../Atom/contact";
import { Container, Title } from "./styled";

const MoleculeContact = ({ tel, email, current }) => {

  return (
    <Container>
      <Title>CONTACT</Title>
      <AtomContact contact={tel}></AtomContact>
      <AtomContact contact={email}></AtomContact>
      <AtomContact contact={current}></AtomContact>
    </Container>
  );
};

export default MoleculeContact;
