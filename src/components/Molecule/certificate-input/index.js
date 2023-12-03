// components/Moldecule/certificate-input/index.js

import React, { useState } from "react";
import AtomPartInput from "../../Atom/part-input";
import AtomCalendarInput from "../../Atom/calendar-input";
import { CertificateContainer } from "./styled";
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
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 18px;
  color: #d9d9d9;
  margin-left: 5px;
`;

const MoleculeCertificateInput = ({ onUpdate, attribute }) => {
  const [certificateHistory, setcertificateHistory] = useState([
    {
      certificateName: "",
      certificateIssuer: "",
      acquisitionDate: "",
    },
  ]);

  const handleInputChange = (index, field, newValue) => {
    // 각 입력창(자격증 명, 발행 처, 취득 일자)가 변경 시 호출
    const updatedCertificateHistory = [...certificateHistory];

    // Convert Date object to string in ISO format
    if (field === "acquisitionDate" && newValue instanceof Date) {
      // Extract the date part without the time
      newValue = newValue.toISOString().split("T")[0];
    }

    updatedCertificateHistory[index][field] = newValue;
    setcertificateHistory(updatedCertificateHistory); // certificateHistory 상태 업데이트
  };

  const handleSaveCareer = () => {
    // 자격 사항 저장하기 버튼 누르면 호출, 외부 컴포넌트로 certificateHistory 넘겨준다.
    onUpdate(attribute, certificateHistory);
    console.log(certificateHistory);
  };

  const handleAddCareer = () => {
    // Add certificate 버튼을 누르면 호출
    setcertificateHistory([
      ...certificateHistory,
      { certificateName: "", certificateIssuer: "", acquisitionDate: "" },
    ]);
  };

  const handleRemoveCareer = (index) => {
    if (index === 0) {
      alert("삭제할 자격증이 없습니다.");
      return;
    }
    // Remove 버튼을 누르면 호출
    const updatedCertificateHistory = [...certificateHistory];
    updatedCertificateHistory.splice(index, 1);
    setcertificateHistory(updatedCertificateHistory);
  };

  return (
    <div>
      <Text>자격 증명</Text>
      {certificateHistory.map((certificate, index) => (
        <CertificateContainer key={index}>
          <AtomPartInput
            placeholder="자격증"
            value={certificate.certificateName}
            onChange={(value) =>
              handleInputChange(index, "certificateName", value)
            }
          />
          <AtomPartInput
            placeholder="발행처"
            value={certificate.certificateIssuer}
            onChange={(value) =>
              handleInputChange(index, "certificateIssuer", value)
            }
          />
          <AtomPartInput
            placeholder={"yyyy-mm-dd"}
            value={certificate.acquisitionDate}
            width={"150px"}
            onChange={(value) =>
              handleInputChange(index, "acquisitionDate", value)
            }
          />
          <SaveButton onClick={() => handleRemoveCareer(index)}>
            삭제
          </SaveButton>
          <SaveButton onClick={handleAddCareer}>추가</SaveButton>
          <SaveButton onClick={handleSaveCareer}>임시 저장</SaveButton>
        </CertificateContainer>
      ))}
    </div>
  );
};

export default MoleculeCertificateInput;
