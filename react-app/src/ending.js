import React, { Component, useState, useEffect, useDebugValue } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Menu from "./menu_bar";
import "./styles/ending.css";

function Endview(props) {
  const { pathname } = useLocation();
  let history = useNavigate();
  const [endingList, setEndingList] = useState([0, 0, 0, 0, 0, 0]);
  //본 엔딩은 1, 그렇지 않은 엔딩은 0으로 처리
  //good, normal, bad, leave, hidden1, hidden2 순서
  let tempListNow = [0, 0, 0, 0, 0, 0];

  useEffect(() => {
    //유저 정보에서 봤던 엔딩 정보를 불러오는 과정
    setEndingList(props.ending_info);
    console.log("1");
  }, []);

  useEffect(()=>{
    props.setEndingInfo(endingList);
    console.log("3");
  },[endingList, props.init])

  

  function ending_ment() {
    switch (pathname.split("/")[2]) {
      case "bad":
        tempListNow = Object.assign([], endingList);
        tempListNow[2] = 1;
        if(endingList[2]===0){
          setEndingList(tempListNow);
        }
        return "결국 돈이 없어 월세를 못내게 된 당신, 결국 집을 나와 고시원에서 지내게 되었습니다.";
      case "normal":
        tempListNow = Object.assign([], endingList);
        tempListNow[1] = 1;
        if(endingList[1]===0){
          setEndingList(tempListNow);
        }
        return "당신은 무사히 2주 동안 포인트로 생활을 할 수 있었습니다.";
      case "good":
        tempListNow = Object.assign([], endingList);
        tempListNow[0] = 1;
        if(endingList[0]===0){
          setEndingList(tempListNow);
        }
        return "당신의 우수한 거래 능력에 감탄한 당근마켓에서 당신을 채용했습니다.";
      case "leave":
        tempListNow = Object.assign([], endingList);
        tempListNow[4] = 1;
        if(endingList[4]===0){
          setEndingList(tempListNow);
        }
        return "결국 당신은 부당한 회장의 대응에 사표를 던지고 나왔습니다. 이제 회사를 상대로 소송을 하러 가실까요?";
        case "accused":
          tempListNow = Object.assign([], endingList);
          tempListNow[3] = 1;
          if(endingList[3]===0){
            setEndingList(tempListNow);
          }
          return "중고거래 사기로 고소당했습니다. 검찰청에서 고소장이 도착했습니다. 당신의 눈앞이 깜깜해집니다.";
      default:
        return "";
    };
  }

  return (
    <div id="bg_img">
      <div className="ending">
        <div id="ending_ment">{ending_ment()}</div>
        <button id="restart_button">
          <Link to="/main" style={{ textDecoration: "none" }}>
            RESTART
          </Link>
        </button>
      </div>
      <Menu />
    </div>
  );
}

export default Endview;