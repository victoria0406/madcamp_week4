import "./popup.css";

import React, { Component, useEffect, useState } from "react";

function Gamepopup(props) {
  return (
    <div className="popup_game">
      <div id="deal_popup">
        <div className="deal_subject">{props.ment}</div>
        <div className="buttons">
          {props.checked ? (
            <button
              className="popup_button"
              onClick={() => {
                props.setGameOpen(false);
                props.setDeal(1);
              }}
            >
              거래하러 가기
            </button>
          ) : (
            <></>
          )}
          <button
            className="popup_button"
            onClick={() => {
              props.setGameOpen(false);
              props.setDeal(2);
            }}
          >
            거래 쉬기
          </button>
          <button
            className="popup_button"
            onClick={() => {
              props.setGameOpen(false);
            }}
          >
            다시 선택하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gamepopup;
