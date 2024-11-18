/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import Header from "../Navbar/Header";
const Cart = ({ cart, setCart }) => {
  const handleRemove = (item) => {
    const updatedCart = cart
      .map((cartItem) => {
        if (cartItem === item) {
          if (cartItem.quantity === 1) {
            return null; // Mark for removal
          }
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      })
      .filter((item) => item !== null); // Directly filter out nulls

    setCart(updatedCart);
    toast.success("Succesfully Removed -1");
  };

  const handleAdd = (item) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem === item) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
    toast.success("Added +1");
  };

  const totalSum = cart.reduce((total, item) => {
    return total + item.reviewCount * item.quantity; // Assuming 'reviewCount' is the price
  }, 0);

  return (
    <div>
      <Header />
      <div className="cart   h-full flex justify-center flex-col items-center  p-10">
        <h3 className="text-3xl font-bold mb-5">My Cart</h3>

        <div className="bg-zinc-100 w-[90%] p-5 flex flex-wrap gap-10">
          {cart.map((item, index) => (
            <div
              key={index}
              className="card bg-white w-[22%] border shadow-lg rounded-lg"
            >
              <div className="w-full h-76">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="p-3">
                <h3 className="text-[16px] font-bold">{item.name}</h3>
                <p>{item.reviewCount}$</p>
                {/* Display quantity */}
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              <div className="button mt-5 flex items-center justify-between">
              <button
                  onClick={() => handleRemove(item)}
                  className="bg-zinc-700 transition-all active:scale-90 hover:shadow-sm shadow-lg  h-10 rounded-lg text-white w-10 hover:bg-black"
                >
                  {" "}
                  -{" "}
                </button>
                <button
                  onClick={() => handleAdd(item)}
                  className="bg-zinc-700 transition-all active:scale-90  shadow-lg  h-10 rounded-lg text-white w-10 hover:bg-black"
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Display Total Amount */}
        <div className="mt-5 p-5 bg-white w-[90%] flex justify-between items-center rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Total:</h3>
          <p className="text-xl">${totalSum}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
