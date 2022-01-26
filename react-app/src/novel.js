import "./styles/Game.css";
import "./styles/avatar.css";
import scenario from "./scenario/scenario.json";
import trade_scenario from "./scenario/trade_scenario.json";
import test from "./scenario/test.json";
import innerText from "react-innertext";

import React, { Component, useEffect, useState } from "react";

let npcImage = ["npc_img1", "npc_img2", "npc_img3", "npc_img4"];

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  npcImage = [npcImage[random]];
  return array[random];
}

let randomText = randomValueFromArray(trade_scenario)

function Novelview(props) {
  const [count, setCount] = useState(1);
  let [name, setName] = useState(randomText.case[0].name);
  const [text, setText] = useState(randomText.case[0].text);
  const [isNovelView, setIsNovelView] = useState(false);
  const [type, setType] = useState(randomText.case[0].type);

  if (name == "Player") {
    name = props.user_name;
    //console.log("이름 바꾸기" + name + "\n user name: " + user_name);
  }

  function go_next() {
    setCount(count + 1);
    setName(randomText.case[count].name);
    setType(randomText.case[count].type);
  }

  useEffect(() => {
    if (count === randomText.case.length) {
      props.setScriptEnd(true);
    }
    setIsNovelView(true);
  }, [count]);

  //console.log("name: ", shuffled[0].case.name, "text: ", shuffled[0].case.text);

  return (
    <div className="novel">
      {props.day != 9 ? <div className={npcImage} /> : <></>}
      {name == null ? <></> : <div id="script_name">{name}</div>}
      <div id="script_text">
        {text}
        {count === randomText.case.length ? (
          <button
            onClick={() => {
              props.final_next();
              randomText = randomValueFromArray(trade_scenario);
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
          </button>
        )}
      </div>
    </div>
  );
}

export default Novelview;