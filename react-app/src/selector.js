import './Game.css';
import scenario from './scenario.json'
import test from './test.json'
import innerText from 'react-innertext'

import React, { Component, useEffect, useState } from 'react';


function SelectorView(props) {
    const [count, setCount] = useState(1);
    let [name, setName] = useState(test[0].name);
    let [text, setText] = useState(test[0].text);
    const user = localStorage.getItem("user_id");


    if (name == "김애저") {
        name = user;
        console.log("이름 바꾸기" + name);
    }
    

    function go_next() {
        setCount(count + 1);
        setName(test[count].name);
        setText(test[count].text);
        if (test[count] == "select") {
            document.getElementById('selector-wrapper').style.display = 'grid';
            document.getElementById('selectorA').innerHTML = "test plz"
            /*document.getElementById('selector').innerHTML = test[count].map(i => 
              `<li onclick="addFavor('${encodeURI(JSON.stringify(i.variable))}')">${i.text}</li>`).join('')
          } else {
            document.getElementById('selectorwrapper').style.display = 'hidden';
            document.getElementById('selector').style.display = 'hidden';*/
        }
    }

    /*const selectCase = (v) => {
        JSON.parse(decodeURI(v)).forEach(i => {
            if (!favor[i.name]) {
                favor[i.name] = i.cnt;
            } else {
                fRavor[i.name] += i.cnt;
            }
        })
        ++count
    }*/

    return (


        < div id="selector-wrapper" >
            <ul id="selector">
                <li> { text } </li>
                <li> { text } </li>
            </ul>
        </div >

    );
}



export default SelectorView;