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

function Endcollectview(){
    return(
        <div>
            <div className="ending">
                <div id = "head_text">★ENDING★</div>
                <div className='ending_collect'>
                    <Endingcollect ending = "Good Ending" text = "당근 마켓에 고용되셨습니다." unlock = {true}/>
                    <Endingcollect ending = "Normal Ending" text = "무사히 2주를 견디셨습니다." unlock = {true}/>
                    <Endingcollect ending = "Bad Ending" text = "월세를 마련하지 못해 고시원에 들어갔습니다" unlock = {false}/>
                </div>
                <div className='ending_collect'>
                    <Endingcollect ending = "Hidden Ending1"/>
                    <Endingcollect ending = "Hidden Ending2"/>
                    <Endingcollect ending = "Hidden Ending3"/>
                </div>
            </div>
            <Menu/>
        </div>
        
    );
}

export default Endcollectview;
