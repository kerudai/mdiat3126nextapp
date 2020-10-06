import React, {useState} from 'react';
import Menu from '../comps/Menu';
import Content from '../comps/Content';

export default function Home() {
  const [contentColor, setContentColor] = useState(false);
  const [contentImage, setContentImage] = useState(false);

  const HandleMenu = (str) => {
    //capture what happened in the menu and change the page state based on it
    //alert(str);
    if (str === "bg"){
      setContentColor("#DCA817");
    } else if  (str === "img") {
      setContentImage("mario.jpg")
    }
  }

  return <div className="home">
    <div className="content">
      <Content bgcolor={contentColor} bgimage={contentImage}>
        <h1>Welcome to my app</h1>
        <div>Hi</div>
      </Content>
    </div>
    <div className="menu">
      <Menu onMenuSelect={HandleMenu}/>
    </div>
  </div>
    
}
