import "./styles/Menu.css";

import React, { Component, useEffect, useState } from 'react';

function Menu(props){
  console.log("game_popup:",props.checked);

  return(
    <div className="menu">
        <button className="menu_button" onClick={()=>{document.location.href = "/main";}}>게임하기</button>
        <button className="menu_button" onClick={()=>{document.location.href = "/ending_collect";}}>엔딩 모음</button>
        <button className="menu_button" onClick={()=>{document.location.href = "/credit";}}>크레딧</button>
    </div>
  );
}



export default Menu;