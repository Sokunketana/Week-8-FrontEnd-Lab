import React from "react";

export default function OrderCard({
  product,
  price,
  quantity,
  onDecrease,
  onIncrease,
}) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>${price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <button className="order-button" onClick={onDecrease} disabled={quantity === 0}>
          -
        </button>
        <h4>{quantity}</h4>
        <button className="order-button" onClick={onIncrease}>
          +
        </button>
      </div>
    </div>
  );
}
