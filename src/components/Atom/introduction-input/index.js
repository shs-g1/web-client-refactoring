// components/Atom/introduction-input/index.js

import { SubTitle } from "../../index";
import React, { useState } from "react";
import styled from "styled-components";
import { SaveButton } from "../image-input/styled";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px 0px 0px;
`;
export const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-right: 30px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const Textarea = styled.textarea`
  border-radius: 4px;
  border: 1px solid var(--Grey, #c9c9c9);
  resize: none;
`;
const AtomIntroductionInput = ({ onUpdate, attribute }) => {
  const [introduction, setIntroduction] = useState("");

  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };

  const handleFormSubmit = (e) => {
    // 저장 버튼을 누르면 form의 onSubmit으로 호출되는 함수
    e.preventDefault();
    onUpdate(attribute, introduction);
  };

  return (
    <div>
      <SubTitle subTitle="자기소개" />
      <Text>자유롭게 작성해주세요.</Text>
      <form onSubmit={handleFormSubmit}>
        <label>
          <Textarea
            value={introduction}
            onChange={handleIntroductionChange}
            rows="10"
            cols="130"
          />
        </label>
        <br />
        <Container>
          <SaveButton type="submit">임시 저장</SaveButton>
        </Container>
      </form>
    </div>
  );
};

export default AtomIntroductionInput;
