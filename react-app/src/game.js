import React, { Component, useEffect, useState } from "react";
import ReactSwipe from "react-swipe";

import "./styles/Game.css";
import axios from "axios";
import Buyview from "./buy_item";
import Marketview from "./market";
import Novelview from "./novel";
import Bankview from "./bank";
import Chatview from "./chat";
import Gamepopup from "./popups/game_popup";

import background_home from "./images/game_background/home.png";
import background_company from "./images/game_background/company.png";
import background_street from "./images/game_background/street.png";

import clock_home from "./images/game_component/clock_night.png";
import clock_company from "./images/game_component/clock_company.png";
import clock_rest from "./images/game_component/clock_home.png";

import daily_info from "./images/game_component/info.png";
import Menu from "./menu_bar";
import Simplepopup from "./popups/simple_popup";
import Weddingpopup from "./popups/wedding_popup";
import { Link, Route } from "react-router-dom";
import Endview from "./ending";

const BASE_URL = "http://192.249.18.165";

const days = ["일", "월", "화", "수", "목", "금", "토"];
const doing_ment = [
  "출근 준비 중",
  "일하는 중",
  "거래하는 중",
  "집에서 쉬는 중...",
];
const next_do_ment = ["출근하기", "퇴근하기", "거래 마치기", "다음날"];

const doing_ment_sat = [
  "외출 준비 중",
  "특별 거래 중",
  "거래하는 중",
  "친구 만나기",
];
const next_do_ment_sat = [
  "특별한 거래 하기",
  "일반 거래 하기",
  "거래 마치기",
  "다음날",
];

const doing_ment_sun = ["휴식 중...", "물건 구매"];
const next_do_ment_sun = ["물건 구매하기", "다음날"];

const end_day = 14;
const id = localStorage.getItem("user_id");
//이 자리에서 처음으로 데이터 로드 해준다. (세이브가 없으면 기본 세팅으로)
const list_of_items = [
  "공기청정기",
  "청소기",
  "캡슐커피머신",
  "바람막이",
  "홍삼",
];
const cost_of_items = [400000, 800000, 200000, 100000, 50000];

function ratio() {
  return Math.floor(Math.random() * 10) / 10 + 0.4;
}

function choose_items() {
  //item 3가지 뽑기
  const item1 = Math.floor(Math.random() * 5);
  var item2 = item1;
  while (item2 === item1) {
    item2 = Math.floor(Math.random() * 5);
  }
  var item3 = item1;
  while (item3 === item1 || item3 === item2) {
    item3 = Math.floor(Math.random() * 5);
  }
  // 각각의 상승률 정하기
  return [
    { item: item1, ratio: ratio(), sell: false },
    { item: item2, ratio: ratio(), sell: false },
    { item: item3, ratio: ratio(), sell: false },
  ];
}

function Gameview() {
  let reactSwipeEl;
  const [page, setPage] = useState(0);
  //const [market, setMarket] = useState(<Marketview/>);
  const [sell_items, setSellItems] = useState(choose_items());
  const [is_game_popup_open, setGameOpen] = useState(false);
  const [is_phone_popup_open, setPhoneOpen] = useState(false);
  const [background, setBackground] = useState(background_home);
  //const [prev_point, setPrevPoint] = useState(0);
  //const [had_items, setHadItems] = useState([0, 0, 0, 0, 0]);
  //const [prev_money, setPrevMoney] = useState(0);
  //const [start_day, setStartDay] = useState(1);

  const [day, setDay] = useState(1);
  const [doing, setDoing] = useState(0);
  const [have_items, setHaveItems] = useState([0, 0, 0, 0, 0, 0]);
  const [money, setMoney] = useState(0);
  const [point, setPoint] = useState(0);
  const [user_name, setUsername] = useState("미정");

  const [clock, setClock] = useState(clock_home);

  const [script_end, setScriptEnd] = useState(false);

  const [deal, setDeal] = useState(0); //거래 채결 미정: 0, 거래 채결 됨: 1, 거래 채결 안됨:2

  const [goto_wedding, setGotoWedding] = useState(false);
  const [wedding_ment, setWeddingment] = useState("");

  useEffect(() => {
    if (day % 7 == 1) {
      //일요일은 집에만 있음
      if (doing === 0) {
        go_toss();
      } else if (doing === 1) {
        go_carrot();
      }
    } else if (day % 7 == 0) {
      if (doing == 0) {
        go_toss();
        setBackground(background_home);
        setScriptEnd(false);
      } else if (doing == 1) {
        go_carrot();
        setBackground(background_street);
      } else if (doing == 2) {
        go_carrot();
        setBackground(background_street);
      } else {
        go_toss();
        setBackground(background_home);
      }
    } else {
      if (doing == 0) {
        if (day == 4) {
          go_kakao();
        } else {
          go_toss();
        }
        setScriptEnd(false);
        setBackground(background_home);
        setClock(clock_home);
      } else if (doing == 1) {
        go_carrot();
        setBackground(background_company);
        setClock(clock_company);
      } else if (doing == 2) {
        go_carrot();
        setBackground(background_street);
        setClock(clock_home);
      } else {
        go_toss();
        setBackground(background_home);
        setClock(clock_rest);
      }
    }
  }, [doing]);

  useEffect(() => {
    if (doing === 1 && day % 7 !== 1) {
      if (deal === 1) {
        setDoing(2);
        var increase_money = 0;
        sell_items.forEach((item) => {
          if (item.sell) {
            increase_money += cost_of_items[item.item] * item.ratio;
            have_items[item.item]--;
          }
        });
        setMoney(money + Math.round(increase_money));
        setHaveItems(have_items);
      } else if (deal === 2) {
        setDoing(3);
      }
      setDeal(0);
    }
  }, [deal]);

  useEffect(() => {
    if (day % 7 === 1) {
      setPoint(point + 1000000);
    }
    if(day!=1){
      axios
      .patch(BASE_URL + `/save/${id}`, {
        money: money,
        day: day,
        point: point,
        item_list: JSON.stringify(have_items),
      })
      .then((response) => {
        console.log(response.data);
      });
    setSellItems(choose_items());
    }
    
  }, [day]);

  //DB로부터 로드
  useEffect(() => {
    axios
      .get(BASE_URL + `/load/${id}`)
      .then((response) => {
        console.log("load data, put in variable");
        console.log("day ", response.data.day);
        setDay(Number(response.data.day));
        setMoney(Number(response.data.money));
        if (response.data.point != null) {
          setPoint(Number(response.data.point));
        }
        if (response.data.itemList != null) {
          var temp_list = [0, 0, 0, 0, 0, 0];
          var temp = response.data.itemList.slice(1, -1).split(",");
          for (var i = 0; i < 6; i++) {
            temp_list[i] = Number(temp[i]);
          }
          setHaveItems(temp_list);
        }
        setUsername(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  useEffect(()=>{
    if(goto_wedding==true){
      if(money<50000){
        setWeddingment("돈이 부족해 결혼식에 가지 못하게 되었습니다.");
      }
      else{
        setMoney(money-50000);
        have_items[5]=1;
        setHaveItems(have_items);
        setWeddingment("당신의 계좌에서 축의금 5만원이 빠져나갔습니다. 그리고 당신은 친구에게 희귀 클래식 LP판을 얻었습니다.");
      }
    }
  },[goto_wedding])


  function go_toss() {
    for (var i = 0; i < page; i++) {
      reactSwipeEl.prev();
    }
    setPage(0);
  }
  function go_carrot() {
    if (page === 0) {
      reactSwipeEl.next();
    } else if (page === 2) {
      reactSwipeEl.prev();
    }
    setPage(1);
  }
  function go_kakao() {
    for (var i = 0; i < 2 - page; i++) {
      reactSwipeEl.next();
    }
    setPage(2);
  }

  //doing 넘어가는 역할만함, 각각 넘어가는 거에 대한 변화는 useeffect에서 처리
  function do_next_work() {
    console.log(is_game_popup_open);
    //주말은 특수 케이스로 작동
    if (day % 7 == 1) {
      if (doing === 0) {
        setDoing(1);
      } else if (doing === 1) {
        setDoing(0);
        setDay(day + 1);
      }
    } else {
      if (doing === 0) {
        setDoing(1);
      } else if (doing === 1) {
        //거래 성사 여부에 따라 달라진다.
        setGameOpen(true);
      } else {
        //거래중인 시점과 퇴근인 시점 2개
        if (day === end_day) {
          if(money<1000000){
            document.location.href = "/ending/bad";
          }else if(money<2000000){
            document.location.href = "/ending/normal";
          }else{
            document.location.href = "/ending/good";
          }
           //각각 분기점에 대해 data로 다른 엔딩 페이지 넘겨주기
        } else {
          setDoing(0);
          setDay(day + 1);
        }
      }
    }
  }
  //거래 관련 멘트 추가하는 역할
  function make_deal_ment() {
    var ment = "";
    sell_items.forEach((item) => {
      if (item.sell) {
        ment = ment + list_of_items[item.item] + ", ";
      }
    });
    if (ment == "") {
      ment = "거래를 생략하시겠습니까?";
    } else {
      ment = ment.slice(0, -2) + "를 판매하시겠습니까?";
      //setCheckeditems(true);
    }
    return ment;
  }
  function checked_items() {
    var checked = false;
    sell_items.forEach((item) => {
      if (item.sell) {
        checked = true;
      }
    });
    return checked;
  }

  return (
    <div>
      <div className="main">
        <div className="game_image">
          <img
            className="background_img"
            src={background}
            alt="no_background"
          />
          <img id="daily_info" src={daily_info} alt="daily_info" />
          <div className="day">
            day {day} ({days[(day - 1) % 7]})
          </div>
          <img className="clock" src={clock} alt="clock" width="120px" />
          <div className="doing">
            {day % 7 == 1
              ? doing_ment_sun[doing]
              : day % 7 == 0
              ? doing_ment_sat[doing]
              : doing_ment[doing]}
          </div>
          {doing === 2 ? (
            //여기 수정할꺼야
            script_end && (
              <button
                id="game_button"
                onClick={() => {
                  do_next_work();
                }}
              >
                {day % 7 == 1
                  ? next_do_ment_sun[doing]
                  : day % 7 == 0
                  ? next_do_ment_sat[doing]
                  : next_do_ment[doing]}
              </button>
            )
          ) : (
            <button
              id="game_button"
              onClick={() => {
                do_next_work();
              }}
            >
              {day % 7 == 1
                ? next_do_ment_sun[doing]
                : day % 7 == 0
                ? next_do_ment_sat[doing]
                : next_do_ment[doing]}
            </button>
          )}
          {is_game_popup_open ? (
            <Gamepopup
              ment={make_deal_ment()}
              setGameOpen={setGameOpen}
              setDeal={setDeal}
              checked={checked_items()}
            />
          ) : (
            <></>
          )}
          {goto_wedding&& (
            <Weddingpopup
            ment ={wedding_ment} setGotoWedding = {setGotoWedding}/>
          )}
          {doing === 2 ? <Novelview user_name={user_name} final_next={do_next_work} setScriptEnd = {setScriptEnd}/> : <></>}
        </div>
        <div className="phone">
          <div className="phoneFrame" />
          <div class="phone_element">
            <ReactSwipe
              className="page"
              swipeOptions={{ continuous: false }}
              ref={(el) => (reactSwipeEl = el)}
            >
              <div>
                <Bankview money={money} point={point} have_items={have_items}/>
              </div>
              <div>
                {day % 7 == 1 ? (
                  <Buyview
                    can_buy={doing == 1}
                    items={have_items}
                    setItems={setHaveItems}
                    point={point}
                    setPoint={setPoint}
                  />
                ) : (
                  <Marketview
                    can_buy={doing == 1}
                    items={sell_items}
                    setSellItems={setSellItems}
                    have_items={have_items}
                    setHaveItems={setHaveItems}
                    doing={doing}
                    user_name={user_name}
                  />
                )}
              </div>
              <div>
                <Chatview day = {day} setGotoWedding = {setGotoWedding}/>
              </div>
            </ReactSwipe>
          </div>
          <div class="app_buttons">
            <button
              class="applications"
              onClick={() => {
                go_toss();
              }}
            >
              <img
                src="button/토스.png"
                alt="토스"
                height="30em"
                width="30em"
              />
            </button>
            <button
              class="applications"
              onClick={() => {
                go_carrot();
              }}
            >
              {day % 7 == 1 ? (
                <img
                  src="button/card.png"
                  alt="카드"
                  height="40em"
                  width="40em"
                />
              ) : (
                <img
                  src="button/당근.png"
                  alt="당근"
                  height="35em"
                  width="35em"
                />
              )}
            </button>
            <button
              class="applications"
              onClick={() => {
                go_kakao();
              }}
            >
              <img
                src="button/카톡.png"
                alt="카톡"
                height="35em"
                width="35em"
              />
            </button>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Gameview;
