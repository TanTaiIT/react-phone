import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../../redux/action/OrderAction";
import ListOrder from "../AdminOrderUI/ListOrder";

function AdminOrderAll(props) {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orderReducer.order);
  // const { orderGhnInfo } = useSelector((state) => state.orderGhn);
  // const orderGhn = useSelector(state => state.orderGhn)
  

  useEffect(() => {
    dispatch(getAllOrder());
  }, [dispatch]);


  return (
    <div>
      {orders && orders.length > 0 ? (
        <ListOrder orders={orders}/>
      ) : (
        <h4>Không có đơn hàng</h4>
      )}
    </div>
  );
}

export default AdminOrderAll;
