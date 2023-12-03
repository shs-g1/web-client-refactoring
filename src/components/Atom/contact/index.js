// components/Atom/contact/index.js
import React from "react";
import styled from "styled-components";

const Text = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  line-height: 1.5;
`;
const Blue = styled.span`
  color: #384a7d;
  font-weight: 700;
`;

const AtomContact = ({ contact }) => {
  if (contact.includes("여의도영업부")) {
    const parts = contact.split("여의도영업부");
    return (
      <Text>
        {parts[0]}
        <Blue>여의도영업부</Blue>
      </Text>
    );
  } else {
    return <Text>{contact}</Text>;
  }
};

export default AtomContact;
