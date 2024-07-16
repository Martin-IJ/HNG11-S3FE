"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getProductById } from "../../lib/api";
import { useCart } from "../../context/CartContext";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const productData = await getProductById(id);
        setProduct(productData);
        setLoading(false);
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>Price: ₦{product.current_price[0]?.NGN[0]}</p>
      <img src={product.photos.length > 0 ? `/${product.photos[0].url}` : "/images/soap1.jpeg"} alt={product.name} />
      <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
