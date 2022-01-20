import React, { Component } from 'react';
import Modal from 'react-modal';


//images of items
import img_fresh from './images/공기청정기.jpg';
import img_clean from "./images/청소기.jpg";
import img_coffee from "./images/캡슐커피머신.jpg"
import img_wind from "./images/바람막이.jpg";
import img_healthy from "./images/홍삼.jpg";
//따로 선언해야 합니당

//function for choosing items

const list_of_items = ["공기청정기","청소기","캠슐커피머신","바람막이","홍삼"];
const cost_of_items = [400000, 800000, 200000, 100000, 50000];
const img_of_items = [img_fresh,img_clean,img_coffee,img_wind, img_healthy];

function choose_items(){
    //item 3가지 뽑기
    const item1 = Math.floor(Math.random() * 5);
    var item2 = item1;
    while (item2===item1){
        item2 = Math.floor(Math.random() * 5);
    }
    var item3 = item1;
    while (item3===item1||item3===item2){
        item3 = Math.floor(Math.random() * 5);
    }
    // 각각의 상승률 정하기
    return(
        <div>
            <Itemlist name={list_of_items[item1]} cost = {cost_of_items[item1]} ratio = {ratio()} img = {img_of_items[item1]}/>
            <Itemlist name={list_of_items[item2]} cost = {cost_of_items[item2]} ratio = {ratio()} img = {img_of_items[item2]}/>
            <Itemlist name={list_of_items[item3]} cost = {cost_of_items[item3]} ratio = {ratio()} img = {img_of_items[item3]}/>
        </div>
    )


}

function ratio(){
    return Math.floor(Math.random() * 10)/10+0.4;
}

function Itemlist(props){
    return (
          <div class = "itemlist">
              <img src = {props.img} alt="item_image" width ="100px"/>
              <div>
                <div class = "item_name">{props.name}</div>
                <div>{Math.round(props.cost*props.ratio)} ({Math.round(props.ratio*100)}%) </div>
                <button>O</button>
                <button>X</button>
              </div>
          </div>
      );
};

function Marketview(){
    return(
            <div>
                <div id="carrot">삽니다! 당근마켓</div>
                <div>사고싶어용</div>
                {choose_items()}
                <div>거래를 합시당</div>
                
            </div>
        );
}

export default Marketview;