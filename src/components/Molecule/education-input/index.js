//components/Molecule/education-input/index.js

import React, { useState } from "react";
import AtomPartInput from "../../Atom/part-input";
import styled from "styled-components";
import { SaveButton } from "../../Atom/image-input/styled";

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const Required = styled.span`
  color: #c13c3c;
  font-size: 18px;
  margin-right: 3px;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-right: 30px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 18px;
`;

const MoleculeEducationInput = ({
  onUpdate,
  attribute,
  required,
  width1,
  width2,
}) => {
  const [educationHistory, setEducationHistory] = useState([
    {
      school: "", //	학교
      department: "", //	학과
      startDate: "", // 시작 날짜
      endDate: "", // 종료 날짜
    },
  ]);

  const handleInputChange = (index, field, newValue) => {
    // 각 입력창(학교, 부서, 시작 날짜, 종료 날짜)에 입력 시 호출
    const updatedEducationoHistory = [...educationHistory];
    updatedEducationoHistory[index][field] = newValue;
    setEducationHistory(updatedEducationoHistory); // EducationHistory 상태 업데이트
  };

  const handleSaveEducation = () => {
    // 교육 저장하기 버튼 누르면 호출, 외부 컴포넌트로 educationHistory 넘겨준다.
    onUpdate(attribute, educationHistory);
  };

  const handleAddEducation = () => {
    // Add education 버튼을 누르면 호출
    setEducationHistory([
      ...educationHistory,
      { company: "", department: "", startDate: "", endDate: "" },
    ]);
  };

  const handleRemoveEducation = (index) => {
    // Remove 버튼을 누르면 호출
    const updatedEducationHistory = [...educationHistory];
    updatedEducationHistory.splice(index, 1);
    setEducationHistory(updatedEducationHistory);
  };

  return (
    <div>
      <Text>{required && <Required>*</Required>}학력</Text>
      {educationHistory.map((education, index) => (
        <Container key={index}>
          <AtomPartInput
            placeholder={"학교"}
            value={education.school}
            width={width1}
            onChange={(value) => handleInputChange(index, "school", value)}
          />
          <AtomPartInput
            placeholder={"학과"}
            value={education.department}
            width={width1}
            onChange={(value) => handleInputChange(index, "department", value)}
          />
          <AtomPartInput
            placeholder={"yyyy-mm-dd"}
            value={education.startDate}
            width={width2}
            onChange={(value) => handleInputChange(index, "startDate", value)}
          />
          <Span>~</Span>
          <AtomPartInput
            placeholder={"yyyy-mm-dd"}
            value={education.endDate}
            width={width2}
            onChange={(value) => handleInputChange(index, "endDate", value)}
          />
          <SaveButton onClick={handleAddEducation}>추가</SaveButton>
          <SaveButton onClick={() => handleRemoveEducation(index)}>
            삭제
          </SaveButton>

          <SaveButton onClick={handleSaveEducation}>임시 저장</SaveButton>
        </Container>
      ))}
    </div>
  );
};

export default MoleculeEducationInput;
