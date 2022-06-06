import React from "react";
import Container from "./components/Container";
import Menu from "./components/menu/menu";
import Main from "./pages/main/main";
import FullArticle from "./components/fullArticle/fullArticle";


function App() {
  return (
    <div>
      <Container>
        <Main/>
        {/*<FullArticle/>*/}
      </Container>
      <Menu/>
    </div>
  );
}

export default App;
