import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: flex-end;
  gap: 10px;
  width: 1000px;
  cursor: pointer;
  
`;

function Header() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/Login');
  }

  return (
    <>
     <HeaderStyle>
     <button onClick={goToLogin}>로그인</button>
     </HeaderStyle>
    </>
  )
}

export default Header