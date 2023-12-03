// components/Atom/name/index.js
import React from "react";
import styled from "styled-components";

const Blue = styled.span`
  color: #384a7d;
  font-family: "ONE SHINHAN MEDUIM";
`;

const Text = styled.span``;
const AtomName = ({ fullName }) => {
  return (
    <Text>
      <Blue>{fullName}</Blue>입니다.
    </Text>
  ); // TODO: Name 표시 크기는?
};

export default AtomName;
