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

<<<<<<< HEAD

=======
>>>>>>> 31a990ffb664e4da8ee7ec25d637c3ff674128ac
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
