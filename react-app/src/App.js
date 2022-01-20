import "./App.css";
import Buyview from "./buy_item";
import Marketview from "./market";
import Novelview from "./novel";
import Gameview from "./game";

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
      <Route path="/" element={<Buyview />} />
    </Routes>
  );
}

export default App;
