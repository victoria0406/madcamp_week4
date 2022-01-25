import "./styles/App.css";
import Buyview from "./buy_item";
import Marketview from "./market";
import Novelview from "./novel";
import Gameview from "./game";
import Login from "./login";
import Endview from "./ending";
import Endcollectview from "./ending_collect";

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import Credit from "./credit";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://192.249.18.165";
const id = localStorage.getItem("user_id");


function GameRouter() {
    const [init, setInit] = useState(false);
    const [ingame_info, setIngameInfo] = useState({day:1, money:0, name:"미정", point:0, have_item:[0,0,0,0,0,0]});
    const [ending_info, setEndingInfo] = useState([0,0,0,0,0,0]);

  useEffect(() => {
    var t_game_info = {day:1, money:0, name:"미정", point:0, have_item:[0,0,0,0,0,0]};
    let tempListNow = [0, 0, 0, 0, 0, 0];

    axios
      .get(BASE_URL + `/load/${id}`)
      .then((response) => {
        console.log("load data, put in variable");
        console.log(response.data.day.tey);
        t_game_info.day = Number(response.data.day);
        t_game_info.money = Number(response.data.money);
        t_game_info.name = response.data.name;
        if (response.data.point != null) {
          t_game_info.point =  Number(response.data.point);
        }
        if (response.data.itemList != null) {
          var temp_list = [0, 0, 0, 0, 0, 0];
          var temp = response.data.itemList.slice(1, -1).split(",");
          for (var i = 0; i < 6; i++) {
            temp_list[i] = Number(temp[i]);
          }
          t_game_info.have_item = temp_list;
        }
        let tempListEnd = [0, 0, 0, 0, 0, 0];
        let saveList = [0, 0, 0, 0, 0, 0];
        if (response.data.endingList != null) {
            var temp = response.data.endingList.slice(1, -1).split(",");

            for (var i = 0; i < 6; i++) {
            tempListEnd[i] = Number(temp[i]);
            }
            // setEndingList(tempListEnd);
        }

        for (var i = 0; i < 6; i++) {
            saveList[i] = tempListNow[i] || tempListEnd[i];
        }
        //실행 순서 상 아래 switch 문이 먼저 돌아간다. 따라서 OR 연산을 해준다.(어차피 본 횟수는 안 셀거임)
        setEndingInfo(saveList);
        setIngameInfo(t_game_info);
        console.log(t_game_info);
        setInit(true);
      } )
      .catch((error) => {
        console.log(error);
      });
    

    


  },[]);

  useEffect(()=>{
    if(ingame_info.day>1){
        axios
        .patch(BASE_URL + `/save/${id}`, {
        money: ingame_info.money,
        day: ingame_info.day===0?1:ingame_info.day,
        point: ingame_info.point,
        item_list: JSON.stringify(ingame_info.have_item),
        })
        .then((response) => {
        console.log(response.data);
        });
    }
    

  },[ingame_info]);

  useEffect(()=>{
      console.log(ending_info)
    axios
    .patch(BASE_URL + `/reset/${id}`, {
      endingList: JSON.stringify(ending_info),
    })
    .then((response) => {
      console.log(response.data);
    });
  },[ending_info])


  if(init){
      return (
        <Routes>
        <Route path="/main" element={<Gameview infos = {ingame_info} setIngameInfo = {setIngameInfo}/>} />
        <Route path="/ending/:id" element={<Endview  ending_info = {ending_info} setEndingInfo = {setEndingInfo}/>} />
        <Route path = "/ending_collect" element = {<Endcollectview ending_info = {ending_info}/>}/>
        <Route path = "/credit" element ={<Credit/>}/>
        </Routes>
    );
  }else{
      return <></>;
  }
  
}

export default GameRouter;