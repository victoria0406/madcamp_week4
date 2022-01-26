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
import { useEffect, useReducer, useState } from "react";
import GameRouter from "./GameRouter";

function resizeApply() {
  var minWidth = 1920;
  var body = document.getElementsByTagName("body")[0];
  body.style.zoom = window.innerWidth / minWidth;
}

window.addEventListener("resize", function () {
  resizeApply();
});



function App() {
  const [init, setInit] = useState(false);

  const[cursorX, setCursorX] = useState();
  const[cursorY, setCursorY] = useState();

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  useEffect(() => {
    resizeApply();
    if(!init){
    }
    setInit(true);
  }, []);
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<GameRouter />} />
    </Routes>
    </>
  );
}

export default App;
