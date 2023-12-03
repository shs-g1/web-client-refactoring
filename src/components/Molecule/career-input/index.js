// components/Molecule/career-input/index.js

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

const MoleculeCareerInput = ({
  onUpdate,
  attribute,
  width1,
  width2,
  required,
}) => {
  const [careerHistory, setCareerHistory] = useState([
    {
      company: "",
      department: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleInputChange = (index, field, newValue) => {
    // 각 입력창(Company, Department, Start Date, End Date)에 입력 시 호출
    const updatedCareerHistory = [...careerHistory];
    updatedCareerHistory[index][field] = newValue;
    setCareerHistory(updatedCareerHistory); // careerHistory 상태 업데이트
  };

  const handleSaveCareer = () => {
    // 경력 저장하기 버튼 누르면 호출, 외부 컴포넌트로 carrerHistory를 넘겨준다.
    onUpdate(attribute, careerHistory);
  };

  const handleAddCareer = () => {
    // Add career 버튼을 누르면 호출
    setCareerHistory([
      ...careerHistory,
      { company: "", department: "", startDate: "", endDate: "" },
    ]);
  };

  const handleRemoveCareer = (index) => {
    // Remove 버튼을 누르면 호출
    if (index === 0) {
      alert("최소 1개의 경력을 입력해주세요.");
      return;
    }
    const updatedCareerHistory = [...careerHistory];
    updatedCareerHistory.splice(index, 1);
    setCareerHistory(updatedCareerHistory);
  };

  return (
    <div>
      <Text>{required && <Required>*</Required>}경력</Text>
      {careerHistory.map((career, index) => (
        <div key={index}>
          <Container>
            <AtomPartInput
              placeholder="회사"
              value={career.company}
              width={width1}
              required={required}
              onChange={(value) => handleInputChange(index, "company", value)}
            />
            <AtomPartInput
              placeholder="부서"
              value={career.department}
              width={width1}
              onChange={(value) =>
                handleInputChange(index, "department", value)
              }
            />
            <AtomPartInput
              placeholder="yyyy-mm-dd"
              value={career.startDate}
              width={width2}
              required
              onChange={(value) => handleInputChange(index, "startDate", value)}
            />
            <Span>~</Span>
            <AtomPartInput
              placeholder="yyyy-mm-dd"
              value={career.endDate}
              width={width2}
              onChange={(value) => handleInputChange(index, "endDate", value)}
            />
            <SaveButton onClick={handleAddCareer}>추가</SaveButton>
            <SaveButton onClick={() => handleRemoveCareer(index)}>
              삭제
            </SaveButton>
            <SaveButton onClick={handleSaveCareer}>임시 저장</SaveButton>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default MoleculeCareerInput;
