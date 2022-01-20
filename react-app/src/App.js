import "./App.css";
import Buyview from "./buy_item";
import Marketview from "./market";
import Novelview from "./novel";

import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/main" exact component={Marketview} />
      <Route path="/" exact component={Buyview} />
      <Route path="/novel" exact component={Novelview} />
    </Router>
  );
}

export default App;
