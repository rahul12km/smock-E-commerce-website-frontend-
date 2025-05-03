import React from 'react';
import {useParams} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const Order = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const payid = searchParams.get('payid');
    const { data: cartData, loading } = useSelector((state) => state.cart);''

  return (
    <div>
      <h1>Order Page</h1>
      <p>Pay ID: {payid}</p>
    </div>
  );

}

export default Order
