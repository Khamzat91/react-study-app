import React from "react";
import Container from "./components/Container";
import Menu from "./components/menu/menu";
import MenuOpen from "./components/menuOpen/menuOpen";
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/main/main";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./pages/profile/profile";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";


function App() {
  const [isOpened, setIsOpened] = React.useState(false);
  const [mainContentToggle, setMainContentToggle] = React.useState('about');
  const dispatch = useDispatch();
  const state = useSelector(state => state)


  const handleClickMenu = () => {
    setIsOpened(!isOpened)
  }


  const handleClickContentToggle = (pathname) => {
    setMainContentToggle(pathname)
  }



  return (

    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Main mainContentToggle={mainContentToggle}/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </Container>
      {!isOpened ? <Menu handleClickMenu={handleClickMenu}/> :
        <MenuOpen
          handleClickContentToggle={handleClickContentToggle}
          handleClickMenu={handleClickMenu}/>}
    </div>
  );
}

export default App;
