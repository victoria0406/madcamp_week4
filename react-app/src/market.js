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
                <div>{Math.round(props.cost*props.ratio)} ({Math.round(props.ratio*100)}%) </div>
                <button onClick={()=>{props.setSt(true)}}>O</button>
                <button>X</button>
              </div>
          </div>
      );
};
function Selllist(props){
    return(
        <div className='itemlist'>
            <img src = {props.img} alt="item_image" width ="100px"/>
              <div>
                <div class = "item_name">{props.name}</div>
                <div>{Math.round(props.cost*props.ratio)} ({Math.round(props.ratio*100)}%) </div>
              </div>
        </div>
    )
}


function Marketview(props){
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    return(
            <div>
                <div id="carrot">삽니다! 당근마켓</div>
                <div>사고싶어용</div>
                {state1?<></>:<Itemlist setSt={setState1} name={list_of_items[props.items[0].item]} cost = {cost_of_items[props.items[0].item]} ratio = {props.items[0].ratio} img = {img_of_items[props.items[0].item]}/>}
                {state2?<></>:<Itemlist setSt={setState2} name={list_of_items[props.items[1].item]} cost = {cost_of_items[props.items[1].item]} ratio = {props.items[1].ratio} img = {img_of_items[props.items[1].item]}/>}
                {state3?<></>:<Itemlist setSt={setState3} name={list_of_items[props.items[2].item]} cost = {cost_of_items[props.items[2].item]} ratio = {props.items[2].ratio} img = {img_of_items[props.items[2].item]}/>}
                <div>거래를 합시당</div>
                {state1?<Selllist name={list_of_items[props.items[0].item]} cost = {cost_of_items[props.items[0].item]} ratio = {props.items[0].ratio} img = {img_of_items[props.items[0].item]}/>:<></>}
                {state2?<Selllist name={list_of_items[props.items[1].item]} cost = {cost_of_items[props.items[1].item]} ratio = {props.items[1].ratio} img = {img_of_items[props.items[1].item]}/>:<></>}
                {state3?<Selllist name={list_of_items[props.items[2].item]} cost = {cost_of_items[props.items[2].item]} ratio = {props.items[2].ratio} img = {img_of_items[props.items[2].item]}/>:<></>}
                
            </div>
        );
}

export default Marketview;