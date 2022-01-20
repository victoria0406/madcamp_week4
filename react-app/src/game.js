import React, { Component } from 'react';

import './Game.css';
import Buyview from './buy_item';
import Marketview from './market';
import Novelview from './novel';

class Gameview extends Component {
    render(){
        return(
            <div class = "main">
                <div class = "game_image">
                    <Novelview/>
                </div>
                <div class = "phone">
                    <Marketview/>
                </div>
            </div>
        );
    }
    
}

export default Gameview;

