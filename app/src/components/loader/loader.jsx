import React from "react"
import ContentLoader from "react-content-loader"
import Container from "../Container";
import "./index.scss";
import Articles from "../articles/Articles";
import Menu from "../menu/menu";


const Loader = (props) => (
  <div className="loader__inner">
    <Container>
      <div className="loader__inner-box">
      <ContentLoader
        speed={2}
        width={720}
        height={1024}
        viewBox="0 0 720 1024"
        backgroundColor="#d1d1d1"
        foregroundColor="#f0f0f0"
        {...props}
      >
        <rect x="72" y="129" rx="6" ry="6" width="145" height="20"/>
        <rect x="227" y="129" rx="6" ry="6" width="50" height="20"/>
        <rect x="72" y="278" rx="6" ry="6" width="584" height="18"/>
        <rect x="72" y="526" rx="6" ry="6" width="555" height="18"/>
        <rect x="72" y="310" rx="6" ry="6" width="330" height="18"/>
        <rect x="72" y="161" rx="5" ry="5" width="335" height="40"/>
        <rect x="72" y="213" rx="6" ry="6" width="441" height="40"/>
        <rect x="72" y="388" rx="0" ry="0" width="1" height="3"/>
        <rect x="72" y="558" rx="6" ry="6" width="508" height="18"/>
        <rect x="72" y="590" rx="6" ry="6" width="584" height="18"/>

        <rect x="72" y="680" rx="6" ry="6" width="555" height="18"/>
        <rect x="72" y="712" rx="6" ry="6" width="508" height="18"/>
        <rect x="72" y="744" rx="6" ry="6" width="584" height="18"/>

        <rect x="72" y="834" rx="6" ry="6" width="555" height="18"/>
        <rect x="72" y="866" rx="6" ry="6" width="508" height="18"/>
        <rect x="72" y="898" rx="6" ry="6" width="584" height="18"/>

      </ContentLoader>
        <Articles/>
      </div>
    </Container>
   <Menu/>
  </div>
)

export default Loader