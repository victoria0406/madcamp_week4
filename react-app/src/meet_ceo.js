import './styles/Game.css';
import React, { Component, useEffect, useState } from 'react';



let randomText = [
    {
        text:"나는 지나의 결혼식에 갔다."
    },
    {
        text:"지나는 답례의 선물로 희귀 LP 판을 선물했다."
    },
    {
        text:"해당 LP판은 루바의 연주가 녹음되어 있었다."
    },
    {
        text: "회장 때문에 나는 루바라면 진절머리가 나는 상황이었지만, 나는 친구의 마음이 고마워 선물을 받았다."
    },
    {
        text: "그런데 결혼식장 입구에서 나는 우연히 회장을 만났다."

    },
    {
      text: "나는 회장에게 인사를 하러 가야할까?"
    },
    {
        name:"회장",
        text:"자네... 그 우리 회사의... 그 포인트 좋아하는 차장 아닌가?"
    },
    {
        text:"하고 싶은 말이 목구멍까지 올라왔지만, 참았다."
    },
    {
        name:"회장",
        text:"자네 손에 그거... 루보프 스미르노바의 LP판 아닌가? 자네 뭘 좀 아는구만"
    },
    {
        name:"회장",
        text: "그건 나도 아직 못 구한 판인데... 자네 나한테 팔지 않겠나?"
    },
    {
        name: "Player",
        text: "아닙니다. 회장님, 그냥 드리겠습니다"
    },
    {
        name:"회장",
        text: "대표가 되어서 사원의 돈을 갈취하면 안되지... 대신 차장이 부담스러워 하는 것 같으니 자네가 좋아하는 포-인-트로 주겠네"
    },
    {
        name:"System",
        text:"회장과의 거래를 성공적으로 끝냈습니다. 대가로 10000000 포인트를 획득했습니다."
    }
]
function CEOview(props) {
  const [count, setCount] = useState(1);
  let [name, setName] = useState(randomText[0].name);
  const [text, setText] = useState(randomText[0].text);
  const [type, setType] = useState(randomText[0].type);

  if (name == "Player") {
    name = props.user_name;
    //console.log("이름 바꾸기" + name + "\n user name: " + user_name);
  }

  function go_next() {
    setCount(count + 1);
    setName(randomText[count].name);
    setText(randomText[count].text);
    setType(randomText[count].type);
  }

  useEffect(()=>{
      if(count===randomText.length){
        props.setPoint(props.point+10000000);
        props.setScriptEnd(true);
      }

  },[count])

  return (
    <div class="novel">
      {name == null ? <></> : <div id="script_name">{name}</div>}
      <div id="script_text">
        {text}
        {count===6?(
          <>
          <button
            onClick={() => {
              go_next();
            }}
            id="select_A"
          >
            간다
          </button>
          <button
            onClick={() => {
              props.setScriptEnd(true);
            }}
            id="select_B"
          >
            가지 않는다
          </button>
        </>):<></>
        }


        {count!==6&&(count === randomText.length   ? (
          <></>
        ) : (
          <button
            onClick={() => {
              go_next();
            }}
            id="script_next"
          >
            {">>>>"}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CEOview;
