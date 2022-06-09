import React from "react";
import Container from "./components/Container";
import Menu from "./components/menu/menu";
import Main from "./pages/main/main";
import FullArticle from "./components/fullArticle/fullArticle";
import Login from "./components/login/login";
import RightHeader from "./components/rightHeader/rightHeader";
import Registration from "./components/registration/registration";
import Profile from "./pages/profile/profile";
import Pagination from "./components/pagination/pagination";
import Articles from "./components/articles/Articles";


function App() {
  return (
    <div>
      <Container>

        <Articles/>
        {/*<FullArticle/>*/}
      </Container>
      <Menu/>
    </div>
  );
}

export default App;
