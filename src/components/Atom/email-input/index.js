// components/Atom/email-input/index.js

import React, { useState, useEffect } from "react";
import {
  Container,
  FlexEmail,
  Text,
  Required,
  Input,
  Span,
  Div,
  Select,
  Option,
} from "./styled";
const AtomEmailInput = ({ onUpdate, attribute, width, required }) => {
  const [localPart, setLocalPart] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [email, setEmail] = useState("");
  const [inputEnabled, setInputEnabled] = useState(false);
  const domains = [
    "shinhan.com",
    "naver.com",
    "google.com",
    "hanmail.net",
    "daum.net",
    "nate.com",
    "kakao.com",
  ];

  const handleDomainChange = (e) => {
    const value = e.target.value; // select된 요소의 value
    // If the selected value is 'type', enable input and clear custom domain input
    if (value === "type") {
      setInputEnabled(true); // Assuming you have a state variable like inputEnabled
    } else {
      setInputEnabled(false);
    }

    setSelectedDomain(value);
    setEmail(`${localPart}@${selectedDomain === "type" ? "" : selectedDomain}`);
    onUpdate(attribute, email);
    console.log('도메인 설정!');
    console.log(email);
  };

  const handleLocalPartChange = (e) => {
    setLocalPart(e.target.value);
    setEmail(`${localPart}@${selectedDomain === "type" ? "" : selectedDomain}`);
    onUpdate(attribute, email);
    console.log('localpart 설정!');
    console.log(email);
  };

  useEffect(() => {
    // Update email when both localPart and selectedDomain are changed
    if (localPart && selectedDomain) {
      setEmail(`${localPart}@${selectedDomain === "type" ? "" : selectedDomain}`);
      onUpdate(attribute, email);
      console.log(email);
    }
  }, [localPart, selectedDomain]);

  return (
    <Container>
      <FlexEmail>
        <Text>{required && <Required>*</Required>}이메일</Text>
        <Input
          className="box"
          type="text"
          placeholder="이메일"
          value={localPart}
          onChange={handleLocalPartChange}
        />
        <Span>@</Span>

        <Input
          className="box"
          type="text"
          value={selectedDomain === "type" ? localPart : `${selectedDomain}`}
          placeholder="도메인을 선택해주세요"
          disabled={!inputEnabled}
        />
      </FlexEmail>
      <Div>
        <Select
          className="box"
          onChange={handleDomainChange}
          value={selectedDomain}
        >
          <Option value="" disabled>
            도메인을 선택해주세요
          </Option>
          {domains.map((domain) => (
            <Option key={domain} value={domain}>
              {domain}
            </Option>
          ))}
          <Option value="type">직접 입력</Option>
        </Select>
      </Div>
    </Container>
  );
};

export default AtomEmailInput;
