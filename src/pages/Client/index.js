import React, { useState, useEffect } from "react";
import { Container, PhoneSize } from "./styled";
import MolculeName from "../../components/Molecule/name/index.js";
import OrganismContact from "../../components/Organism/contact/index.js";
import MolculeSpecialization from "../../components/Molecule/specialization/index.js";
import OrganismProfileSection from "../../components/Organism/profile-section/index.js";
import { LoginHeader } from "../../components/index.js";
import AtomCumulativeStats from "../../components/Atom/cumulativestats/index.js";
import MoleculePBPortfolioList from "../../components/Molecule/pb-portfolio-list";
import defaultProfileImage from "../../assets/images/sol.jpeg";
import { useParams } from "react-router-dom";

const getDefaultPortfolioList = () => ({
  portfolioID: [6],
  portfolioNames: ["자문사 펀드1", "자문사 펀드2", "자문사 펀드3"], // 이름
  principals: [1000000, 1000000, 1000000], // 투자원금
  returns: [1602346, 1602346, 1602346], // 투자수익
  cumulativeRORs: [1025.25, 1025.25, 200], // 누적수익률
  durations: [
    "2013.10.11~2023.05.23",
    "2013.10.11~2023.05.23",
    "2013.10.11~2023.05.23",
  ], // 기간
});

const getDefaultPbInfo = () => ({
  name: "김지연",
  imageUrl: defaultProfileImage,
  tel: "010-4652-7451",
  email: "test1@example.com",
  current: "신한투자증권 과장",
  specialization: ["금융상품", "국내주식", "해외주식"],
  customers: 50,
  totalAmount: 4512367889,
  profitMargin: 10,
  introduction:
    "안녕하세요. 투자 및 금융 분야에서 경험이 풍부한 PB로서 최고의 서비스를 제공하겠습니다.",
  experience: [
    { position: "부장", company: "삼성증권", period: "2015 - 2021" },
    { position: "과장", company: "신한투자증권", period: "2021 - 2023" },
  ],
  education: [
    { school: "서울대학교", period: "2014 - 2020" },
    { school: "서울대학교 대학원", period: "2021 - 2023" },
    { school: "연세대학교 대학원", period: "2024 - 2026" },
  ],
  certificates: ["금융투자자격증", "공인회계사", "금융기사"],
  //  아래는 상세 포트폴리오
  portfolioID: [6],
  portfolioNames: ["자문사 펀드1", "자문사 펀드2", "자문사 펀드3"], // 이름
  principals: [1000000, 1000000, 1000000], // 투자원금
  returns: [1602346, 1602346, 1602346], // 투자수익
  cumulativeRORs: [1025.25, 1025.25, 200], // 누적수익률
  durations: [
    "2013.10.11~2023.05.23",
    "2013.10.11~2023.05.23",
    "2013.10.11~2023.05.23",
  ], // 기간
});

const Client = () => {
  const { id } = useParams();

  const [pbInfo, setPbInfo] = useState(getDefaultPbInfo());
  const [portfolioList, setPortfolioList] = useState(getDefaultPortfolioList());

  const fetchData = async () => {
    try {
      if (!id) {
        id = "1"; // 기본 pbId=1
      }

      const response = await fetch(
        `http://133.186.218.115/api/v1/pbinfo?pbId=${id}`,
        {
          method: "GET",
          credentials: "include", // Include credentials (cookies, HTTP authentication) in the request
        }
      );

      if (!response.ok) {
        console.error("HTTP 요청 실패:", response.status);
      } else {
        const data = await response.json();
        // 여기까지 data 잘 들어옴 // console.log(data.customers)
        setPbInfo(data);
        setPortfolioList({
          portfolioID: data.portfolioID,
          portfolioNames: data.portfolioNames,
          principals: data.principals,
          returns: data.returns,
          cumulativeRORs: data.cumulativeRORs,
          durations: data.durations,
        });
      }
    } catch (error) {
      console.error("데이터를 가져오는 도중 에러 발생:", error);
    }
  };

  // console.log("pbinfo test");
  // console.log(pbInfo.customers); // 잘나옴

  // 컴포넌트가 마운트되면 데이터를 가져옴
  useEffect(() => {
    fetchData();
  }, []); // 빈 배열은 컴포넌트가 마운트될 때만 실행

  return (
    <Container>
      <PhoneSize>
        <LoginHeader width={"100vw"} />
        <MolculeName fullName={pbInfo.name} />
        <OrganismContact
          contact={{
            imageUrl: pbInfo.imageUrl,
            tel: pbInfo.tel,
            email: pbInfo.email,
            current: pbInfo.current,
          }}
        />
        <MolculeSpecialization specialization={pbInfo.specialization} />
        <AtomCumulativeStats
          cumulativeStats={{
            customers: pbInfo.customers,
            totalAmount: pbInfo.totalAmount,
            profitMargin: pbInfo.profitMargin,
          }}
        />
        <OrganismProfileSection
          profileData={{
            introductionData: pbInfo.introduction,
            experienceData: pbInfo.experience,
            educationData: pbInfo.education,
            certificateData: pbInfo.certificates,
          }}
        />
        <MoleculePBPortfolioList
          title="포트폴리오"
          portfolioList={portfolioList}
        />
      </PhoneSize>
    </Container>
  );
};
export default Client;
