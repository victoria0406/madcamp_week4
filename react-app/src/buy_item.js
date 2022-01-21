import React, { Component, useState } from 'react';
import "./Game.css";


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
var total_cost = 0;



function Buylist(props) {
    const [count, setCount] =useState(0);
    function reduce_item(){
        if(count!==0){
            setCount(count-1); 
            props.setCost(props.cost-cost_of_items[props.index]);
            var reduce = props.item;
            reduce[props.index]--;
            props.setItem(reduce);
        }
    }
    function increase_item(){
        setCount(count+1);
        props.setCost(props.cost+cost_of_items[props.index]);
        var increase = props.item;
        increase[props.index]++;
        props.setItem(increase);
    
    }
    return(
        <div class="itemlist">
            <img src = {img_of_items[props.index]} alt="item_image" width ="100px"/>
            <div>
                <div>{list_of_items[props.index]}</div>
                <div>{cost_of_items[props.index]} </div>
                <div class = "buy_count">
                    <button onClick={reduce_item}>-</button>
                    <p>{count}</p>
                    <button onClick={increase_item}>+</button>
                </div>
            </div>
            
        </div> 
    )
    
}


function Buyview(props){
    const [total_cost, setTotal_cost] = useState(0);
    const [buyitem, setBuyItem] = useState(props.items.slice());
    function update_list(){
        if(props.point>=total_cost){
            props.setPoint(props.point-total_cost); 
        props.setItems(buyitem);
        }
        else{
            //구매 못한다고 팝업 띄우기
        }
    }
    return(
        <div>
            <div>{total_cost}</div>
            <Buylist index={0} cost = {total_cost} setCost = {setTotal_cost} item = {buyitem} setItem = {setBuyItem}/>
            <Buylist index={1} cost = {total_cost} setCost = {setTotal_cost} item = {buyitem} setItem = {setBuyItem}/>
            <Buylist index={2} cost = {total_cost} setCost = {setTotal_cost} item = {buyitem} setItem = {setBuyItem}/>
            <Buylist index={3} cost = {total_cost} setCost = {setTotal_cost} item = {buyitem} setItem = {setBuyItem}/>
            <Buylist index={4} cost = {total_cost} setCost = {setTotal_cost} item = {buyitem} setItem = {setBuyItem}/>
            <button onClick={update_list}>구매하기</button>
        </div>
    );
}
    


export default Buyview;