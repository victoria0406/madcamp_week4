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
import { useEffect } from "react";
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
  useEffect(() => {
    resizeApply();
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<GameRouter />} />
    </Routes>
  );
}

export default App;
