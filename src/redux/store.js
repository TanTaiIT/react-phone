import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { AddToCard } from './reducer/CartReducers'
import { getAllUserReducer, UserReducer, UserSignupReducer } from './reducer/UserReducer'
import { Address } from './reducer/AddressReducer'
import { getAllOrderReducer, OrderInfo, OrderOfUser } from './reducer/OrderReducer'
import { AllProduct, AllProductReducer, SearchProduct } from './reducer/ProductReducer'
import { ListTypeProductReducer, TypeProductReducer } from './reducer/ListTypeProductReducer'
const CartItem = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const User = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState = {
    cartReducer:{
        cartItem : CartItem
    },
    user: {
        userInfo:User
    }
}
const reducer = combineReducers({
    searchProduct:SearchProduct,
    allProduct: AllProduct,
    cartReducer : AddToCard,
    userRegister:UserSignupReducer,
    user : UserReducer,
    order:Address,
    orderReducer : OrderInfo,
    getAllOrder : getAllOrderReducer,
    getOrderOfUser: OrderOfUser,
    getAllProduct: AllProductReducer ,
    allTypeProduct: ListTypeProductReducer,
    detailType: TypeProductReducer,
    UserReducer: getAllUserReducer
})

const middleware = [thunk] 

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store

