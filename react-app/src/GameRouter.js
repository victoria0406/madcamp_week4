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
import axios from "axios";

const BASE_URL = "http://192.249.18.165";
const id = localStorage.getItem("user_id");
function GameRouter() {


  useEffect(() => {
    axios
      .get(BASE_URL + `/load/${id}`)
      .then((response) => {
        console.log("load data, put in variable");
        console.log(response.data);
      } )
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Routes>
      <Route path="/main" element={<Gameview />} />
      <Route path="/ending/:id" element={<Endview />} />
      <Route path = "/ending_collect" element = {<Endcollectview/>}/>
      <Route path = "/credit" element ={<Credit/>}/>
    </Routes>
  );
}

export default GameRouter;