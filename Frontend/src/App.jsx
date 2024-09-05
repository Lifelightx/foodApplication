
import './App.css';
import Login from './components/Login';
import Layout from './Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home';
import Signup from './components/Signup';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './components/ContexReducer.js';
import Cart from './screens/Cart.jsx';
import MyOrder from './screens/MyOrder.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route exact path='' element={<Home />} />
            <Route exact path='/myOrder' element={<MyOrder/>} />
          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
        <Routes>
          <Route exact path='/cart' element={<Cart/>} />
        </Routes>
        
      </Router>
    </CartProvider>

  );
}

export default App;
