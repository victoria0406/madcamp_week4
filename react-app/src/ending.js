import React, { Component } from "react";
import Menu from "./menu_bar";
import "./styles/ending.css";

function restart(){
    document.location.href = "/main";
    //설영아 여기서 변경해줘
}


function Endview(){
    return(
    <div>
        <div className="ending">
            <button onClick = {restart}>RESTART</button>
        </div>
        <Menu/>
    </div>
        
    );
}

export default Endview;