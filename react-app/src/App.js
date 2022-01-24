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

function App() {
  return (
    <Routes>
      <Route path="/main" element={<Gameview />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ending" element={<Endview />} />
      <Route path = "/ending_collect" element = {<Endcollectview/>}/>
    </Routes>
  );
}

export default App;
