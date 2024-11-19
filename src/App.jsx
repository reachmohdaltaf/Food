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
        <img className="h-10 animate-pulse" src={logo} alt="Loading..." />  
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
    success: {
      style: {
        background: "#000000", // Sleek black background
        color: "#ffffff", // Crisp white text
        fontSize: "16px", // Readable font size
        fontWeight: "500", // Medium-weight for text
        borderRadius: "12px", // Smooth rounded corners
        padding: "16px 24px", // Spacious padding
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)", // Elegant shadow for depth
        border: "1px solid #ffffff", // Thin white border for sharp contrast
      },
      iconTheme: {
        primary: "#ffffff", // White icon color
        secondary: "#000000", // Black background for the icon
      },
      duration: 1000, // Custom duration (in milliseconds), e.g., 5000ms = 5 seconds
    },
  }}
/>

    </>
  );
};

export default App;
