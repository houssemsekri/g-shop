import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Preloader from "../components/Preloader";
export const Product = createContext();
function ProductProvider({ children }) {
  const [state, setstate] = useState({
    loading: true,
    game: [],
    trailerModal: false,
  });
  let init;
  localStorage.getItem("cartShop")
    ? (init = JSON.parse(localStorage.getItem("cartShop")))
    : (init = "");
  const [sideNav, setsideNav] = useState(false);
  const [cart, setcart] = useState(init);

  const [currentPage, setcurrentPage] = useState(1);

  const [productsPerPage, setproductsPerPage] = useState(8);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await axios.get("/api/game", {
          headers: {
            accepts: "application/json",
          },
        });

        setTimeout(() => {
          setstate({ ...state, loading: false, game: data.data });
        }, 500);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchGames();
  }, []);
  const paginate = (number) => {
    setcurrentPage(number);
  };
  const handleDeleteCart = (el, e) => {
    e.preventDefault();
    const newproduct = cart.product.filter((element) => {
      return element.id != el.id;
    });
    const newtotal = parseFloat(cart.total) - parseFloat(el.price) * el.qty;
    const local = {
      product: newproduct,
      total: newtotal,
    };
    setcart(local);
    localStorage.setItem("cartShop", JSON.stringify(local));
  };
  return (
    <Product.Provider
      value={{
        state,
        setstate,
        cart,
        setcart,
        currentPage,
        setcurrentPage,
        productsPerPage,
        setproductsPerPage,
        indexOfLastProduct,
        indexOfFirstProduct,
        paginate,
        handleDeleteCart,
        sideNav,
        setsideNav,
      }}
    >
      {" "}
      {state.loading ? <Preloader /> : children}{" "}
    </Product.Provider>
  );
}

export default ProductProvider;
