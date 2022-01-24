import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import Menu from "./menu_bar";
import "./styles/ending.css";

function restart(){
    document.location.href = "/main";
    //설영아 여기서 변경해줘
}


function Endview(props){
    const { pathname } = useLocation();
    
    function ending_ment(){
        switch(pathname.split("/")[2]){
            case "bad": return "결국 돈이 없어 월세를 못내게 된 당신, 결국 집을 나와 고시원에서 지내게 되었습니다."
            case "normal": return "당신은 무사히 2주 동안 포인트로 생활을 할 수 있었습니다."
            case "good": return "당신의 우수한 거래 능력에 감탄한 당근마켓에서 당신을 채용했습니다."
            case "leave": return "결국 당신은 부당한 회장의 대응에 사표를 던지고 나왔습니다. 이제 회사를 상대로 소송을 하러 가실까요?"
            default:
                return ""
        }
    }

    return(
    <div>
        <div className="ending">
            
            <div id = "ending_ment">{ending_ment()}</div>
            <button id= "restart_button" onClick = {restart}>RESTART</button>
        </div>
        <Menu/>
    </div>
        
    );
}

export default Endview;