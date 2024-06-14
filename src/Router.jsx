import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Login from './loginpages/Login';
import Sign from './loginpages/Sign';
import Layout from './loginpages/Layout';
import MyProfile from './pages/MyProfile';

export const ListContext = createContext();

const Router = () => {
  const [contents, setContents] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/accounts');
        setContents(response.data);
      } catch (error) {
        console.log('Error fetching contents:', error);
      }
    };
    fetchContents();
  }, [userData]);

  return (
    <ListContext.Provider value={{ contents, userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home contents={contents} setContents={setContents} />} />
          <Route path="/DetailPage/:id" element={<DetailPage contents={contents} setContents={setContents} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Layout" element={<Layout />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </ListContext.Provider>
  );
};

export default Router;
