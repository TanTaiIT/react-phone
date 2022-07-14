import './App.scss';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import Detail from './pages/Detail';
import RegisterPage from './components/login/RegisterPage'
import Cart from './pages/Cart';
import Order from './pages/Order';
function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route exact path='/:id' element={<Detail/>}/>
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<RegisterPage/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<Order/>} />
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
