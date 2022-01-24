import "./popup.css";

import React, { Component, useEffect, useState } from "react";

function Chatpopup(props) {
  return (
    <div id="chat_popup">
      <div className="p_chat_name">{props.name}</div>
      <div className="p_chat_text">{props.chat}</div>
      <div className="p_chat_sub_text">{props.sub_text}</div>
      <div className="chat_popup_buttons">
        <button className="chat_popup_button" onClick={()=>{props.setIsPopup(false); props.setGotoWedding(true)}}>승인</button>
        <button className="chat_popup_button" onClick={()=>{props.setIsPopup(false)}}>거부</button>
      </div>
    </div>
  );
}

export default Chatpopup;
