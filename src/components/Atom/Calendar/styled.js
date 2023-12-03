/*Calendar */
import styled from "styled-components";
export const ReduceSize = styled.div`
  padding: "0";
  .fc {
    width: 52vw;
    padding: 0 0 40px 0;
  }

  .fc .fc-col-header-cell-cushion {
    display: inline-block;
    padding: 2px 4px;
  }

  //캘린더 타이틀 크기 조정

  .fc-toolbar-title {
    font-size: 24px;
    font-weight: 700;
  }
  //캘릭더 버튼 크기 조절
  .fc-prev-button,
  .fc-next-button,
  .fc-dayGridMonth-button {
    font-size: 14px;
    padding: 5px 10px;
    background-color: #384a7d;
  }

  .fc-today-button {
    font-size: 14px;
    padding: 5px 10px;
    background-color: #757f8b;
    border: none;
  }

  /* 오늘의 날짜 색변경*/
  .fc-dayGridMonth-view tbody .fc-day-today {
    background-color: #eaeff6;
  }

  .fc-event {
    cursor: pointer;
    padding: 5px;
    margin-bottom: 2px;
    background-color: #384a7d;
    border: none;
    color: white;
  }
`;

export const ModalText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const ModalButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  background-color: #ffffff;

  &:active {
    transform: scale(0.95);
  }
`;

export const TextArea = styled.textarea`
  margin-top: 10px;
  border: none;
  width: 300px;
  height: 200px;
  outline: none;
  resize: none;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
    color: #999;
  }
`;

export const AddButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  background-color: #eaeff6;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const TimePicker = styled.input.attrs({
  type: "time",
})`
  width: 150px;
  height: 30px;
`;
