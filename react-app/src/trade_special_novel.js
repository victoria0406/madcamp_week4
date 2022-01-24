import './styles/Game.css';
import trade_special from './trade_special.json'
import innerText from 'react-innertext'
import SelectorView from './selector';

import React, { Component, useEffect, useState } from 'react';



function PoliceEventView(props) {
  const [count, setCount] = useState(1);
  let [name, setName] = useState(trade_special[0].case[0].name);
  const [text, setText] = useState(trade_special[0].case[0].text);
  const [type, setType] = useState(trade_special[0].case[0].type);

  if (name == "Player") {
    name = props.user_name;
    //console.log("이름 바꾸기" + name + "\n user name: " + user_name);
  }

  function go_next() {
    setCount(count + 1);
    setName(trade_special[0].case[count].name);
    setText(trade_special[0].case[count].text);
    setType(trade_special[0].case[count].type);
  }

  //console.log("name: ", shuffled[0].case.name, "text: ", shuffled[0].case.text);

  return (

    <div class="novel">
      {name == null ? <></> : <div id="script_name">{name}</div>}
      <div id="script_text">
        {text}
        {count === trade_special[0].case.length ? (
          <>
            <button
              onClick={() => {
                props.final_next();
              }}
              id="script_next_up"
            >
              거래에 간다
            </button>
            <button
              onClick={() => {
                props.police_ending();
              }}
              id="script_next"
            >
              거래에 가지 않는다
            </button>
          </>
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

export default PoliceEventView;
