import './Game.css';
import scenario from './scenario.json'
import test from './test.json'
import innerText from 'react-innertext'
import SelectorView from './selector';

import React, { Component, useEffect, useState } from 'react';


function Novelview(props) {
  const [count, setCount] = useState(1);
  let [name, setName] = useState(test[0].name);
  const [text, setText] = useState(test[0].text);
  const [type, setType] = useState(test[0].type);
  const [user_name, setUsername] = useState(test[0].name);
  //const user = props.user_name;

  if (name == "Player") {
    name = props.user_name;
    console.log("이름 바꾸기" + name + "\n user name: " + user_name);
  }


  function go_next() {
    setCount(count + 1);
    setName(test[count].name);
    setText(test[count].text);
    setType(test[count].type);
  }

  return (

    < div class="novel" >
      {/* 이름, 텍스트 */}

      <div>
        {type == "select" ? <SelectorView /> : console.log("non select area!")}
      </div>
      {name == null ? <></> : <div id="script_name"> { name } </div>}
      <div id="script_text">
        {text}
        {count === scenario.length ? (
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

export default Novelview;
