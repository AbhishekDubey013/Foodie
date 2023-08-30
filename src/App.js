import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import Inventory from './screens/Inventory';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/myorder" element={<MyOrder />} />
            <Route exact path="/inventory" element={<Inventory />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
