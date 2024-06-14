/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  InputBox,
  InputContent,
  MonthBoxList,
  MonthBox,
  ListBox,
  ListContent,
  Text,
  InputBtn,
  InputStyle,
  AmountText,
} from "../style/stylecomponent.jsx";
import { Link, Router, json } from "react-router-dom";
import styled from "styled-components";
import Header from "../loginpages/Layout.jsx";
import Layout from "../loginpages/Layout.jsx";
import axios from "axios";

function Home({ contents, setContents }) {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [accountList, setAccountList] = useState([]);

  const clickedMonth = Number(localStorage.getItem("clickedMonth"));
  const [nowMonth, setNowMonth] = useState(clickedMonth);
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const getAccountList = async () => {
    try{
      const response = await axios.get("http://localhost:5000/accounts");
      setAccountList(response.data);
      } catch(e) {
      window.alert('뭔가 잘못 받아옴')
    }
  };
  useEffect(() => {
    getAccountList();
  },[]);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(contents));
  }, [contents]);

 const addAccount = async (newContent) => { // 값을 어디서 받죠?
  // 인풋창에 입력한 데이터를 db에 넣어달라고 부탁한다.
  try{
    await axios.post("http://localhost:5000/accounts",newContent);
  } catch (e) {
    window.alert('뭔가 잘못됨')
  }
 }

  // 1. 서버로부터 데이터를 받아온다.

  // 2. 받아온 데이터를 state에 넣는다.
  
  // 3. state를 어떻게 뿌려주지?

  // 개추 
  

  const addContentHandler = () => {
    if (item === "" || amount === "" || description === "") {
      alert("빈칸을 채워주세요!");
      return;
    }
    const newContent = {
      id: uuidv4(),
      date: date,
      item: item,
      amount: amount,
      description: description,
    };
    // 1. DB에 넣어달라고 부탁한다.
    addAccount(newContent) // addAccount함수한테 자 이거 받아 (newContent)

    setItem("");
    setAmount("");
    setDescription("");
  };

  const onClickMonth = (month) => {
    setNowMonth(month);
    localStorage.setItem("clickedMonth", month);
  };

  return (
    <>
      <Layout />
      <Container>
        <InputBox>
          <InputContent>
            날짜
            <InputStyle
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </InputContent>
          <InputContent>
            항목
            <InputStyle
              type="text"
              placeholder="지출 항목"
              value={item}
              onChange={(e) => {
                setItem(e.target.value);
              }}
            />
          </InputContent>
          <InputContent>
            금액
            <InputStyle
              type="number"
              placeholder="지출 금액"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </InputContent>
          <InputContent>
            내용
            <InputStyle
              type="text"
              placeholder="지출 내용"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </InputContent>
          <InputContent>
            <InputBtn onClick={addContentHandler}>저장</InputBtn>
          </InputContent>
        </InputBox>

        <MonthBoxList>
          {month.map((m, index) => {
            return (
              <MonthBox
                key={index}
                onClick={() => onClickMonth(m)}
                backgroundcolor={
                  nowMonth === m ? "rgba(249, 181, 4, 1)" : "white"
                }
                color={nowMonth === m ? "black" : undefined}
              >
                {m}월
              </MonthBox>
            );
          })}
        </MonthBoxList>
        <ListBox>
          {accountList
            .filter(
              (content) =>
                content.date.split("-")[1] ===
                nowMonth.toString().padStart(2, "0")
            )
            .map((content) => (
              <List key={content.id} content={content} />
            ))}
        </ListBox>
      </Container>
    </>
  );
}

export default Home;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;

const List = ({ content }) => {
  return (
    <ListContent>
      <LinkStyle to={`/DetailPage/${content.id}`}>
        <Text>{content.date}</Text>
        <Text style={{ width: "600px" }}>
          {content.item} - {content.description}
        </Text>
        <AmountText>{content.amount}원</AmountText>
      </LinkStyle>
    </ListContent>
  );
};
