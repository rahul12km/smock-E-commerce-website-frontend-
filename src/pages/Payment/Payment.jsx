import React, { useState, useEffect } from "react";
import axios from "axios";

import Cookies from "js-cookie";
import { backendAPI } from "../../API";

const Payment = () => {
  const accessToken = Cookies.get("access_token");
  const [subscriber, setSubscriber] = useState(); // Initialize state with null
  const fetchSubscriber = async () => {
    try {
      const { data } = await axios.get(`${backendAPI}/api/subscribers/`, {
        headers: {
          // Use headers instead of header
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(data);
      if (data) {
        setSubscriber(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchSubscriber();
  }, []); // Fetch subscriber only once on component mount

  useEffect(() => {
    if (subscriber) {
      buyProduct();
    }
  }, [subscriber]); // Fetch subscriber only once on component

  const buyProduct = async () => {
    const {
      data: { key },
    } = await axios.get(`${backendAPI}/api/getKey`, {
      headers: {
        // Use headers instead of header
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const {
      data: { order },
    } = await axios.post(
      `${backendAPI}/api/checkout`,
      {
        amount: 2000,
      },
      {
        headers: {
          // Use headers instead of header
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const options = {
      key,
      amount: order.amount,

      currency: "INR",
      name: "Smock",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      callback_url: `${backendAPI}/api/paymentverification`,
      prefill: {
        name: subscriber.name,
        email: subscriber.email,
        contact: subscriber.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  // Ensure that subscriber is loaded before attempting to buy the product
  if (!subscriber) {
    return <div>Loading...</div>;
  }

  return <button>axes</button>;
};

export default Payment;
