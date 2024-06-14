/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Layout from "../loginpages/Layout"
import { useContext, useState } from "react";
import { ListContext } from "../Router";


const DetailContainer = styled.div`
  width: 1000px;
  height: 600px;
  margin: 100px auto;
  padding: 20px;
  background-color: rgba(255, 231, 170, 1);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align : center;
  display: grid;
`;
const StImg = styled.div`
 width: 200px;
 height: 200px;
 border-radius: 50%;
 margin: 0 auto;
 background-color: white;
`;
const StNickName = styled.input`
 width: 200px;
 height: 30px;
 border: none;  

`;
const StProfileButton = styled.div`
  height: 35px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function MyProfile() {
  const { userData, setUserData } = useContext(ListContext);
  const [nickname, setNickname] = useState('');


  return (
    <>
      <Layout />
      <DetailContainer>
        <StImg></StImg>
        <StProfileButton>프로필 변경</StProfileButton>
        <StNickName value={userData?.nickname}
        onChange={(e)=>setNickname(e.target.value)}/>
        <StProfileButton>닉네임 변경</StProfileButton>
      </DetailContainer>
    </>
  )
}

export default MyProfile