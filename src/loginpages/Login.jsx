import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StContainer = styled.div`
  width: 400px;
  height: 500px;
  background-color: rgba(255, 231, 170, 1);
  margin: 200px auto;
  display: flex;
`;
const StIdPwForm = styled.form`
  width: auto;
  height: auto;
  margin: auto;
  justify-content: center;
  display: grid;
  gap: 20px;
`;
const StInput = styled.input`
  width: 200px;
  height: 30px;
`;
const StBtnBox = styled.div`
  width: 200px;
  display: grid;
  margin-top: 20px;
`;
const StBtn = styled.button`
  width: 210px;
  height: 35px;
  background-color: #274211;
  color: white;
  border: none;
  margin-top: 5px;
  cursor: pointer;
`;
const StLoginTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

function Login() {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const navigate = useNavigate();

  const onSubmitLoginHandler = async () => {
    const loginUser = {
      id: loginId,
      password: loginPw,
    };
    const { data } = await axios.post(
      "https://moneyfulpublicpolicy.co.kr/login",
      loginUser
    );
    localStorage.setItem('token', data.accessToken);
    navigate("/");
  };

  const goToSign = () => {
    navigate("/Sign");
  };

  return (
    <>
      <StContainer>
        <StIdPwForm
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitLoginHandler();
            alert("로그인 성공!");
          }}
        >
          <StLoginTitle>로그인</StLoginTitle>
          <StInput
            type="text"
            placeholder="아이디를 입력하세요."
            value={loginId}
            onChange={(e) => {
              setLoginId(e.target.value);
            }}
          />
          <StInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={loginPw}
            onChange={(e) => {
              setLoginPw(e.target.value);
            }}
          />
          <StBtnBox>
            <StBtn>로그인</StBtn>
            <StBtn onClick={goToSign}>회원가입</StBtn>
          </StBtnBox>
        </StIdPwForm>
      </StContainer>
    </>
  );
}

export default Login;
