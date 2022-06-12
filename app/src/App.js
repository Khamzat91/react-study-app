import React from "react";
import Container from "./components/Container";
import Menu from "./components/menu/menu";
import MenuOpen from "./components/menuOpen/menuOpen";
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/main/main";
import Profile from "./pages/profile/profile";


function App() {
  const [isOpened, setIsOpened] = React.useState(false);

  const handleClickMenu = () => {
    setIsOpened(!isOpened)
  }

  return (

    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Container>
      {!isOpened ? <Menu handleClickMenu={handleClickMenu}/> : <MenuOpen handleClickMenu={handleClickMenu}/>}
    </div>
  );
}

export default App;
