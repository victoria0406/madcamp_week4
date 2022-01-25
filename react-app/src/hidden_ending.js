import './styles/Game.css';
import police_ending from './scenario/hidden_ending.json'
import innerText from 'react-innertext'
import SelectorView from './selector';

import React, { Component, useEffect, useState } from 'react';



function HiddenEndingview(props) {
  const [count, setCount] = useState(1);
  let [name, setName] = useState(police_ending[0].case[0].name);
  const [text, setText] = useState(police_ending[0].case[0].text);
  const [type, setType] = useState(police_ending[0].case[0].type);

  if (name == "Player") {
    name = props.user_name;
    //console.log("이름 바꾸기" + name + "\n user name: " + user_name);
  }

  function go_next() {
    setCount(count + 1);
    setName(police_ending[0].case[count].name);
    setText(police_ending[0].case[count].text);
    setType(police_ending[0].case[count].type);
  }

  //console.log("name: ", shuffled[0].case.name, "text: ", shuffled[0].case.text);

  return (

    <div class="novel">
      {name == null ? <></> : <div id="script_name">{name}</div>}
      <div id="script_text">
        {text}
        {count === police_ending[0].case.length   ? (
          <button
            onClick={() => {
              props.final_next();
            }}
            id="script_next"
          >
            거래마치기
          </button>
        ) : (
          <button
            onClick={() => {
              go_next();
            }}
            id="script_next"
          >
            넘어가기
          </button>
        )}
      </div>
    </div>
  );
}

export default HiddenEndingview;
