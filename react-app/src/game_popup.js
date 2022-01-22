import './Game.css';


import React, { Component, useEffect, useState } from 'react';

function Gamepopup(props){

  return(
    <div >
      <div>{props.ment}</div>
      <button onClick={()=>{props.setGameOpen(false); props.setDeal(1);}}>거래하러 가기</button>
      <button onClick={()=>{props.setGameOpen(false); props.setDeal(2); }}>그냥 퇴근하기</button>
      <button onClick={()=>{props.setGameOpen(false); }}>다시 선택하기</button>
    </div>
  );
}



export default Gamepopup;