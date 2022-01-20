import './App.css';
import Buyview from './buy_item';
import Marketview from './market';
import Novelview from './novel';
import Gameview from './game';

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Route path="/main" exact component={Gameview}/>
      <Route path="/" exact component={Buyview}/>
    </Router>
  );
}

export default App;
