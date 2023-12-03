// components/Atom/profile-section/index.js

import React from "react";
import { Container, Text, SmallText, Title } from "./styled";

const AtomProfileSection = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {content.type === "introduction" && <Text>{content.introduction}</Text>}
      {content.type === "experience" && (
        <Text>
          {content.experience.map((exp, index) => (
            <SmallText key={index}>
              <Text>
                {exp.position} {exp.company}
              </Text>
              {exp.period}
            </SmallText>
          ))}
        </Text>
      )}
      {content.type === "education" && (
        <Text>
          {content.education.map((edu, index) => (
            <SmallText key={index}>
              <Text>{edu.school}</Text>
              {edu.period}
            </SmallText>
          ))}
        </Text>
      )}
      {content.type === "certificate" && (
        <Text>
          {content.certificate.map((cert, index) => (
            <Text key={index}>
              <Text>{cert}</Text>
            </Text>
          ))}
        </Text>
      )}
    </Container>
  );
};

export default AtomProfileSection;
