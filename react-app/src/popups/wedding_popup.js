import './popup.css';


import React, { Component, useEffect, useState } from 'react';

function Weddingpopup(props){
    return(
    <div className='popup_game'>
        <div id = "deal_popup">
            <div>{props.ment}</div>
            <button className='popup_button' onClick={()=>{props.setGotoWedding(false)}}>오케이</button>
            </div>
        </div>
      
    )
  }

export default Weddingpopup;