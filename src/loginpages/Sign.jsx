import { useState } from "react";
import styled from "styled-components";

const StContainer = styled.div`
    width: 400px;
    height: 600px;
    background-color: rgba(255, 231, 170, 1);
    margin: 200px auto;
    display: flex;
    padding: 0%;
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
    cursor: pointer;
  `;

function Sign() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [inputNickName, setInputNickName] = useState('');
    const maxIdText = 10;
    const maxPwText = 15;

    const handleChangeId = (e) => {
      let newIdValue = e.target.value;

      newIdValue = newIdValue.replace(/[^a-zA-Z0-9]/g, '');

      if(newIdValue.length <= maxIdText) {
        setInputId(newIdValue);
      }
    }

    const handleChangePw = (e) => {
      let newPwValue = e.target.value;

      newPwValue = newPwValue.replace(/[^a-zA-Z0-9]/g, '');

      if(newPwValue.length <= maxPwText) {
        setInputPw(newPwValue);
      }
    }

    const handleChangeNickName = (e) => {
      let newNickNameValue = e.target.value;

      newNickNameValue = newNickNameValue.replace(/[^a-zA-Z0-9]/g, '');

      if(newNickNameValue.length <= maxIdText) {
        setInputNickName(newNickNameValue);
      }
    }

  return (
    <>
      <StContainer>
        <StIdPwBox>
          <StInput type="text" placeholder="아이디를 입력하세요." value={inputId} onChange={handleChangeId} />
          <StInput type="password" placeholder="비밀번호를 입력하세요." value={inputPw} onChange={handleChangePw}/>
          <StInput type="text" placeholder="닉네임을 입력하세요." value={inputNickName} onChange={handleChangeNickName}/>
          <StBtnBox>
          <StBtn>가입하기</StBtn>
          </StBtnBox>
        </StIdPwBox>
      </StContainer>
    </>
  );
}

export default Sign;
