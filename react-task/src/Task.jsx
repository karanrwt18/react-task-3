
import React from 'react';

const Task = () => {
  const items = [
    { id: 1, name: "Shirt", price: 500, category: "Clothing" },
    { id: 2, name: "Shoes", price: 800, category: "Footwear" },
    { id: 3, name: "T-shirt", price: 500, category: "Clothing" },
    { id: 4, name: "Trouser", price: 600, category: "Clothing" },
    { id: 5, name: "Jacket", price: 800, category: "Clothing" },
    { id: 6, name: "Sports T-shirt", price: 400, category: "Clothing" },
    { id: 7, name: "Sports Shoes", price: 400, category: "Footwear" },
    { id: 8, name: "Accessories", price: 500, category: "Accessories" },
    { id: 9, name: "Headphones", price: 1200, category: "Electronics" },
    { id: 10, name: "Smart Watch", price: 2000, category: "Electronics" }
  ];

  return (
    <div>
      <h1>Product List</h1>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Category: {item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
