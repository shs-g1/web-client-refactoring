import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";
import {
  ReduceSize,
  ModalText,
  ButtonContainer,
  ModalButton,
  TextArea,
  AddButton,
  TimePicker,
} from "./styled";
import { instance } from "../../../apis";

const Calendar = () => {
  const calendarRef = useRef(null);
  const [apiData, setApiData] = useState({
    date: "",
    time: "",
    title: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([
    {
      date: "",
      time: "",
      title: "",
    },
  ]);

  useEffect(() => {
    getApiList();
  }, []);

  /*캘린더*/
  const getApiList = async () => {
    try {
      const pbId = localStorage.getItem("pbId");
      const response = await instance.get(`/workspace?pbId=${pbId}`);
      setEvents(response.data.calendarResponseDto);
    } catch (error) {
      console.log(error);
    }
  };

  /*일정 추가 */
  const handleAddEvent = async () => {
    try {
      const pbId = localStorage.getItem("pbId");
      console.log(apiData, "apiData");
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

      //첫 이벤트 두번 post 방지
      if (events.length === 0) {
        setEvents([response.data]);
      } else {
        setEvents((prevEvents) => [...prevEvents, response.data]);
      }

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

  const handleDateClick = (eventInfo) => {
    setApiData({ ...apiData, date: eventInfo.dateStr });
    setIsModalOpen(true);
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

  return (
    <ReduceSize>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events}
        headerToolbar={{
          start: "prev,next",
          center: "title",
          end: "today",
        }}
        editable={true}
        dateClick={handleDateClick}
        titleFormat={{
          month: "numeric",
          year: "numeric",
        }}
      />
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
    </ReduceSize>
  );
};

export default Calendar;
