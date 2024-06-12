import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  width: 1000px;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
`;
const StHome = styled.div`
  cursor: pointer;
`;
const StNickName = styled.div`
`;
const StProfile = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: rebeccapurple;
`;

const StLoginBtn = styled.div`
  cursor: pointer;
  font-size: 20px;
`;
const StRightHead = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;


function Layout() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/Login');
  }

  return (
    <>
     <HeaderStyle>
      <StHome>Home</StHome>
      <StRightHead>
      <StProfile />
      <StNickName>닉네임</StNickName>
     <StLoginBtn onClick={goToLogin}>로그인</StLoginBtn>
     </StRightHead>
     </HeaderStyle>
    </>
  )
}

export default Layout