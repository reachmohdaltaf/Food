/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "./components/Features/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import Cart from "./components/Cart/Cart";
import Recipes from "./components/Recipes/Recipes";
import Home from "./components/Home/Home";
import Offer from "./components/Offers/Offer";
import Signin from "./components/Signin/Signin";
import logo from "./assets/logo.png";

const App = () => {
  const dispatch = useDispatch();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");  ///i am fetching the data here
        const json = await response.json();
        setAllData(json?.recipes || []);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };
    fetchData();
  }, []);

 //ye hai loader
  if (allData.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img className="h-10 animate-spin" src={logo} alt="Loading..." />  
      </div>
    );
  }

  //addtocart wala function ye hai 
  const addToCart = (recipe) => {
    dispatch(addItem(recipe));
    toast.success(`Successfully added ${recipe.name} to Cart`);
  };

//ye page link krdiye 
  const router = createBrowserRouter([
    { path: "/", element: <Home sampleData={allData} setData={setAllData} /> },
    { path: "/Cart", element: <Cart /> },
    { path: "/Recipes", element: <Recipes addToCart={addToCart} sampleData={allData} /> },
    { path: "/Offer", element: <Offer /> },
    { path: "/SignIn", element: <Signin /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
            fontSize: "16px",
            borderRadius: "8px",
            padding: "10px 50px",
          },
          success: {
            style: {
              background: "#000",
            },
          },
          error: {
            style: {
              background: "#f44336",
            },
          },
        }}
      />
    </>
  );
};

export default App;
