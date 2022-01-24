import './styles/Game.css';
import scenario from './scenario.json'
import trade_scenario from './trade_scenario.json'
import test from './test.json'
import innerText from 'react-innertext'
import SelectorView from './selector';

import React, { Component, useEffect, useState } from 'react';


function Novelview(props) {

  const shuffle = () => (Math.random() - 0.5);
  const shuffled = [...trade_scenario].sort(shuffle);
  //console.log("shuffled case", shuffled);


  const [count, setCount] = useState(0);
  let [name, setName] = useState(shuffled[0].case.name);
  const [text, setText] = useState(shuffled[0].case.text);
  const [type, setType] = useState(shuffled[0].case.type);
  //const [user_name, setUsername] = useState(shuffled.case[0].name);

  console.log("shuffled array[0]: ", shuffled[0].case[0])

  if (name == "Player") {
    name = props.user_name;
    //console.log("이름 바꾸기" + name + "\n user name: " + user_name);
  }


  function go_next() {
    setCount(count + 1);
    setName(shuffled[0].case[count].name);
    setText(shuffled[0].case[count].text);
    setType(shuffled[0].case[count].type);
  }

  return (

    < div class="novel" >
      <div>
        {type == "select" ? <SelectorView /> : console.log("non select area!")}
      </div>

      {/* 이름, 텍스트 */}
      {name == null ? <></> : <div id="script_name"> {name} </div>}
      <div id="script_text">
        {text}
        {count === trade_scenario.length ? (
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
