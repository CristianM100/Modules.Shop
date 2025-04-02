/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from "react";

interface Order {
  _id: string;
  status: string;
  totalAmount: number;
  items: { productId: string }[];
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          setOrders([]); // Default to an empty array if the response is invalid
        }
      })
      .catch(() => setOrders([])); // Handle fetch errors
  }, []);

  return (
    <div>
      <h1 className="m-8">My Orders</h1>
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order: any) => (
            <div key={order._id}>
              <p>Status: {order.status}</p>
              <p>Total: ${order.totalAmount / 100}</p>
              <p>Items: {order.items.map((item: any) => item.productId).join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )
      }
    </div>
  );
};

export default Orders;
