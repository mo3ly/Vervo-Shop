"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart.",
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const cartItems: CartItem[] = [
  { id: 1, name: "Relaxed Sweet Pants", price: 45.99, quantity: 2 },
  { id: 2, name: "Elegant Dapper Shirt", price: 29.99, quantity: 1 },
  { id: 3, name: "Casual Classic Jacket", price: 59.99, quantity: 1 },
  { id: 4, name: "Stylish Urban Trousers", price: 49.99, quantity: 3 },
  { id: 5, name: "Vintage Chic Tee", price: 19.99, quantity: 1 },
];

const CartList: React.FC = () => {
  return (
    <div className="p-4 md:p-8 md:max-w-2xl md:mx-auto">
      <h2 className="text-2xl mb-4">Shopping Cart</h2>

      <ul className="divide-y divide-gray-200 ">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm md:text-base">{item.name}</span>
              <span className="text-xs text-gray-500 md:text-sm">x{item.quantity}</span>
            </div>
            <span className="text-sm md:text-base">${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-8">
        <span className="text-xl font-bold">Total</span>
        <span className="text-xl font-bold">${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartList;
