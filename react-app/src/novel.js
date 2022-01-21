import './Game.css';
import scenario from './scenario.json'

import React, { Component, useEffect, useState } from 'react';

function Novelview(props){
  const [count, setCount] = useState(1);
  const [name, setName] = useState(scenario.intro[0].name);
  const [text, setText] = useState(scenario.intro[0].text);

  function go_next(){
    setCount(count+1);
    setName(scenario.intro[count].name);
    setText(scenario.intro[count].text);
    if(scenario.intro[count].name==null){
      document.getElementById("script_name").style.visibility = "hidden";
    }else{
      document.getElementById("script_name").style.visibility = "visible";
    }
  }
  return(
    <div class="novel">
      <div id="script_name">{name}</div>
      <div id = "script_text">
        {text}
        {count===scenario.intro.length?<button onClick={()=>{props.final_next();}} id = "script_next">거래마치기</button>:<button onClick={()=>{go_next();}} id = "script_next">넘어가기</button>}
        
        </div>
    </div>
  );
}



export default Novelview;