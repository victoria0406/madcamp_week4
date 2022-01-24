import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Menu from "./menu_bar";
import "./styles/ending.css";

const BASE_URL = "http://192.249.18.165";
const id = localStorage.getItem("user_id");

function Endview(props) {
  const { pathname } = useLocation();
  let history = useNavigate();
  const [endingList, setEndingList] = useState([0, 0, 0, 0, 0, 0]);
  //본 엔딩은 1, 그렇지 않은 엔딩은 0으로 처리
  //good, normal, bad, leave, hidden1, hidden2 순서
  let tempListNow = [0, 0, 0, 0, 0, 0];

  useEffect(() => {
    //유저 정보에서 봤던 엔딩 정보를 불러오는 과정
    axios.get(BASE_URL + `/load/${id}`).then((response) => {
      console.log("load ending data, put in variable");
      let tempListEnd = [0, 0, 0, 0, 0, 0];
      let saveList = [0, 0, 0, 0, 0, 0];
      if (response.data.endingList != null) {
        var temp = response.data.endingList.slice(1, -1).split(",");

        for (var i = 0; i < 6; i++) {
          tempListEnd[i] = Number(temp[i]);
        }
        // setEndingList(tempListEnd);
      }

      for (var i = 0; i < 6; i++) {
        saveList[i] = tempListNow[i] || tempListEnd[i];
      }
      //실행 순서 상 아래 switch 문이 먼저 돌아간다. 따라서 OR 연산을 해준다.(어차피 본 횟수는 안 셀거임)
      setEndingList(saveList);
    });
  }, []);

  function ending_ment() {
    switch (pathname.split("/")[2]) {
      case "bad":
        tempListNow[2] = 1;
        return "결국 돈이 없어 월세를 못내게 된 당신, 결국 집을 나와 고시원에서 지내게 되었습니다.";
      case "normal":
        tempListNow[1] = 1;
        return "당신은 무사히 2주 동안 포인트로 생활을 할 수 있었습니다.";
      case "good":
        tempListNow[0] = 1;
        return "당신의 우수한 거래 능력에 감탄한 당근마켓에서 당신을 채용했습니다.";
      case "leave":
        tempListNow[4] = 1;
        return "결국 당신은 부당한 회장의 대응에 사표를 던지고 나왔습니다. 이제 회사를 상대로 소송을 하러 가실까요?";
      default:
        return "";
    }
  }

  function restart() {
    // 누르면 reset를 통해 데이터 리셋, 봤던 엔딩 정보는 저장됨.
    axios
      .patch(BASE_URL + `/reset/${id}`, {
        endingList: JSON.stringify(endingList),
      })
      .then((response) => {
        console.log(response.data);
      });
    //만약 Router를 추가 생성해서 main 경로로 엔딩까지 보이게 -> 그렇다면 지금 방법은 필요없음. isEnding을 통한 삼항연산자로 보여줘야 할 듯
  }

  return (
    <div>
      <div className="ending">
        <div id="ending_ment">{ending_ment()}</div>
        <button id="restart_button" onClick={restart}>
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
