// components/Atom/profile-image/index.js
import React from "react";
import { RoundImage } from "./styled";

const AtomProfileImage = ({ imageUrl }) => {
  return <RoundImage src={imageUrl} alt="프로필 사진" />;
};

export default AtomProfileImage;
