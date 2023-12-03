import React, { useState } from "react";
import { Header, SubTitle } from "../../components/index";
import { Container, BackgroundImage, FlexName } from "./styled";
import AtomPlainInput from "../../components/Atom/plain-input";
import AtomImageInput from "../../components/Atom/image-input";
import AtomEmailInput from "../../components/Atom/email-input";
import MoleculeCareerInput from "../../components/Molecule/career-input";
import MoleculeEducationInput from "../../components/Molecule/education-input";
import MoleculeCertificateInput from "../../components/Molecule/certificate-input";
import AtomIntroductionInput from "../../components/Atom/introduction-input";
import AtomSpecializationInput from "../../components/Atom/specialization-input";
import { MainContainer } from "../Main/styled";
import Modal from "react-modal";
import { instance } from "../../apis";

import styled from "styled-components";
import { ModalButton } from "../../components/Atom/Calendar/styled";

const SubmitButton = styled.button`
  width: 200px;
  padding: 10px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 4px;
  background-color: #384a7d;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-bottom: 50px;
  &:active {
    transform: scale(0.95);
  }
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img``;

const Span = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #eaeff6;
  color: #000;
`;

const Mypage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const pbId = localStorage.getItem("pbId") || 1;
  const pbName = localStorage.getItem("pbName");
  const [formState, setFormState] = useState({
    id: pbId,
    name: "",
    phoneNumber: "",
    imageUrl: "",
    email: "",
    careerList: [],
    educationList: [],
    specializationList: [],
    certificateList: [],
    introduction: "",
  });

  const handleInputChange = (attribute, value) => {
    setFormState({
      ...formState,
      [attribute]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "name",
      "phoneNumber",
      "email",
      "careerList",
      "educationList",
      "specializationList",
    ];
    const missingFields = requiredFields.filter((field) => !formState[field]);

    if (missingFields.length > 0) {
      alert(`필수 항목을 채워주세요: ${missingFields.join(", ")}`);
      return;
    }

    // console.log(formState.name); // DEBUG

    try {
      // TODO: 제출 url 변경
      const response = await fetch("http://133.186.218.115/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        body: JSON.stringify(formState),
        credentials: "include",
      });

      if (response.ok) {
        console.log("submit success");
        getQr();
      } else {
        console.error("폼 제출 중 오류 발생");
      }
    } catch (error) {
      console.error("통신 오류:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /*QR*/
  const getQr = async () => {
    try {
      const response = await instance.get(`/api/qr/${pbId}`, {
        responseType: "arraybuffer", // 이진 데이터로 요청
      });

      const blob = new Blob([response.data], { type: "image/png" }); // 형식에 맞게 Blob 생성

      const imageUrl = URL.createObjectURL(blob); // Blob을 URL로 변환

      setIsModalOpen(true);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header tab={3} pbName={pbName}></Header>
      <Container>
        <MainContainer>
          <BackgroundImage>
            <SubTitle subTitle="개인정보"></SubTitle>
            <FlexName>
              <AtomPlainInput
                title={"이름"}
                placeholder={"이름"}
                required={true}
                width={"250px"}
                onUpdate={handleInputChange}
                attribute={"name"}
              />
              <AtomPlainInput
                title={"전화번호"}
                placeholder={"010-xxxx-xxxx"}
                required={true}
                width={"310px"}
                onUpdate={handleInputChange}
                attribute={"phoneNumber"}
              />
            </FlexName>

            <AtomEmailInput
              onUpdate={handleInputChange}
              attribute={"email"}
              width={"250px"}
              required={true}
            />
            <AtomImageInput
              onUpdate={handleInputChange}
              attribute={"imageUrl"}
            />
            <MoleculeCareerInput
              onUpdate={handleInputChange}
              attribute={"careerList"}
              width1={"210px"}
              width2={"120px"}
              required={true}
            />
            <MoleculeEducationInput
              onUpdate={handleInputChange}
              attribute={"educationList"}
              width1={"210px"}
              width2={"120px"}
              required={true}
            />
          </BackgroundImage>

          <BackgroundImage>
            <SubTitle subTitle="전문 분야 및 자격 사항"></SubTitle>
            <AtomSpecializationInput
              onUpdate={handleInputChange}
              attribute={"specializationList"}
              required={true}
            />
            <MoleculeCertificateInput
              onUpdate={handleInputChange}
              attribute={"certificateList"}
            />
          </BackgroundImage>
          <BackgroundImage>
            <AtomIntroductionInput
              onUpdate={handleInputChange}
              attribute={"introduction"}
            />
          </BackgroundImage>

          <RightContainer>
            <SubmitButton onClick={handleFormSubmit}>수정</SubmitButton>
          </RightContainer>
        </MainContainer>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="QR"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
            },
            content: {
              width: "100%",
              maxWidth: "300px",
              height: "300px",
              margin: "auto",
              top: "50%",
              transform: "translateY(-50%)",
              background: "white",
              padding: "20px",
              borderRadius: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          {imageUrl && (
            <QRContainer>
              <Text>QR CODE</Text>
              <Image
                src={imageUrl}
                alt="Fetched Image"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
              <Span>
                <a href={imageUrl} download="qrcode.png">
                  QR 다운로드
                </a>
              </Span>
              <ModalButton onClick={closeModal}>닫기</ModalButton>
            </QRContainer>
          )}
        </Modal>
      </Container>
    </>
  );

  // TODO : 컴포넌트 grouping
};
export default Mypage;
