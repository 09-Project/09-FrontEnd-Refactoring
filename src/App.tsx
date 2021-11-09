import React,{useEffect, useState} from 'react';
import MainPage from "./Pages/MainPage/MainPage";
import Header from "./Components/Header/Header";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Upload from "./Pages/upload";
import Profile from "./Components/Porfile";
import LoginModal from "./Components/LoginModal";
import SignUp from './Pages/signup';
import { useLocation } from 'react-router-dom';
import GoodsDetail from './Pages/goodsDetail';

const App:React.FC = () => {
  const [login,setLogin] = useState(false);
  const [signup,setSignup] = useState(false);
  return (
    <BrowserRouter>
    {login ? 
        <LoginModal setLogin={setLogin}/> : ''
    }
    {signup ? 
        ''
    : <Header setLogin={setLogin}/>}
    <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/product" component={GoodsDetail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
