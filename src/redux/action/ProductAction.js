import axios from 'axios'
import { axiosClient } from '../../services/config.services'
export const getAllProduct = () => async(dispatch)=>{
    try {
        const {data} = await axios.get(`/products`)
        dispatch({type:"GET_ALL_PRODUCT",payload:data})
    } catch (error) {
        dispatch({type:"GET_ALL_PRODUCT_FAIL",payload:error})
    }
}
export const addToCart = (data)=>{
    return {
        type:"ADD_TO_CARD",
        payload: data
    }
}

export const removeCart = (id) =>{
    return {
        type:"REMOVE_CART",
        payload:id
    }
}

export const removeItem = (id)=>{
    return{
        type:"REMOVE_ITEM",
        payload:id
    }
}
export const reviewProduct = (id,review)=> async(dispatch,getState)=>{
    try {
        const {data} = await axios.post(`/products/rate/${id}`,review)
        dispatch({type:"REVIEW_PRODUCT",payload:data})
    } catch (error) {
        dispatch({type:"REVIEW_PRODUCT_FAIL",payload:error})
    }
}

export const getProductDetail = (id)=>async(dispatch)=>{
    try {
        const {data} =  await axios.get(`/products/detail/${id}`)
        dispatch({type:"GET_PRODUCT_BY_ID",payload:data})
    } catch (error) {
        dispatch({type:"GET_PRODUCT_FAIL",payload:error})
    }
}
export const decreaseProduct = () =>async(dispatch) =>{
    dispatch({type:"DESCENDING_PRODUCT"})
} 
export const increaseProduct = () =>async(dispatch)=> {
    dispatch({type:"INCENDING_PRODUCT"})
}

export const searchProduct = (search)=> async(dispatch)=>{
    try {
        const {data} = await axios.get(`/products/search/product?name=${search}`)
        dispatch({type:"SEARCH_PRODUCT",payload:data})
    } catch (error) {
        dispatch({ type: "SEARCH_PRODUCT_FAIL", payload: error.message });
    }
}

export const saveProduct = (product) => async (dispatch, getState) => {
  
    try {
      const {
        user: { userInfo },
      } = getState();
      if (!product.get('_id')) {
        const { data } = await axios.post(
          "http://localhost:5000/products/create",
          product,
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        dispatch({ type: "SAVE_PRODUCT", payload: data });
        // document.location.href = '/admin/product';
      } else {
        console.log("update");
        const { data } = await axios.put(
          `http://localhost:5000/products/update`,
          product,
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        dispatch({ type: "SAVE_PRODUCT", payload: data });
        // document.location.href = '/admin/product';
      }
    } catch (error) {
      dispatch({ type: "SAVE_PRODUCT_FAIL", payload: error.message });
    }
  };

  export const editCurrentPage = (page) => async (dispatch) => {
    dispatch({ type: "EDIT_CURRENT_PAGE", payload: page });
  }
  export const paginationProduct = (page) => async (dispatch) => {
    try {
      const data = await axiosClient.get(
        `/products/pagination/${page}`
      );
      dispatch({ type: "PAGINATION_PRODUCT", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  


  export const getproductById = (id) => async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/products/detail/${id}`
      );
      dispatch({ type: "GET_PRODUCT_BY_ID", payload: data });
    } catch (error) {
      dispatch({ type: "GET_PRODUCT_BY_ID_FAIL", payload: error.message });
    }
  };

  export const removeProductById = (id) => async (dispatch) => {
    dispatch({ type: "REMOVE_PRODUCT_BY_ID"});
  };

  export const DeleteProduct = (productId) => async (dispatch, getState) => {
    console.log(productId)
    try {
      const {
        user: { userInfo },
      } = getState();
      const { data } = await axios.delete(
        `http://localhost:5000/products/delete/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      console.log(data)
      dispatch({ type: "DELETE_PRODUCT", payload: data });
    } catch (error) {
      dispatch({ type: "DELETE_PRODUCT_FAIL", payload: error.message });
    }
  };

  
  export const BlogProduct = (id, blog) => async (dispatch, getState) => {
    console.log(blog)
    const {
      user: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(
        `http://localhost:5000/products/blog/${id}`,
        blog,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: "BLOG_PRODUCT", payload: data });
    } catch (error) {
      dispatch({ type: "BLOG_PRODUCT_FAIL", payload: error });
    }
  };

  


  

