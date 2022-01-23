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
  const user = localStorage.getItem("user_id");
  const select = useState(test[4].select);

  console.log("select" + test[4].select)

  if (name == "김애저") {
    name = user;
    console.log("이름 바꾸기" + name);
  }

  if (type == "select") {

  }
  /*function go_next() {
    setCount(count + 1);
    setName(scenario.intro[count].name);
    setText(scenario.intro[count].text);
    if (scenario.intro[count].name == null) {
      document.getElementById("script_name").style.visibility = "hidden";
    } if (scenario.intro[count].name == "PLAYER") {
      console.log("check player")
      //document.getElementById("script_name").style.setText = "hi";
    }
    else {
      document.getElementById("script_name").style.visibility = "visible";
    }*/



  function go_next() {
    setCount(count + 1);
    setName(test[count].name);
    setText(test[count].text);
    setType(test[count].type);
    /*if (test[count] == "select") {
      document.getElementById('selector-wrapper').style.display = 'grid';
      document.getElementById('selectorA').innerHTML = "test plz"
      document.getElementById('selector').innerHTML = test[count].map(i => 
        `<li onclick="addFavor('${encodeURI(JSON.stringify(i.variable))}')">${i.text}</li>`).join('')
    } else {
      document.getElementById('selectorwrapper').style.display = 'hidden';
      document.getElementById('selector').style.display = 'hidden';
    }*/
  }


  //선택지가 있으면 선택지를 출력 해 줍니다.
  /*if (!!select) {
    //document.getElementById('selector-wrapper').style.display = 'grid';
    document.getElementById('selector').innerHTML = select.map(i =>
      `<li onclick="selectCase('${encodeURI(JSON.stringify(i.variable))}')">${i.text}</li>`).join('')
  }*/

  return (

    < div class="novel" >
      {/*
                      < div id="selector-wrapper" >
              <ul id="selector">
                <li> test A </li>
                <li> test B</li>
              </ul>
            </div >
          */}
      {/* 이름, 텍스트 */}

      <div>
        {type == "select" ? <SelectorView /> : console.log("non select area!")}
      </div>
      {name == null ? <></> : <div id="script_name">{name}</div>}
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
