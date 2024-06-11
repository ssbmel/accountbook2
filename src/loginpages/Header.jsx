import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: flex-end;
  width: 1000px;
`;
const HeaderBtn = styled.button`
  border: 1px solid #274211;
  border: none;
  cursor: pointer;
  font-size: 15px;
  margin-top: 20px;
`;

function Header() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/Login');
  }

  return (
    <>
     <HeaderStyle>
     <HeaderBtn onClick={goToLogin}>로그인</HeaderBtn>
     </HeaderStyle>
    </>
  )
}

export default Header