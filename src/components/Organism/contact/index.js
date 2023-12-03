// components/Organism/contatc/index.js

import React from "react";
import MoleculeContact from "../../Molecule/contact";
import AtomProfileImage from "../../Atom/profile-image";
import PBProfile from "../../../assets/images/pbProfile.png";
import { Container } from "./styled";

const imageUrlValidation = (url) => { // 정규 표현식 이용해서 올바른 이미지 URL인지 확인
  const regex = /\.(jpeg|jpg|gif|png)$/i; // $ => 문자열의 끝, i => insensitive로 대소문자 구분 X 따라서 .jpeg나 .JPEG 모두 잡을 수 있다.
  return regex.test(url);
};

const isDataUrl = (url) => url.startsWith('data:image');  // Base64로 인코딩 된 이미지Url은 data:image로 시작


const OrganismContact = (props) => {

  const { imageUrl, tel, email, current } = props.contact;

  const realImageUrl = (imageUrlValidation(imageUrl) || isDataUrl(imageUrl)) ? imageUrl : PBProfile;  // 확장자(정규표현식 만족하거나, data:image로 시작하면 기존 이미지 url 사용

  return (
    <Container>
      <AtomProfileImage imageUrl={realImageUrl} />
      <MoleculeContact tel={tel} email={email} current={current} />
    </Container>
  );
};

export default OrganismContact;
