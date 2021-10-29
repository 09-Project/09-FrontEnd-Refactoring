import MainPage from "./Pages/MainPage/MainPage";
import Header from "./Components/Header/Header";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Upload from "./Pages/upload/upload";
const App:React.FC = () => {
  return (
    <BrowserRouter>
        <Header/>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/upload" component={Upload}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
