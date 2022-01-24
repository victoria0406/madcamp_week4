import React, { Component } from "react";
import "./styles/Game.css";

import img_fresh from "./images/items/공기청정기.png";
import img_clean from "./images/items/청소기.png";
import img_coffee from "./images/items/캡슐커피머신.png";
import img_wind from "./images/items/바람막이.jpg";
import img_healthy from "./images/items/홍삼.png";

const list_of_items = [
  "공기청정기",
  "청소기",
  "캡슐커피머신",
  "바람막이",
  "홍삼",
  "희귀 LP판"
];

function Havelist(props) {
  return (
    <div className="have_list">
      <span>{list_of_items[Number(props.index)]}</span>
      <span>{props.count}개 보유중</span>
    </div>
  );
}

function Bankview(props) {
  console.log("have_items:", props.have_items);
  return (
    <div>
      <div id="toss">TOSS</div>
      <div className="bank_contents">
        <div className="my_wallet bank_component">
          <div className="bank_name">지갑</div>
          <div className="bank_status">
            <span>MONEY</span>
            <span className="blue">{props.money}</span>
          </div>
          <div className="bank_status">
            <span>POINT</span>
            <span className="blue">{props.point}</span>
          </div>
        </div>

        <div className="my_storage my_wallet bank_component">
          <div className="bank_name">자산 현황</div>

          <div>
            <Havelist index="0" count={props.have_items[0]} />
            <Havelist index="1" count={props.have_items[1]} />
            <Havelist index="2" count={props.have_items[2]} />
            <Havelist index="3" count={props.have_items[3]} />
            <Havelist index="4" count={props.have_items[4]} />
            {props.have_items[5]==1&& <Havelist index="5" count = {1}/>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bankview;
