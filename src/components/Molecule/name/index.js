// components/Molecule/name/index.js

import React from "react";
import AtomName from "../../Atom/name/index.js";
import { MoleculeNameContainer, Text } from "./styled";

const MolculeName = ({ fullName }) => {

  // TODO: 고객문구 지속적으로 변경하는 함수 추가
  return (
    <MoleculeNameContainer>
      <Text>진심으로 고객을 위하는</Text>
      <AtomName fullName={"PB " + fullName} />
    </MoleculeNameContainer>
  );
};

export default MolculeName;
