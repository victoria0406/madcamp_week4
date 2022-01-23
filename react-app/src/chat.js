import "./Game.css";

import React, { Component, useState } from 'react';
import Chatpopup from "./popups/chat_popup";

import profile_img from "./images/profile.png"

function Chatroom(props){
    return(
        <div className='chat_room'>
            <img className="chat_img" src = {profile_img} alt="프로필 사진" width="50px" height="50px"/>
            <div className="chat_info">
                <div className="chat_name">{props.name}</div>
                <div className="chat_text">{props.chat}</div>
            </div>
            
        </div>
    )
}

//채팅 보내고 닫으면 그냥 퇴사 엔딩으로 가자

const chat_script = [{text:"사람들이 그렇게 포인트를 좋아하나?", me:false}, {text:"네, 좋아합니다!", me:true},{text:"그렇게 좋은거면", me:false},{text:"일년동안 이차장은", me:false},{text:"월급, 포인트로 받게", me:false}]

function RealChat(props){
    const [send_ment, setSendment] = useState("회장님 저 퇴사하겠습니다");
    const [sended, setSended] = useState(false);
    return(
        <div className="real_chat">
            <button onClick={()=>{props.setIsChat(false)}}>close</button> 
            <div>회장님</div>
            <div className="chat_list">
                {chat_script.map((e)=>{
                    if(e.me){
                        return(<div className="my_chat">{e.text}</div>)
                    }else{
                        return(<div className="op_chat">{e.text}</div>)
                    }
                })}
                {sended&&<div className="my_chat">회장님 저 퇴사하겠습니다.</div>}
            </div>
            <div id ="send_message">
                <div>{send_ment}</div> 
                <button onClick={()=>{setSended(true); setSendment("");}}>send</button>
            </div>
            
        </div>
    )
}

function Chatview(){
    const [is_chat, setIsChat] = useState(false);
    return(
        <div>
            <div id="kakao">카카오톡</div>
            <div>
                <button className="hidden_button" onClick ={()=>{setIsChat(true)}}><Chatroom name = "회장...님" chat = "월급 포인트로 받게!" /></button>
                <Chatroom name = "설영이" chat = "몰캠 파이팅!"/>
                <Chatroom name = "설영이" chat = "몰캠 파이팅!!"/>
                <Chatroom name = "설영이" chat = "몰캠 파이팅!!!"/>
                <Chatroom name = "설영이" chat = "몰캠 파이팅!!!!"/>
                <Chatroom name = "설영이" chat = "몰캠 파이팅!!!!!"/>
                <Chatroom name = "설영이" chat = "몰캠 파이팅!!!!!!"/>
                <Chatroom name = "설영이" chat = "몰캠 파이팅!!!!!!!"/>
            </div>
            <Chatpopup name = "겨울 타는 민" chat= "나 이번주 토요일에 결혼식인데 혹시 올 수 있어?" sub_text = "-축의금 5만원-"/>
            {is_chat&&<RealChat setIsChat = {setIsChat}/>}
            
        </div>
    );
}

export default Chatview;