import "./styles/Game.css";
import scenario from "./scenario/scenario.json";
import trade_scenario from "./scenario/trade_scenario.json";
import test from "./scenario/test.json";
import innerText from "react-innertext";

import person1 from "./images/items/공기청정기.png";
import person2 from "./images/items/청소기.png";
import person3 from "./images/items/캡슐커피머신.png";
import person4 from "./images/items/바람막이.jpg";

import React, { Component, useEffect, useState } from "react";
let person = person1;

let randomText = [
    {
        "text": "나는 지나의 결혼식에 참여했다",
        "type": "trade"
    },
    {
        "text": "그리고 내 손에 ",
        "type": "trade"
    },
    {
        "name": "Player",
        "text": "예?",
        "type": "trade"
    },
    {
        "text": "......",
        "type": "trade"
    },
    {
        "name": "SYSTEM",
        "text": "성공적인 거래였다.",
        "type": "trade"
    }
]
//const shuffle = () => (Math.random() - 0.5);
//let shuffled = [...trade_scenario].sort(shuffle);


//console.log("random value from array: ", randomText.case[0]);
//console.log("shuffle", shuffled);

//console.log("test", test[0]);

function CEOview(props) {
  
  const [count, setCount] = useState(1);
  let [name, setName] = useState(randomText.case[0].name);
  //const [person, setPerson] = useState(person1);
  const [text, setText] = useState(randomText.case[0].text);
  const [type, setType] = useState(randomText.case[0].type);

  if (name == "Player") {
    //console.log("이름 바꾸기" + name + "\n user name: " + user_name);
  }

  function go_next() {
    setCount(count + 1);
    setName(randomText.case[count].name);
    setText(randomText.case[count].text);
    setType(randomText.case[count].type);
  }

  useEffect(() => {
    if (count === randomText.case.length) {
      props.setScriptEnd(true);
    }
  }, [count]);

  //console.log("name: ", shuffled[0].case.name, "text: ", shuffled[0].case.text);

  return (
      <div class="novel">
      {name == null ? <></> : <div id="script_name">{name}</div>}
      
      <div id="script_text">
        {text}
        {count === randomText.case.length ? (
          <></>
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

export default CEOview;