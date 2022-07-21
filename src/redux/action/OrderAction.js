import axios from "axios";

export const OrderInfo = (Order) => async(dispatch)=>{
    dispatch({ type: "ORDER_INFO", payload: Order });
}
export const createOrder = (order)=>async(dispatch,getState)=>{
    try {
        const {user :{
            userInfo
        },} = getState()
        const {data} = await axios.post('/order/create',order,{
            headers:{
                Authorization:`Bearer ${userInfo.Token}`
            }
        })
        dispatch({type:"ORDER_CREATE_SUCCESS",payload:data})
        dispatch({type:"CART_EMPTY"})
        localStorage.removeItem("cartItems")
    } catch (error) {
        console.log(error)
    }
}

export const getOrderByUser = (id)=>async(dispatch,getState)=>{
    try {
        const {
            user:{userInfo}
        } = getState()
        const {data} = await axios.get(`/order/${id}`,{
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        })
        dispatch({type:"GET_ORDER_BY_USER",payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const getOrderPenddingByUser = (idUser) => async (dispatch, getState) => {
    try {
      const {
        user: { userInfo },
      } = getState();
      const { data } = await axios.get(`/order/orderPendding/${idUser}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: "GET_ORDER_PENDDING_BY_USER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  export const getOrderPaidByUser = (idUser) => async (dispatch, getState) => {
    try {
      const {
        user: { userInfo },
      } = getState();
      const { data } = await axios.get(`http://localhost:5000/order/orderPaid/${idUser}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: "GET_ORDER_PAID_BY_USER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const getOrderShippingByUser = (idUser) => async (dispatch, getState) => {
    try {
      const {
        user: { userInfo },
      } = getState();
      const { data } = await axios.get(`http://localhost:5000/order/orderShipping/${idUser}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: "GET_ORDER_SHIPPING_BY_USER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };


  export const cancelOrder = (orderId) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        `/order/cancel/${orderId}`,
      );
      dispatch({ type: "CANCEL_ORDER", payload: data });  
    } catch (error) {
      console.log(error);
    }
  };
  export const getAllOrder = () => async (dispatch, getState) => {
    try {
      const {
        user: { userInfo },
      } = getState();
      const { data } = await axios.get(`http://localhost:5000/order/`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: "GET_ALL_ORDER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteOrder = (orderId) => async (dispatch, getState) => {
    try {
      const {
        user: { userInfo },
      } = getState();
      const { data } = await axios.delete(
        `http://localhost:5000/order/delete/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: "DELETE_ORDER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };



  export const ShippingOrder = (orderId) => async (dispatch, getState) => {
    try {
      const {
        user: { userInfo },
      } = getState();
  
      const { data } = await axios.put(
        `http://localhost:5000/order/shipping/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: "SHIPPING_ORDER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const PaidOrder = (orderId) => async (dispatch, getState) => {
    try {
      const {
        user: { userInfo },
      } = getState();
  
      const { data } = await axios.put(
        `http://localhost:5000/order/paid/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: "PAID_ORDER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const GetAllOrderPendding = () => async (dispatch, getState) => {
    try {
      const {
        user: { userInfo },
      } = getState();
      const { data } = await axios.get(
        `http://localhost:5000/order/orderPendding`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: "GET_ALL_ORDER_PENDDING", payload: data });
    } catch (error) {
      console.log(error);
    }
  };