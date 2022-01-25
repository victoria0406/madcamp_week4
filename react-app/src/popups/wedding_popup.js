import "./popup.css";

import React, { Component, useEffect, useState } from "react";

function Weddingpopup(props) {
  return (
    <div className="popup_game">
      <div id="deal_popup">
        <div className="popup_ment_event">{props.ment}</div>
        <button
          className="popup_button_event"
          onClick={() => {
            props.setGotoWedding(false);
          }}
        >
          오케이
        </button>
      </div>
    </div>
  );
}

export default Weddingpopup;
