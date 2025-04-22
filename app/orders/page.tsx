 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { formatCurrency } from "@/lib/utils";

interface OrderItem {
  productId: string;
  title: string;
  img: string;
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  status: string;
  totalAmount: number;
  items: OrderItem[];
  shippingInfo: string;
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    fetch(`/api/orders?userId=${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setOrders(data);
        else setOrders([]);
      })
      .catch(() => setOrders([]));
  }, [user, isLoaded]);

  return (
    <>
      {orders.length > 0 ? (
        <main className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
          <h2 className="text-3xl font-bold">Order Details</h2>
          <div className="mt-3 text-sm">
            Check the status of recent and old orders & discover more products
          </div>

          {orders.map((order) => (
            <div
              key={order._id}
              className="mt-8 flex flex-col overflow-hidden md:flex-row border rounded-xl"
            >
              <div className="w-full bg-gray-100 md:max-w-xs p-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1 gap-4">
                  <div>
                    <div className="text-sm font-semibold">Order ID</div>
                    <div className="text-sm font-medium text-gray-700">
                      #{order._id}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Total Amount</div>
                    <div className="text-sm font-medium text-gray-700">
                      {formatCurrency({ amount: order.totalAmount })}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Status</div>
                    <div className="text-sm font-medium text-gray-700">
                      {order.status}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Name</div>
                    <div className="text-sm font-medium text-gray-700">
                      {order.shippingInfo.fullName}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-8">
                <ul className="-my-7 divide-y divide-gray-200">
                  {order.items.map((item, index) => (
                    <li key={`${order._id}-${index}`} className="py-7">
                      <Link
                        href={`/products/${item.productId}`}
                        className="flex flex-col justify-between space-x-5 md:flex-row"
                      >
                        <div className="flex flex-1 items-center">
                        {item.img ? (
                          <Image
                            width={80}
                            height={80}
                            className="rounded-lg border object-contain"
                            src={item.img}
                            alt={item.title}
                          />
                        ) : (
                              <div className="h-20 w-20 flex items-center justify-center rounded-lg border bg-gray-200 text-xs text-gray-500">
                                No Image
                              </div>
                            )}
                          <div className="ml-5">
                            <p className="text-sm font-bold text-gray-900">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              x {item.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="ml-auto text-right text-sm font-bold text-gray-900">
                          {formatCurrency({ amount: item.price })}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </main>
      ) : (
        <div className="text-center text-gray-500 mt-10">No Orders!</div>
      )}
    </>
  );
};

export default Orders;


      



   /* <div>
      <h1 className="m-8">My Orders</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order._id}>
            <p>Items: {order.items.map((item) => item.productId).join(', ')}</p>
            <p>Total: ${order.totalAmount / 100}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>*/






