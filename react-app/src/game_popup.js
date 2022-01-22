import './Game.css';


import React, { Component, useEffect, useState } from 'react';

function Gamepopup(props){

  return(
    <div >
      <div>{props.ment}</div>
      <button>거래하러 가기</button>
      <button>퇴근하기</button>
    </div>
  );
}



export default Gamepopup;