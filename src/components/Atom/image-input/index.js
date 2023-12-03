// components/Atom/image-input/index.js
import React, { useState } from "react";
import {
  Container,
  ImageContainer,
  Text,
  Image,
  Input,
  FileButton,
  Label,
} from "./styled";

const AtomImageInput = ({ onUpdate, attribute }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result;
      onUpdate(attribute, base64String);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Container>
      <Text>프로필 사진</Text>
      {/* 이미지를 표시하는 부분 */}
      <ImageContainer>
        {selectedImage && (
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxWidth: "300px" }}
          />
        )}
      </ImageContainer>

      {/* 파일 선택을 위한 파일 입력창 */}
      <FileButton>
        <Label htmlFor="fileInput">파일 선택</Label>
      </FileButton>
      <Input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }} // Hide the original file input
      />
    </Container>
  );
};

export default AtomImageInput;
