import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: space-between;
  width: 1000px;
  font-size: 20px;
`;
const StHome = styled.div`

`;
const HeaderBtn = styled.button`
  border: 1px solid #274211;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;
// const StProfile = styled.img`
//   background-image : url()
// `;

function Layout() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/Login');
  }

  return (
    <>
     <HeaderStyle>
      <StHome>Home</StHome>
      <div>닉네임</div>
     <HeaderBtn onClick={goToLogin}>로그인</HeaderBtn>
     </HeaderStyle>
    </>
  )
}

export default Layout