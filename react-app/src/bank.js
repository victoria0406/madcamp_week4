import React, { Component } from 'react';
import "./Game.css";

import img_fresh from './images/공기청정기.jpg';
import img_clean from "./images/청소기.jpg";
import img_coffee from "./images/캡슐커피머신.jpg"
import img_wind from "./images/바람막이.jpg";
import img_healthy from "./images/홍삼.jpg";

const list_of_items = ["공기청정기","청소기","캡슐커피머신","바람막이","홍삼"];
const img_of_items = [img_fresh,img_clean,img_coffee,img_wind, img_healthy];

function Havelist(props){
    return(
            <div className='have_list'>
                <span>{list_of_items[Number(props.index)]}</span>
                <span>{props.count}개 보유중</span>
            </div>
    );
}

function Bankview(props) {
    console.log("have_items:",props.have_items);
    return(
        <div>
            <div id="toss">TOSS</div>
            <div className='head_text'>MONEY <span className='blue' >{props.money}</span></div>
            <div className='head_text'>POINT <span className='blue' >{props.point}</span></div>
            <div className='head_text'>나의 자산 현황</div>
            <div>
                <Havelist index="0" count = {props.have_items[0]}/>
                <Havelist index="1" count = {props.have_items[1]}/>
                <Havelist index="2" count = {props.have_items[2]}/>
                <Havelist index="3" count = {props.have_items[3]}/>
                <Havelist index="4" count = {props.have_items[4]}/>
            </div>
        </div>
    );
    
}
export default Bankview;