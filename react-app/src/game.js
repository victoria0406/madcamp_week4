import React, { Component, useState } from 'react';

import './Game.css';
import Buyview from './buy_item';
import Marketview from './market';
import Novelview from './novel';
import Bankview from './bank';
import Chatview from './chat';

function Gameview(){
    const [page, setPage] = useState(<Marketview/>);
    return(
        <div class = "main">
            <div class = "game_image">
                <Novelview/>
            </div>
            <div class = "phone" >
                <div class="phone_element">
                    {page}
                </div>
                <div class = "app_buttons">
                    <button class="applications" onClick = {()=>{setPage(<Marketview/>)}}>당근</button>
                    <button class="applications" onClick={()=>{setPage(<Bankview/>)}}>토스</button>
                    <button class="applications" onClick={()=>{setPage(<Chatview/>)}}>카톡</button>
                </div>
            </div>
        </div>
    );
}



export default Gameview;

