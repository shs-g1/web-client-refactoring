import {
  Container,
  Item,
  ListHeader,
  Text,
  Button,
  Header,
  TimeContainer,
  Time,
} from "./styled";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { instance } from "../../../apis";
import {
  ModalText,
  ButtonContainer,
  ModalButton,
  TextArea,
  AddButton,
  TimePicker,
} from "../../Atom/Calendar/styled";
const Todo = ({ events, onTodoUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todayEvent, setTodayEvent] = useState([]);
  const [apiData, setApiData] = useState({
    date: "",
    time: "",
    title: "",
  });

  useEffect(() => {
    setTodayEvent(events);
  }, [events]);

  const handleaddClick = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
    const day = currentDate.getDate().toString().padStart(2, "0");

    setApiData({ ...apiData, date: `${year}-${month}-${day}` });
    setIsModalOpen(true);
    onTodoUpdate();
  };

  const handleTimeChange = (e) => {
    setApiData({ ...apiData, time: e.target.value });
  };

  const handleInputChange = (e) => {
    setApiData({ ...apiData, title: e.target.value });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    console.log(todayEvent, "todayEvent after update");
  }, [todayEvent]);

  /*일정 추가 */
  const handleAddEvent = async () => {
    try {
      const pbId = localStorage.getItem("pbId");
      const response = await instance.post(
        `/workspace/calendar?pbId=${pbId}`,
        {
          date: apiData.date,
          title: apiData.title,
          time: apiData.time,
        },
        {
          withCredentials: true,
        }
      );

      setTodayEvent((prevEvents) => [...prevEvents, response.data]);

      setApiData({
        date: "",
        time: "",
        title: "",
      });
      closeModal();
    } catch (error) {
      console.error("할일 추가 실패:", error.response.reason);
    }
  };

  return (
    <Container>
      <Header>
        <ListHeader>오늘 일정</ListHeader>
        <Button onClick={handleaddClick}>+</Button>
      </Header>

      {todayEvent ? (
        todayEvent.map((event) => (
          <Item>
            <TimeContainer>
              <Time>{event.time?.substring(0, 5)}</Time>
              <Text>{event.title}</Text>
            </TimeContainer>
          </Item>
        ))
      ) : (
        <Text> 오늘은 일정이 없습니다.</Text>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="일정 추가"
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
        {apiData.date && (
          <ButtonContainer>
            <ModalText>{apiData.date.toLocaleString()}</ModalText>
            <TimePicker onChange={handleTimeChange}></TimePicker>
          </ButtonContainer>
        )}
        <TextArea
          value={apiData.title}
          onChange={handleInputChange}
          rows={10}
          placeholder="일정을 입력하세요"
        ></TextArea>
        <ButtonContainer>
          <ModalButton onClick={closeModal}>닫기</ModalButton>
          <AddButton onClick={handleAddEvent}>추가</AddButton>
        </ButtonContainer>
      </Modal>

    </Container>
  );
};
export default Todo;
