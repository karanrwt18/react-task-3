
// import React from 'react';

// const Task = () => {
//   const items = [
//     { id: 1, name: "Shirt", price: 500 },
//     { id: 2, name: "Shoes", price: 800 },
//     { id: 3, name: "T-shirt", price: 500 },
//     { id: 4, name: "Trouser", price: 600 },
//     { id: 5, name: "Jacket", price: 800 },
//     { id: 6, name: "Sports T-shirt", price: 400 },
//     { id: 7, name: "Sports shoes ", price: 400 },
//     { id: 9, name: "Assaseries", price:500  },
    
//   ];

//   const filteredItems = items.filter(item => item.price < 650);

//   return (

//     <div>
//       <h1>Product List</h1>

//       <ul>
//         {filteredItems.map(item => (
//           <li key={item.id}>
//             {item.name} - {item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Task;








// import React, { useState, useEffect } from 'react';

// const Task = () => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => setProduct(data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   const filterdItems = product.filter(
//     (item) => item.price 
//   );

//   return (
//     <div>
//       <h1>Product List</h1>

//       <ul>
//         {filterdItems.map((item) => (
//           <li key={item.id}>
//             {item.title} - ${item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Task;
