import React, { Component, useState } from 'react';
import Modal from 'react-modal';


//images of items
import img_fresh from './images/공기청정기.jpg';
import img_clean from "./images/청소기.jpg";
import img_coffee from "./images/캡슐커피머신.jpg"
import img_wind from "./images/바람막이.jpg";
import img_healthy from "./images/홍삼.jpg";
//따로 선언해야 합니당

//function for choosing items

const list_of_items = ["공기청정기","청소기","캡슐커피머신","바람막이","홍삼"];
const cost_of_items = [400000, 800000, 200000, 100000, 50000];
const img_of_items = [img_fresh,img_clean,img_coffee,img_wind, img_healthy];




function Itemlist(props){
    return (
          <div class = "itemlist">
              <img src = {props.img} alt="item_image" width ="100px"/>
              <div>
                <div class = "item_name">{props.name}</div>
                {props.state?<div>예약중</div>:<div></div>}
                <div>{Math.round(props.cost*props.ratio)} ({Math.round(props.ratio*100)}%) </div>
                <button onClick={()=>{props.setSt(!props.state)}}>{props.state?"거래 취소하기":"거래하기"}</button>
              </div>
          </div>
      );
};



function Marketview(props){
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    return(
            <div>
                <div id="carrot">삽니다! 당근마켓</div>
                <Itemlist state = {state1} setSt={setState1} name={list_of_items[props.items[0].item]} cost = {cost_of_items[props.items[0].item]} ratio = {props.items[0].ratio} img = {img_of_items[props.items[0].item]}/>
                <Itemlist state = {state2} setSt={setState2} name={list_of_items[props.items[1].item]} cost = {cost_of_items[props.items[1].item]} ratio = {props.items[1].ratio} img = {img_of_items[props.items[1].item]}/>
                <Itemlist state = {state3} setSt={setState3} name={list_of_items[props.items[2].item]} cost = {cost_of_items[props.items[2].item]} ratio = {props.items[2].ratio} img = {img_of_items[props.items[2].item]}/>
                
            </div>
        );
}

export default Marketview;