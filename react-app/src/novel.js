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

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  if(random===1){
    person = person2;
  }else if(random==2){
    person = person3;
  }else if(random==3){
    person = person4;
  }
  return array[random];
}

let randomText = randomValueFromArray(trade_scenario);
//const shuffle = () => (Math.random() - 0.5);
//let shuffled = [...trade_scenario].sort(shuffle);


//console.log("random value from array: ", randomText.case[0]);
//console.log("shuffle", shuffled);

//console.log("test", test[0]);

function Novelview(props) {
  
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
      {count!==randomText.case.length&&<img className = "person_img" src = {person} alt="판매자임" height="500"/>}
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

export default Novelview;
