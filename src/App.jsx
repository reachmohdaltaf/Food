import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Recipes from "./components/Recipes/Recipes";
import Home from "./components/Home/Home";
import toast, { Toaster } from "react-hot-toast";


const App = () => {

  const [cart, setCart] = useState(() => {
    // Load cart from localStorage or initialize as empty
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || [];
  });

  const [allData, setData] = useState([]);

  useEffect(() => {
    console.log("hello");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("//dummyjson.com/recipes");
    const json = await data.json();
    console.log(json);
    setData(json?.recipes);
  };

  // Update localStorage whenever the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  if (allData.length === 0) {
    return (
      <h1 className="flex items-center animate-ping justify-center h-[100vh]">
        <img className="h-10" src={logo} alt="" />
      </h1>
    );
  }

  const addToCart = (recipe) => {
    // Ensure the recipe has a 'quantity' property initialized
    if (!recipe.quantity) {
      recipe.quantity = 0;
      

    }

    const existingRecipe = cart.find(reci => reci.id === recipe.id);

    if (existingRecipe) { // Recipe already in cart
      existingRecipe.quantity += 1; // Increment its quantity
      toast.success("+1")
    } else { // Recipe not found in cart
      recipe.quantity += 1; // Initialize its quantity
      cart.push(recipe); // Add it to the cart
      toast.success("Successfully added to Cart")
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
  <RouterProvider router={router} />;
  <Toaster
  position="top-right"
  reverseOrder={false}
  toastOptions={{
    style: {
      background: '#333', // Dark background
      color: '#fff', // White text
      fontSize: '16px', // Font size
      borderRadius: '8px', // Rounded corners
      padding: '10px 50px', // Padding for the toast
    },
    success: {
      style: {
        background: '#000', // Green background for success
      },
    },
    error: {
      style: {
        background: '#f44336', // Red background for errors
      },
    },
  }}
/>

  </>
  );
};

export default App;
