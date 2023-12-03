// components/Atom/calendar-input/index.js

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const Required = styled.span`
  color: #c13c3c;
  font-size: 18px;
  margin-right: 3px;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-right: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 18px;
  color: #d9d9d9;
  margin-left: 5px;
`;

const StyledDatePicker = styled(DatePicker)`
  height: 38px;
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 10px;
`;

const AtomCalendarInput = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(value || ""); //	props로 넘어온 value를 초기값(공백)으로 할당

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <Container>
      <StyledDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yy-MM-dd"
        placeholderText="날짜를 선택하세요"
      />
      {selectedDate && (
        <p>선택된 날짜: {selectedDate.toLocaleDateString("ko-KR")}</p>
      )}
    </Container>
  );
};

export default AtomCalendarInput;
