/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom"

const RecipesCard = ({ recipe, addToCart }) => {
  const { name, image, reviewCount } = recipe;

  return (
    <div className="card bg-white transition-all cursor-pointer relative h-auto border shadow-lg rounded-lg w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] mx-auto">
      {/* Image Section */}
      <div className="w-full h-56 sm:h-64 md:h-40">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={image}
          alt="Meghana Foods"
        />
      </div>

      {/* Add to Cart section */}
      <div className="p-3">
        <h3 className="text-[16px] h-10 font-bold">{name}</h3>
        <p className="text-red-700 text-xl">
          Price <span>{reviewCount}$</span>
          <span className="text-black line-through text-[13px]"> $100</span>
        </p>
        <button
          onClick={() => addToCart(recipe)}
          className="bg-zinc-800 w-full active:scale-95 p-2 text-white border hover:text-white hover:border hover:border-black hover:bg-black font-bold rounded-lg"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default RecipesCard;
