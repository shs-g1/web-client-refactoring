// components/Organism/profile-section/index.js
import AtomProfileSection from "../../Atom/profile-section";

const OrganismProfileSection = (props) => {

  const introductionData = {
    type: "introduction",
    introduction: props.profileData.introductionData
  }

  const experienceData = {
    type: "experience",
    experience: props.profileData.experienceData
  }

  const educationData = {
    type: "education",
    education: props.profileData.educationData
  }

  const certificateData = {
    type: "certificate",
    certificate: props.profileData.certificateData
  }

  return (
    <div>
      <AtomProfileSection title="자기소개" content={introductionData} />
      <AtomProfileSection title="경력" content={experienceData} />
      <AtomProfileSection title="학력" content={educationData} />
      <AtomProfileSection title="자격증" content={certificateData} />
    </div>
  );
};

export default OrganismProfileSection;
