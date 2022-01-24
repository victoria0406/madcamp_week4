import "./styles/Game.css";

import React, { Component, useEffect, useState } from "react";
import Chatpopup from "./popups/chat_popup";

import profile_img from "./images/profile.png";

function Chatroom(props) {
  return (
    <div className="chat_room">
      <img
        className="chat_img"
        src={profile_img}
        alt="프로필 사진"
        width="50px"
        height="50px"
      />
      <div className="chat_info">
        <div className="chat_name">{props.name}</div>
        <div className="chat_text">{props.chat}</div>
      </div>
    </div>
  );
}

//채팅 보내고 닫으면 그냥 퇴사 엔딩으로 가자
//여기서 채팅 목록 변경하면 됨
//코드가 귀여워졌어요.
const chat_list = [
  { name: "설영", text: "몰캠 파이팅" },
  { name: "설영", text: "몰캠 파이팅" },
  { name: "설영", text: "몰캠 파이팅" },
  { name: "설영", text: "몰캠 파이팅" },
];

const chat_script = [
  { text: "사람들이 그렇게 포인트를 좋아하나?", me: false },
  { text: "네, 좋아합니다!", me: true },
  { text: "그렇게 좋은거면", me: false },
  { text: "일년동안 이차장은", me: false },
  { text: "월급, 포인트로 받게", me: false },
];

function RealChat(props) {
  const [send_ment, setSendment] = useState("회장님 저 퇴사하겠습니다");
  const [sended, setSended] = useState(false);
  const [ceo_sended, setCEOSended] = useState(false);

  function leave_company() {
    setSended(true);
    setSendment("");
    setTimeout(function () {
      setCEOSended(true);
    }, 3000);
    setTimeout(function () {
      document.location.href = "/ending/leave";
    }, 4000);
  }

  return (
    <div className="real_chat">
      <div className="chat_header">
        <button
          className="back_button"
          onClick={() => {
            props.setIsChat(false);
          }}
        >
          <img
            src="button/back-arrow.png"
            alt="뒤로가기"
            height="25em"
            width="25em"
          />
        </button>
        <div className="chat_name">회장님</div>
      </div>
      <div className="chat_list">
        {chat_script.map((e) => {
          if (e.me) {
            return <div className="my_chat">{e.text}</div>;
          } else {
            return <div className="op_chat">{e.text}</div>;
          }
        })}
        {sended && <div className="my_chat">회장님 저 퇴사하겠습니다.</div>}
        {ceo_sended && <div className="op_chat">오케이 콜</div>}
      </div>
      <div id="send_message">
        <div>{send_ment}</div>
        <button
          className="send_button"
          onClick={() => {
            leave_company();
          }}
        >
          <img
            src="button/send_icon.png"
            alt="뒤로가기"
            height="25em"
            width="25em"
          />
        </button>
      </div>
    </div>
  );
}

function Chatview(props) {
  const [is_chat, setIsChat] = useState(false);
  const [is_popup, setIsPopup] = useState(false);
  const [is_newchat, setIsnewchat] = useState(false);

  useEffect(() => {
    if (props.is_newchat == true) {
      setIsPopup(true);
      setIsnewchat(true);
    }
  }, [props.is_newchat]);
  return (
    <div className="chat_view">
      <div id="kakao">카카오톡</div>
      <div className="market_head chat_head">내 채팅</div>
      <div>
        {is_newchat && (
          <Chatroom
            name="지나"
            chat="나 이번주 토요일에 결혼식인데 혹시 올 수 있어?"
          />
        )}
        <button
          className="hidden_button"
          onClick={() => {
            setIsChat(true);
          }}
        >
          <Chatroom name="회장...님" chat="월급 포인트로 받게!" />
        </button>
        {chat_list.map((el) => {
          return <Chatroom name={el.name} chat={el.text} />;
        })}
      </div>
      {is_popup && (
        <Chatpopup
          name="지나"
          chat="나 이번주 토요일에 결혼식인데 혹시 올 수 있어?"
          sub_text="-축의금 5만원-"
          setIsPopup={setIsPopup}
        />
      )}
      {is_chat && <RealChat setIsChat={setIsChat} />}
    </div>
  );
}

export default Chatview;
