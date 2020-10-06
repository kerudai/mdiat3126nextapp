import React, {useState} from 'react';
import Menu from '../comps/Menu';
import Content from '../comps/Content';

export default function Home() {
  const [contentColor, setContentColor] = useState(false);
  const [contentImage, setContentImage] = useState(false);
  const [contentTxtColor, setContentTxtColor] = useState(false);
  const [contentH1Txt, setContentH1Txt] = useState("Welcome to my app!!");

  const HandleMenu = (str) => {
    //capture what happened in the menu and change the page state based on it
    //alert(str);
    if (str === "bg"){
      setContentColor("#DCA877");
    } else if  (str === "img") {
      setContentImage("mario.jpg");
      setContentTxtColor("white");
    } else if (str === "help") {
      setContentH1Txt("HI!")
    }
  }

  return <div className="home">
    <div className="content">
      <Content bgcolor={contentColor} bgimage={contentImage} txtcolor={contentTxtColor}>
        <h1>{contentH1Txt}</h1>
        <div>Hi</div>
      </Content>
    </div>
    <div className="menu">
      <Menu onMenuSelect={HandleMenu}/>
    </div>
  </div>
    
}
