import React, { Component } from "react";
import "./styles/ending.css";

function Endingcollect(props){
    return(
        <div className='card'>
            <div className='ending_head'>{props.ending}</div>
            <div className='ending_text'>{props.text}</div>
        </div>
    )
}

function Endcollectview(){
    return(
        <div className="ending">
            <div id = "head_text">★ENDING★</div>
            <div className='ending_collect'>
                <Endingcollect ending = "Good Ending" text = "당근 마켓에 고용되셨습니다."/>
                <Endingcollect ending = "Normal Ending" text = "무사히 2주를 견디셨습니다."/>
                <Endingcollect ending = "Bad Ending" text = "월세를 마련하지 못해 고시원에 들어갔습니다"/>
            </div>
            <div className='ending_collect'>
                <Endingcollect ending = "Hidden Ending1"/>
                <Endingcollect ending = "Hidden Ending2"/>
                <Endingcollect ending = "Hidden Ending3"/>
            </div>
        </div>
    );
}

export default Endcollectview;
