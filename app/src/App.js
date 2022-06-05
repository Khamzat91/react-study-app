import React from "react";
import Container from "./components/Container";
import Menu from "./components/menu/menu";
import Main from "./pages/main/main";


function App() {
  return (
    <div>
      <Container>
        <Main/>
      </Container>
      <Menu/>
    </div>
  );
}

export default App;
