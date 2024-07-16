"use client";

import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [productCounts, setProductCounts] = useState({});
  const [favoriteStatus, setFavoriteStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const organizationId = process.env.NEXT_PUBLIC_TIMBU_ORG_ID;
      const appId = process.env.NEXT_PUBLIC_TIMBU_APP_ID;
      const apiKey = process.env.NEXT_PUBLIC_TIMBU_API_KEY;

      try {
        const response = await fetch(
          `/api/?organization_id=${organizationId}&reverse_sort=false&page=1&size=10&Appid=${appId}&Apikey=${apiKey}`
        );
        const data = await response.json();
        const fetchedProducts = data.items || [];

        setProducts(fetchedProducts);

        const counts = fetchedProducts.reduce((acc, product) => {
          acc[product.id] = 1;
          return acc;
        }, {});
        setProductCounts(counts);

        const favorites = fetchedProducts.reduce((acc, product) => {
          acc[product.id] = false;
          return acc;
        }, {});
        setFavoriteStatus(favorites);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const increaseCount = (id) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const decreaseCount = (id) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] > 1 ? prevCounts[id] - 1 : 1,
    }));
  };

  const toggleFavorite = (id) => {
    setFavoriteStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  const handleAddToCart = (product, count) => {
    dispatch({ type: 'ADD_TO_CART', product, count });
  };

  return (
    <div className="container mx-auto px-2 w-screen">
      <h3 className="h3 text-[29px] mb-5">Best Sellers</h3>
      <div className="overflow-x-auto hide-scrollbar w-full">
        <div className="flex gap-3 md:gap-5 w-full">
          {loading ? (
            <p>Loading...</p>
          ) : Array.isArray(products) && products.length > 0 ? (
            products.map((product) => {
              const { id, name, current_price, photos } = product;
              const price = current_price[0]?.NGN[0] ?? "N/A";
              const imageUrl = photos.length > 0 ? `/${photos[0].url}` : "/images/soap1.jpeg";

              return (
                <div
                  key={id}
                  className="group relative w-[48%] md:w-[210px] duration-300 flex-shrink-0 lg:flex-shrink p-3 bg-white border-2 border-secondary-extraLight hover:border-secondary-light"
                >
                  <div
                    className="absolute top-5 right-5"
                    onClick={() => toggleFavorite(id)}
                  >
                    {favoriteStatus[id] ? (
                      <button>
                        <FaHeart className="text-red-500" />
                      </button>
                    ) : (
                      <button>
                        <FaRegHeart />
                      </button>
                    )}
                  </div>
                  <div className="w-full flex justify-center">
                    <Image width={200} height={200} src={imageUrl} alt={name} className="text-center img" />
                  </div>
                  <div>
                    <p className="my-3 h7">{name}</p>
                    <h5 className="group-hover:hidden h7 font-semibold">
                      ₦{price}
                    </h5>

                    <div className="hidden group-hover:flex justify-between">
                      <div className="flex gap-2 px-2 py-1 w-fit h9 border border-secondary-dark text-secondary-dark">
                        <button onClick={() => decreaseCount(id)}>-</button>
                        <p>{productCounts[id]}</p>
                        <button onClick={() => increaseCount(id)}>+</button>
                      </div>
                      <div className="flex gap-2 px-2 py-1 w-fit h9 border border-secondary-dark text-secondary-dark">
                        <button onClick={() => handleAddToCart(product, productCounts[id])} className="uppercase">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>

      <button className="view-all-btn hidden lg:flex mx-auto">View All</button>
    </div>
  );
};

export default BestSellers;
