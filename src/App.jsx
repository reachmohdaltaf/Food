import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Recipes from "./components/Recipes/Recipes";
import Home from "./components/Home/Home";
import toast, { Toaster } from "react-hot-toast";

const App = () => {

  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || [];
  });

  const [allData, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("//dummyjson.com/recipes");
    const json = await data.json();
    setData(json?.recipes);
  };

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  if (allData.length === 0) {
    return (
      <h1 className="flex items-center animate-ping justify-center h-screen">
        <img className="h-10" src={logo} alt="Loading..." />
      </h1>
    );
  }

  const addToCart = (recipe) => {
    if (!recipe.quantity) {
      recipe.quantity = 0;
    }

    const existingRecipe = cart.find(reci => reci.id === recipe.id);

    if (existingRecipe) {
      existingRecipe.quantity += 1;
      toast.success("+1");
    } else {
      recipe.quantity += 1;
      cart.push(recipe);
      toast.success("Successfully added to Cart");
    }

    setCart([...cart]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home sampleData={allData} setData={setData} />,
    },
    {
      path: "/Cart",
      element: <Cart cart={cart} setCart={setCart} />,
    },
    {
      path: "/Recipes",
      element: <Recipes addToCart={addToCart} sampleData={allData} />,
    },
  ]);
  

  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
            fontSize: '16px',
            borderRadius: '8px',
            padding: '10px 50px',
          },
          success: {
            style: {
              background: '#000',
            },
          },
          error: {
            style: {
              background: '#f44336',
            },
          },
        }}
      />
    </>
  );
};

export default App;
