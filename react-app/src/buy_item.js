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

const list_of_items = ["공기청정기","청소기","캠슐커피머신","바람막이","홍삼"];
const cost_of_items = [400000, 800000, 200000, 100000, 50000];
const img_of_items = [img_fresh,img_clean,img_coffee,img_wind, img_healthy];
var total_cost = 0;



function Buylist(props) {
    const [count, setCount] =useState(0);
    return(
        <div class="itemlist">
            <img src = {img_of_items[Number(props.index)]} alt="item_image" width ="100px"/>
            <div>
                <div>{list_of_items[Number(props.index)]}</div>
                <div>{cost_of_items[Number(props.index)]} </div>
                <div class = "buy_count">
                    <button onClick={()=>{if(count!==0){setCount(count-1); props.setCost(props.cost-cost_of_items[Number(props.index)]);}}}>-</button>
                    <p>{count}</p>
                    <button onClick={()=>{setCount(count+1);props.setCost(props.cost+cost_of_items[Number(props.index)]);}}>+</button>
                </div>
            </div>
            
        </div> 
    )
    
}


function Buyview(){
    const [total_cost, setTotal_cost] = useState(0)
    return(
        <div>
            <div>{total_cost}</div>
            <Buylist index="0" cost = {total_cost} setCost = {setTotal_cost}/>
            <Buylist index="1" cost = {total_cost} setCost = {setTotal_cost}/>
            <Buylist index="2" cost = {total_cost} setCost = {setTotal_cost}/>
            <Buylist index="3" cost = {total_cost} setCost = {setTotal_cost}/>
            <Buylist index="4" cost = {total_cost} setCost = {setTotal_cost}/>
            <button >구매하기</button>
        </div>
    );
}
    


export default Buyview;