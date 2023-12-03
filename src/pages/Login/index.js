import {
  Title,
  LoginContainer,
  Label,
  Input,
  LoginButton,
  InputContainer,
  Error,
  Container,
} from "./styled";
import { LoginHeader } from "../../components/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../apis";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [successLogin, setSuccessLogin] = useState(true);

  const navigate = useNavigate();

  const handleNickNameChange = (event) => {
    setUserId(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userId, password, "userId, password");

    try {
      const response = await instance.post(
        `/login`,
        {
          loginId: userId,
          loginPw: password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // 로그인 성공 처리

      localStorage.setItem("pbId", response.data.payload.login.pbId);
      localStorage.setItem("pbName", response.data.payload.login.pbName);

      alert("로그인 성공", response.data.payload.login.pbName);

      navigate("/main");
    } catch (error) {
      setSuccessLogin(false);
      console.error("로그인 실패:", error.error);
    }
  };

  return (
    <>
      <LoginHeader></LoginHeader>
      <Container>
        <Title>LOGIN</Title>
        <LoginContainer onSubmit={handleFormSubmit}>
          <InputContainer>
            <Label>ID</Label>
            <Input
              id="userId"
              placeholder="ID"
              type="text"
              value={userId}
              onChange={handleNickNameChange}
            ></Input>
            <Label>PASSWORD</Label>
            <Input
              id="password"
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            ></Input>
          </InputContainer>
          <LoginButton type="submit">LOGIN</LoginButton>
          {successLogin ? null : (
            <Error>아이디와 비밀번호를 다시 확인해주세요.</Error>
          )}
        </LoginContainer>
      </Container>
    </>
  );
};
export default Login;
