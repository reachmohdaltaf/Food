import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart} from '../Features/cartSlice'
import toast from 'react-hot-toast';
import Header from '../Navbar/Header';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAdd = (item) => {
    dispatch(addItem(item));
    toast.success(`Added +1 to ${item.name}`);
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
    toast.success(`Removed -1 from ${item.name}`);
  };

  const totalSum = cartItems.reduce((total, item) => total + item.reviewCount * item.quantity, 0);

  return (
    <div>
      <Header />
      <div className="cart h-full flex justify-center flex-col items-center p-5 sm:p-10">
        <h3 className="text-3xl font-bold mb-5">My Cart</h3>

        <div className="bg-zinc-100 w-full sm:w-[90%] p-5 flex flex-wrap gap-10 justify-center">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="card bg-white w-full sm:w-[45%] md:w-[30%] lg:w-[22%] border shadow-lg rounded-lg mb-5"
            >
              <div className="w-full h-48 sm:h-46 md:h-44">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="p-3">
                <h3 className="text-[16px] h-10 font-bold">{item.name}</h3>
                <p>{item.reviewCount}$</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                <div className="button mt-5 flex items-center justify-between">
                  <button
                    onClick={() => handleRemove(item)}
                    className="bg-zinc-700 transition-all active:scale-90 hover:shadow-sm shadow-lg h-10 rounded-lg text-white w-10 hover:bg-black"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleAdd(item)}
                    className="bg-zinc-700 transition-all active:scale-90 shadow-lg h-10 rounded-lg text-white w-10 hover:bg-black"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-5 bg-white w-full sm:w-[90%] flex justify-between items-center rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Total:</h3>
          <p className="text-xl">${totalSum}</p>
        </div>

        <button
          onClick={() => {
            dispatch(clearCart());
            toast.success('Cart cleared!');
          }}
          className="mt-5 bg-red-500 text-white px-5 py-2 rounded-lg"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;