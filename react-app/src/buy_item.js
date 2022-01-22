import React, { Component, useState } from "react";
import "./Game.css";

//images of items
import img_fresh from "./images/공기청정기.jpg";
import img_clean from "./images/청소기.jpg";
import img_coffee from "./images/캡슐커피머신.jpg";
import img_wind from "./images/바람막이.jpg";
import img_healthy from "./images/홍삼.jpg";
import Receiptview from "./popups/receipt";
import Simplepopup from "./popups/simple_popup";
//따로 선언해야 합니당

//function for choosing items

const list_of_items = [
  "공기청정기",
  "청소기",
  "캡슐커피머신",
  "바람막이",
  "홍삼",
];
const cost_of_items = [400000, 800000, 200000, 100000, 50000];
const img_of_items = [img_fresh, img_clean, img_coffee, img_wind, img_healthy];
var total_cost = 0;

function Buylist(props) {
  const [count, setCount] = useState(0);
  function reduce_item() {
    if (count !== 0) {
      setCount(count - 1);
      props.setCost(props.cost - cost_of_items[props.index]);
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
        <div class="itemlist_buy">
            <img src = {img_of_items[props.index]} alt="item_image" width ="60px" height="60px"/>
            <div>
                <div>{list_of_items[props.index]}</div>
                <div>{cost_of_items[props.index]}원</div>
            </div>
            <div class = "buy_count">
                <button className='buy_count_button' onClick={reduce_item}>-</button>
                <p>{count}</p>
                <button className='buy_count_button' onClick={increase_item}>+</button>
            </div>
        </div> 
    )
    
}

function Buyview(props) {
    const [total_cost, setTotal_cost] = useState(0);
    const [buyitem, setBuyItem] = useState([0,0,0,0,0]);
    const [receipt_popup, setReceipt_popup] = useState(false);
    const [simplepopup, setSimplepopup] = useState(false);

    function show_receipt(){
        if(total_cost>props.point){
            setSimplepopup(true);
        }else{
            setReceipt_popup(true);
        }
    }

    function update_list(){
        props.setPoint(props.point-total_cost); 
        var total_item = props.items.slice();
        for(var i=0;i<5;i++){
            total_item[i]+=buyitem[i];
            console.log("item: ",total_item[i]);
        }
        console.log(total_item);
        props.setItems(total_item);
        setReceipt_popup(false);
    }


    return(
        <div>
            <div id="hyendai">현대카드 포인트</div>
            {props.can_buy?
            <div>
                <div className='head_text'>현재 총액: {total_cost}Point</div>
                <Buylist index={0} cost = {total_cost} setCost = {setTotal_cost} item = {buyitem} setItem = {setBuyItem}/>
                <Buylist index={1} cost = {total_cost} setCost = {setTotal_cost} item = {buyitem} setItem = {setBuyItem}/>
                <Buylist index={2} cost = {total_cost} setCost = {setTotal_cost} item = {buyitem} setItem = {setBuyItem}/>
                <Buylist index={3} cost = {total_cost} setCost = {setTotal_cost} item = {buyitem} setItem = {setBuyItem}/>
                <Buylist index={4} cost = {total_cost} setCost = {setTotal_cost} item = {buyitem} setItem = {setBuyItem}/>
                <button className = "buy_button" onClick={()=>{show_receipt()}}>구매하기</button>
                {receipt_popup&&<Receiptview items ={buyitem} point = {total_cost} update = {update_list} setPopup={setReceipt_popup}/>}
                {simplepopup&&<Simplepopup ment = "구매 가능한 금액을 초과했습니다" setPopup = {setSimplepopup}/>}
            </div>:
            <div className='simple_text'>지금은 구매가능 시간이 아닙니다.</div>
            }
        </div>
    );
}

export default Buyview;
