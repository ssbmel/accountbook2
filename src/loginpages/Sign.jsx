import styled from "styled-components";

function Sign() {
  const StContainer = styled.div`
    width: 400px;
    height: 600px;
    background-color: rgba(255, 231, 170, 1);
    margin: 100px auto;
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


  return (
    <>
      <StContainer>
        <StIdPwBox>
          <StInput type="text" placeholder="아이디를 입력하세요." />
          <StInput type="password" placeholder="비밀번호를 입력하세요." />
          <StInput type="text" placeholder="닉네임을 입력하세요." />
          <StBtnBox>
          <StBtn>가입하기</StBtn>
          </StBtnBox>
        </StIdPwBox>
      </StContainer>
    </>
  );
}

export default Sign;
