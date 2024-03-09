// import { useState } from 'react'
import './App.css';

import React, { useEffect, useState } from 'react';

const EscuelaJsApiExample = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/?offset=${currentPage}&limit=10`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
    };

    fetchCategories();
  }, [currentPage]);

  return (
    <div>
      <h1>Mahsulotlar ro'yxati</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
        Keyingi pageni yuklash
      </button>
    </div>
  );
};

export default EscuelaJsApiExample;
