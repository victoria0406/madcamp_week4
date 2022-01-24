import React, { Component, useEffect, useState } from "react";
import Modal from "react-modal";

//images of items
import img_fresh from "./images/items/공기청정기.png";
import img_clean from "./images/items/청소기.png";
import img_coffee from "./images/items/캡슐커피머신.png";
import img_wind from "./images/items/바람막이.jpg";
import img_healthy from "./images/items/홍삼.png";
//따로 선언해야 합니당

//function for choosing items

const list_of_items = [
  "공기청정기",
  "청소기",
  "캡슐커피머신",
  "바람막이",
  "홍삼",
];
const cost_of_items = [400000, 800000, 200000, 100000, 50000];
const img_of_items = [img_fresh, img_clean, img_coffee, img_wind, img_healthy];

function Itemlist(props) {
  return (
    <div className="itemlist">
      <img
        src={props.img}
        alt="item_image"
        width="45em"
        height="45em"
        className="item_image"
      />
      <div>
        <span className="horiz">
          <div className="item_name">{props.name}</div>
          {props.state ? <div className="register">예약</div> : <div></div>}
        </span>
        <div className="item_area">유성구</div>
        <div>
          {Math.round(props.cost * props.ratio)}원 (
          {Math.round(props.ratio * 100)}%){" "}
        </div>
      </div>
      <button
        className="deal_button"
        onClick={() => {
          props.setSt(!props.state);
        }}
      >
        {props.state ? "거래취소" : "거래하기"}
      </button>
      {props.have ? (
        <></>
      ) : (
        <div className="gray">소유하지 않은 물건입니다.</div>
      )}
    </div>
  );
}

function Marketview(props) {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  useEffect(() => {
    props.items[0].sell = state1;
    props.items[1].sell = state2;
    props.items[2].sell = state3;
  });
  useEffect(() => {
    setState1(false);
    setState2(false);
    setState3(false);
  }, [props.doing]);

  return (
    <div>
      <div id="carrot">삽니다! 당근마켓</div>
      <div>
        <div className="market_location">
          <img src="button/map_pin.png" alt="토스" height="30em" width="30em" />
          <div>유성구에서 거래 중입니다.</div>
        </div>
        <div className="market_head">오늘의 거래</div>
      </div>
      {props.can_buy ? (
        <div>
          <Itemlist
            state={state1}
            setSt={setState1}
            name={list_of_items[props.items[0].item]}
            cost={cost_of_items[props.items[0].item]}
            ratio={props.items[0].ratio}
            img={img_of_items[props.items[0].item]}
            have={props.have_items[props.items[0].item] != 0}
          />
          <Itemlist
            state={state2}
            setSt={setState2}
            name={list_of_items[props.items[1].item]}
            cost={cost_of_items[props.items[1].item]}
            ratio={props.items[1].ratio}
            img={img_of_items[props.items[1].item]}
            have={props.have_items[props.items[1].item] != 0}
          />
          <Itemlist
            state={state3}
            setSt={setState3}
            name={list_of_items[props.items[2].item]}
            cost={cost_of_items[props.items[2].item]}
            ratio={props.items[2].ratio}
            img={img_of_items[props.items[2].item]}
            have={props.have_items[props.items[2].item] != 0}
          />
        </div>
      ) : (
        <div className="simple_text">아직 물건이 올라오지 않았습니다.</div>
      )}
    </div>
  );
}

export default Marketview;
