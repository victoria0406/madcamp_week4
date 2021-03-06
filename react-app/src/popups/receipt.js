import React, { Component } from "react";
import "./popup.css";

const list_of_items = [
  "공기청정기",
  "청소기",
  "캡슐커피머신",
  "바람막이",
  "홍삼",
];

function Havelist(props) {
  return (
    <div className="have_list">
      <span>{list_of_items[Number(props.index)]}</span>
      <span>{props.count}개 구매</span>
    </div>
  );
}

function Receiptview(props) {
  return (
    <div className="popup">
      <div id="receipt">
        <div className="popup_title">영수증</div>
        <button
          className="x_button"
          onClick={() => {
            props.setPopup(false);
          }}
        >
          X
        </button>
        <div>
          <Havelist index="0" count={props.items[0]} />
          <Havelist index="1" count={props.items[1]} />
          <Havelist index="2" count={props.items[2]} />
          <Havelist index="3" count={props.items[3]} />
          <Havelist index="4" count={props.items[4]} />
        </div>
        <div className="receipt_ending">
          <div>총액 : {props.point}P</div>
          <button
            className="receipt_buy"
            onClick={() => {
              props.update();
              props.toast();
            }}
          >
            구매 확인
          </button>
        </div>
      </div>
    </div>
  );
}
export default Receiptview;
