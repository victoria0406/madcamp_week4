import React, { Component } from "react";
import Menu from "./menu_bar";
import "./styles/ending.css";

function Endingcollect(props){
    return(
        <div className={props.unlock? "card_unlock":"card_lock"}>
            
            <div className='ending_text'>{props.unlock? props.text:""}</div>
            <div className='ending_head'>{props.ending}</div>
        </div>
    )
}

function Endcollectview(props){
    return(
        <div>
            <div className="ending">
                <div id = "head_text">★ENDING★</div>
                <div className='ending_collect'>
                    <Endingcollect ending = "Good Ending" text = "당근 마켓에 고용되셨습니다." unlock = {props.ending_info[0]===1}/>
                    <Endingcollect ending = "Normal Ending" text = "무사히 2주를 견디셨습니다." unlock = {props.ending_info[1]===1}/>
                    <Endingcollect ending = "Bad Ending" text = "월세를 마련하지 못해 고시원에 들어갔습니다" unlock = {props.ending_info[2]===1}/>
                </div>
                <div className='ending_collect'>
                    {props.ending_info[3]===1&&<Endingcollect ending = "Hidden Ending1" text = "중고거래 사기꾼으로 고소 당했습니다" unlock = {true}/>}
                    {props.ending_info[4]===1&&<Endingcollect ending = "퇴사 엔딩" text = "터무니 없는 회장의 갑질을 견디지 못한 당신은 퇴사했습니다." unlock = {true}/>}
                    {props.ending_info[5]===1&&<Endingcollect ending = "Hidden Ending3" text = "" unlock = {true}/>}
                </div>
            </div>
            <Menu/>
        </div>
        
    );
}

export default Endcollectview;