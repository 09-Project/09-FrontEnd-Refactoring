import React, { useEffect, useState } from 'react';
import MainPage from "./Pages/MainPage/MainPage";
import Header from "./Components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Upload from "./Pages/upload";
import Profile from "./Components/Porfile";
import LoginModal from "./Components/LoginModal";
import SignUp from './Pages/signup';
import GoodsDetail from './Pages/goodsDetail';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './modules/redux';
import axios from 'axios';
import { API_HOST } from './constant/api';
import SearchPage from './Pages/search';
import { useLocation } from "react-router";
import Footer from './Components/footer';
import { setMemberInfo } from './modules/redux/action/member';
const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("access_token is changed")
    const access_token = localStorage.getItem("access_token");
    const setMember = (info: any) => dispatch(setMemberInfo(info))
    axios.get(API_HOST + '/member/information', {
      headers: { Authorization: `Bearer ${access_token}` }
    })
      .then((res) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        setMember(res.data)
        localStorage.setItem('memberName', res.data.name)
        localStorage.setItem('login', 'true');
      })
      .catch(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem('login')
      });
  }, [localStorage.getItem("access_token")])
  const Modalstatus = useSelector((state: RootState) => state.setmodal.modal);
  const axiosApiInstance = axios.create();
  axiosApiInstance.interceptors.request.use(
    async config => {
      console.log('start')
      const accessToken = localStorage.getItem("access_token")
      config.headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      }
      return config;
    },
    err => {
      Promise.reject(err);
    }
  )
  const page = useSelector((state: RootState) => state.setPage.page)
  return (
    <BrowserRouter>
      {Modalstatus ?
        <LoginModal />
        : ''
      }
      {page === '/signup' ?
        '' :
        <Header />
      }
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/upload" component={Upload} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={SignUp} />
        <Route path="/product" component={GoodsDetail} />
        <Route path="/search" component={SearchPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
