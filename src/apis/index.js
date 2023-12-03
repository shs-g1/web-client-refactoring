import axios from "axios";

const { REACT_APP_SERVER_PORT, NODE_ENV } = process.env;

console.log("REACT_APP_SERVER_PORT", REACT_APP_SERVER_PORT);
console.log("NODE_ENV", NODE_ENV);

// 서버 주소 및 포트 설정
let baseURL;
if (NODE_ENV === "development") {
  // 로컬 환경일 때
  baseURL = `http://${REACT_APP_SERVER_PORT}`;
} else {
  // 프로덕션 환경일 때
  baseURL = "https://our-production-server.com";
}

export const instance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});
