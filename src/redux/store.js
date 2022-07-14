import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { AddToCard } from './reducer/ProductReducer'
import { UserReducer } from './reducer/UserReducer'
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
    cartReducer : AddToCard,
    user : UserReducer
})

const middleware = [thunk] 

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store

