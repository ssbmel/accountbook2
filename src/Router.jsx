import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
import Login from './loginpages/Login';
import Sign from './loginpages/Sign';
import axios from 'axios';
import Layout from './loginpages/Layout';

export const ListContext = createContext();

const Router = () => {
  const [contents, setContents] = useState([]);

  
  useEffect(()=>{
    const fetchPost = async () => {
      try {
        const data = await axios.get("http://localhost:5000/accounts");
        setContents(data.data);
      } catch(error){
        console.log(error);
      }
    } 
    fetchPost();
  },[]);


  return (
    <ListContext.Provider value={{ contents }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home contents={contents} setContents={setContents}/>} />
          <Route path="/DetailPage/:id" element={<DetailPage contents={contents} setContents={setContents}/> }/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Sign" element={<Sign/>}/>
          <Route path="/Layout" element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
    </ListContext.Provider>
  );

};

export default Router;