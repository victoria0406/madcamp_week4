import './Game.css';


import React, { Component, useEffect, useState } from 'react';

const scenario = [
    {
      "text": "안녕하세요.닉네임 만장일치 입니다."
    },
    {
      "name": "김만정",
      "text": "두번쨰 샘플 텍스트입니다."
    },
    {
      "text": "이름이 없는 경우에는 이름 창이 사라졌으면 좋겠어요."
    },
    {
      "name": "개",
      "text": "왈왈"
    }
  ]
function Novelview(props){
  const [count, setCount] = useState(1);
  const [name, setName] = useState(scenario[0].name);
  const [text, setText] = useState(scenario[0].text);

  function go_next(){
    setCount(count+1);
    setName(scenario[count].name);
    setText(scenario[count].text);
  }
  return(
    <div class="novel">
      {name==null?<></>:<div id="script_name">{name}</div>}
      <div id = "script_text">
        {text}
        {count===scenario.length?<button onClick={()=>{props.final_next();}} id = "script_next">거래마치기</button>:<button onClick={()=>{go_next();}} id = "script_next">넘어가기</button>}
        
        </div>
    </div>
  );
}



export default Novelview;