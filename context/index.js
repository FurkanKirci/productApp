import { useEffect, useState } from "react";

const { createContext } = require("react");

export const Context = createContext(null);
const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const addToFavorites = (productId, reason) => {
    let copyOfFavorites = [...favoriteProducts];
    const index = copyOfFavorites.findIndex((item) => item.id === productId);
    if (index === -1) {
      const selectedProduct = products.find((item) => item.id === productId);
      copyOfFavorites.push({
        id: productId,
        title: selectedProduct.title,
        reason: reason,
      });
    } else {
      copyOfFavorites[index].reason = reason;
    }
    setFavoriteProducts(copyOfFavorites);
  };
  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      const apiRes = await fetch("https://dummyjson.com/products");
      const finalResult = await apiRes.json();
      if (finalResult) {
        setProducts(finalResult.products);
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  const handlePressRemoveItem = (itemId) => {
    let favCopy = [...favoriteProducts]
    const newFav = favCopy.filter((item)=> item.id !== itemId);
    setFavoriteProducts(newFav);
  };
  return (
    <Context.Provider
      value={{ products, loading, addToFavorites, favoriteProducts, handlePressRemoveItem }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
