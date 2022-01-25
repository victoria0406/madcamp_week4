import "./styles/App.css";
import Buyview from "./buy_item";
import Marketview from "./market";
import Novelview from "./novel";
import Gameview from "./game";
import Login from "./login";
import Endview from "./ending";

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
    </Routes>
  );
}

export default App;
