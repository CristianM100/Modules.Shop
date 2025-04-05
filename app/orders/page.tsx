 "use client";

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

interface Order {
  _id: string;
  status: string;
  totalAmount: number;
  items: { productId: string }[];
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const userId = user.id;

    fetch(`/api/orders?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          setOrders([]);
        }
      })
      .catch(() => setOrders([]));
  }, [user, isLoaded]);

  return (
    <div>
      <h1 className="m-8">My Orders</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order._id}>
            <p>Status: {order.status}</p>
            <p>Total: ${order.totalAmount / 100}</p>
            <p>Items: {order.items.map((item) => item.productId).join(', ')}</p>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;





