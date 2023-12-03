import {
  Container,
  MainContainer,
  ScheduleContainer,
  RightContainer,
  BackgroundImage,
  BackgroundImage2,
  GreyTitle,
} from "./styled";

import {
  Header,
  PageTitle,
  Calendar,
  Todo,
  SubTitle,
  Incentive,
  Table,
} from "../../components/index";

import CustomerImg from "../../assets/images/customerImg.png";
import { useEffect, useState } from "react";
import { instance } from "../../apis";

const Main = () => {
  const [calendarKey, setCalendarKey] = useState(0);
  const [events, setEvents] = useState([]);
  const [todayEvents, setTodayEvents] = useState([]);
  const [tables, setTables] = useState([]);
  const [incentive, setIncentive] = useState(0);
  const pbName = localStorage.getItem("pbName");
  const handleTodoUpdate = () => {
    console.log("Todo updated!");
    setCalendarKey((prevKey) => prevKey + 1);
  };

  /*event 받기 */
  const getApiList = async () => {
    try {
      const pbId = localStorage.getItem("pbId");
      const response = await instance.get(`/workspace?pbId=${pbId}`);
      setEvents(response.data.calendarResponseDto);
      setTables(response.data.clientResponseDto);
      setIncentive(response.data.incentive);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiList();
  }, []);

  useEffect(() => {
    /*오늘 일정 필터링 */
    if (events.length > 0) {
      const currentDate = new Date().toLocaleDateString();
      const filteredEvents = events.filter(
        (event) => new Date(event.date).toLocaleDateString() === currentDate
      );

      setTodayEvents(filteredEvents);
    } else {
      console.log("events is null");
    }
  }, [events]);

  const tableHeader = [
    "이름",
    "전화번호",
    "이메일",
    "자산총액",
    "목표수익률",
    "현재수익률",
  ];

  return (
    <>
      <Header tab={1} pbName={`${pbName}`}></Header>

      <Container>
        <MainContainer>
          <BackgroundImage>
            <PageTitle blueTItle={`${pbName}님의`} title="작업 공간입니다. " />
            <SubTitle subTitle="일정 관리"></SubTitle>
            <ScheduleContainer>
              <Calendar key={calendarKey}></Calendar>
              <RightContainer>
                <Todo
                  events={todayEvents}
                  onTodoUpdate={handleTodoUpdate}
                ></Todo>
                <Incentive
                  title="누적 인센티브"
                  incentiveTitle="누적된 인센티브는"
                  incentive={incentive}
                ></Incentive>
              </RightContainer>
            </ScheduleContainer>
          </BackgroundImage>
          <BackgroundImage2>
            <SubTitle subTitle="고객 리스트"></SubTitle>
            <GreyTitle>{tables.length}명의 고객님과 함께하고 있어요.</GreyTitle>
            <Table nodes={tables} header={tableHeader}></Table>
          </BackgroundImage2>
        </MainContainer>
      </Container>
    </>
  );
};
export default Main;
