import React, { Component } from 'react';
import "./popup.css"

function Simplepopup(props) {
    return(
        <div className='popup'>
            <div id = "simplepopup">
                <div>{props.ment}</div>
                <button onClick={()=>props.setPopup(false)}>오케이</button>
            </div>
            
        </div>
    );
    
}
export default Simplepopup;