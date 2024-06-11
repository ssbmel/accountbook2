import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StContainer = styled.div`
width: 400px;
height: 500px;
background-color: rgba(255, 231, 170, 1);
margin: 200px auto;
display: flex;
`;
const StIdPwBox = styled.div`
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
width:200px;
display: grid;
margin-top: 20px;
`;
const StBtn = styled.button`
width: 210px;
height: 30px;
background-color: #274211;
color: white;
border: none;
margin-top:5px;
cursor: pointer;
`;

function Login() {
  const navigate = useNavigate();

  const goToSign = () => {
    navigate('/Sign')
  }

  return (
    <>
      <StContainer>
        <StIdPwBox>
          <StInput type="text" placeholder="아이디를 입력하세요." />
          <StInput type="password" placeholder="비밀번호를 입력하세요." />
          <StBtnBox>
            <StBtn>로그인</StBtn>
            <StBtn onClick={goToSign}>회원가입</StBtn>
          </StBtnBox>
        </StIdPwBox>
      </StContainer>
    </>
  );
}

export default Login;
