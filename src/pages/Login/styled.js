import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  margin-top: 20vh;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LoginContainer = styled.form`
  width: 643px;
  height: 379px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 20px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: #384a7d;
  font-size: 32px;
  font-weight: 700;
  margin-top: -50px;
  margin-bottom: 30px;
  font-family: Poppins;
`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  margin-bottom: 10px;
  font-family: Poppins;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid var(--Grey, #c9c9c9);
  width: 426.923px;
  height: 50.066px;
  margin-bottom: 20px;
  font-family: Poppins;
  padding: 5px 10px;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
    color: #999;
    font-family: Poppins;
  }
`;

export const LoginButton = styled.button`
  width: 110px;
  height: 43px;
  flex-shrink: 0;
  background-color: #384a7d;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  font-family: Poppins;
`;
