/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ListContext } from "../Router";
import axios from "axios";

const HeaderStyle = styled.div`
  display: flex;
  width: 1000px;
  font-size: 15px;
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
  cursor: pointer;
`;

const StLoginBtn = styled.div`
  cursor: pointer;
  font-size: 15px;
`;
const StRightHead = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;


function Layout() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(ListContext);
  const [nickname, setNickname] = useState("");
  const token = localStorage.getItem('accessToken');

  useEffect (()=>{
    const fetchUserData = async () => {
      
          const userResponse = await axios.get('https://moneyfulpublicpolicy.co.kr/user', {
            headers: { Authorization: `Bearer ${token}` },
          });
          const { id, avatar, nickname} = userResponse.data
          setUserData({ id, avatar, nickname});
          setNickname(nickname);
    };
    fetchUserData();
  },[])

  const goToLogin = () => {
    navigate('/Login');
  }

  const goToHome = () => {
    navigate('/');
  }

  const goToProfile = () => {
    navigate('/MyProfile')
  }

  return (
    <>
     <HeaderStyle>
      <StHome onClick={goToHome}>Home</StHome>
      <StRightHead>
      <StProfile onClick={goToProfile}/>
      <StNickName>{nickname}</StNickName>
     <StLoginBtn onClick={goToLogin}>로그인</StLoginBtn>
     </StRightHead>
     </HeaderStyle>
    </>
  )
}

export default Layout