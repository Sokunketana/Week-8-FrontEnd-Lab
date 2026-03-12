import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  function handleQuantityChange(index, changeAmmount) {
    setOrders((prevOrders) =>
      prevOrders.map((order, i) => {
        if (i !== index) return order;

        return {
          ...order,
          quantity: Math.max(0, order.quantity + changeAmmount),
        };
      })
    );
  }

  function handleTotalPrice() {
    return orders.reduce(
      (totalPrice, order) => totalPrice + order.price * order.quantity,
      0
    );
  }

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onDecrease={() => handleQuantityChange(orders.indexOf(order), -1)}
            onIncrease={() => handleQuantityChange(orders.indexOf(order), 1)}
          />
        ))}
      </div>

      <CheckoutButton total={handleTotalPrice()}></CheckoutButton>
    </>
  );
}
