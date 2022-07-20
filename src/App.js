import './App.scss';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import Detail from './pages/Detail';
import RegisterPage from './components/login/RegisterPage'
import Cart from './pages/Cart';
import Order from './pages/Order';
import Success from './pages/Success';
import MyOrder from './pages/MyOrder';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Admin from './components/Admin/Admin'
function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route exact path='/detail/:id' element={<Detail/>}/>
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<RegisterPage/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/success' element={<Success/>} />
          <Route path='/myorder/*' element={<MyOrder/>}/>
          <Route path='/search' element={<Search/>} />
          <Route exact path="/*" element={<NotFound/>}/>
          <Route path='/admin/*' element={<Admin/>}/>
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
