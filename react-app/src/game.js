import React, { Component, useState } from 'react';
import ReactSwipe from 'react-swipe';


import './Game.css';
import Buyview from './buy_item';
import Marketview from './market';
import Novelview from './novel';
import Bankview from './bank';
import Chatview from './chat';
import { Modal } from 'bootstrap';

const BASE_URL = "http://192.249.18.165";

const days = ['일', '월', '화', '수', '목', '금', '토']
const doing_ment = ["출근 준비 중", "일하는 중","거래하는 중"];
const next_do_ment = ["출근시키기", "퇴근하기"];
const end_day = 14;
const user_id = console.log(localStorage.getItem("user_id"));
//이 자리에서 처음으로 데이터 로드 해준다. (세이브가 없으면 기본 세팅으로)
//아이템 순서 const list_of_items = ["공기청정기","청소기","캡슐커피머신","바람막이","홍삼"];
var prev_point = localStorage.getItem("point")!=null? localStorage.getItem("point"):3000000;
var prev_money = localStorage.getItem("money")!=null? localStorage.getItem("money"):0;
var had_items = localStorage.getItem("item_list")!=null? localStorage.getItem("item_list").split(","):[0,0,0,0,0];
var start_day = localStorage.getItem("day")!=null? localStorage.getItem("day"):1;


function ratio(){
    return Math.floor(Math.random() * 10)/10+0.4;
}

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
    return [{item:item1, ratio:ratio()}, {item:item2, ratio:ratio()}, {item:item3, ratio:ratio()}];
}

function Gameview(){
    let reactSwipeEl;
    const [page, setPage] = useState(0);
    //const [market, setMarket] = useState(<Marketview/>);
    const [sell_items,setSellItems] = useState(choose_items());
    const [day,setDay] = useState(start_day);
    const [doing, setDoing] = useState(0);
    const [have_items, setHaveItems] = useState(had_items);
    const [money, setMoney] = useState(prev_money);
    const [point,setPoint] = useState(prev_point);


    console.log("day:",start_day, "money:",money, "point:", point);

    function go_toss(){
        for(var i=0;i<page;i++){
            reactSwipeEl.prev();
        }
        setPage(0);
    }
    function go_carrot(){
        if(page===0){
            reactSwipeEl.next()
        }
        else if(page===2){
            reactSwipeEl.prev()
        }
        setPage(1);
    }
    function go_kakao(){
        for(var i=0;i<2-page;i++){
            reactSwipeEl.next();
        }
        setPage(2);
    }
    //출근, 일하고, 퇴근 거래 포멧
    function do_next_work(){
        if (doing===0){
            setDoing(1);
            go_carrot();
        }
        else if(doing===1){
            setDoing(2);
            go_carrot();
        }else if (doing===2){
            if(day ===end_day){
                document.location.href = "/ending"; //각각 분기점에 대해 data로 다른 엔딩 페이지 넘겨주기
            }else{
                setDoing(0);
                go_toss();
                setDay(day+1);
                start_day = start_day+1;
                //로컬 스토리지 대신 서버로 넘겨주면 되겠다.
                localStorage.setItem("money",money);
                localStorage.setItem("day",day+1);
                localStorage.setItem("point",point);
                localStorage.setItem("item_list",have_items);
                setSellItems(choose_items());
            }
        }
    }
    //토요일 할 일
    return(
        <div class = "main">
            <div class = "game_image">
                <div className='Day'>day {day} ({days[(day-1)%7]})</div>
                <div className='doing'>{doing_ment[doing]}</div>
                {doing===2?<></>:<button onClick = {()=> {do_next_work();}}>{next_do_ment[doing]}</button>}
                <div>{money}</div>
                <div>{point}</div>
                <div></div>
                {doing===2 ?<Novelview final_next = {do_next_work}/>:<></>}
                
                
            </div>
            <div className= "phone" >
                <div class="phone_element">
                    <ReactSwipe
                    className='page'
                    swipeOptions={{continuous:false}}
                    ref = {el=>(reactSwipeEl=el)}>
                        <div><Bankview money = {money} point = {point} have_items = {have_items}/></div>
                        <div>{day%7==1?<Buyview items = {have_items} setItems = {setHaveItems} point={point} setPoint = {setPoint}/>:<Marketview items ={sell_items} have_items={have_items} setHaveItems = {setHaveItems}/>}</div>
                        <div><Chatview/></div>
                    </ReactSwipe>
                    
                </div>
                <div class = "app_buttons">
                    <button class="applications" onClick = {()=>{go_toss()}}>토스</button>
                    <button class="applications" onClick={()=>{go_carrot()}}>{day%7==1?"P":"당근"}</button>
                    <button class="applications" onClick={()=>{go_kakao()}}>카톡</button>
                </div>
            </div>
        </div>
    );
}



export default Gameview;

