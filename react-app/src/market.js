import React, { Component } from 'react';


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

class Itemlist extends Component {
    render() {
      return (
          <div>
              <img src = {this.props.img} alt="item_image" width ="100px"/>
              <div>{this.props.name}</div>
              <div>{this.props.cost}원 에서 {Math.round(this.props.cost*this.props.ratio)} ({Math.round(this.props.ratio*100)}%) </div>
              <button>O</button>
              <button>X</button>
          </div>
      )
    }
  }


class Marketview extends Component {
    render(){
        return(
            <div>
                {choose_items()}
            </div>
        );
    }
    
}

export default Marketview;