import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab } from "../../index";
import { Container, TabNav, UserBox, Text, Image } from "./styled";
import pbProfile from "../../../assets/images/pbProfile.png";

const Header = ({ tab, pbName }) => {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState(tab);

  const handleTabSelect = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  return (
    <Container>
      <TabNav>
        <Tab
          Text="작업 공간"
          onSelect={() => {
            handleTabSelect(1);
            navigate("/main");
          }}
          isSelected={selectedTab === 1}
        />
        <Tab
          Text="고객 관리"
          onSelect={() => {
            handleTabSelect(2);
            navigate("/management/1");
          }}
          isSelected={selectedTab === 2}
        />
        <Tab
          Text="내 정보 수정"
          onSelect={() => {
            handleTabSelect(3);
            navigate("/mypage");
          }}
          isSelected={selectedTab === 3}
        />
      </TabNav>
      <UserBox>
        <Text>{pbName}님 안녕하세요!</Text>
        <Image src={pbProfile}></Image>
      </UserBox>
    </Container>
  );
};
export default Header;
