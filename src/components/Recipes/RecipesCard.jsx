/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom"

const RecipesCard = ({ recipe, addToCart }) => {
  const { name, image, reviewCount } = recipe;

  return (
    <div
      className="card bg-white  transition-all cursor-pointer  relative h-92  
     border shadow-lg  w-[22%] rounded-lg "
    >
      {/* Image Section */}

      <div className=" w-full h-76">
        <img
          className="h-full  w-full object-cover  rounded-lg"
          src={image}
          alt="Meghana Foods"
        />
      </div>

      {/* Add to Cart section  */}
      <div className="p-3">
        <h3 className="text-[16px]  font-bold">{name}</h3>
        <p>
          Price <span>{reviewCount}$</span>
        </p>
        <button
          onClick={() => addToCart(recipe)}
          className="bg-zinc-800 w-full active:scale-95 p-2 text-white border  hover:text-white hover:border hover:border-black hover:bg-black font-bold rounded-lg"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default RecipesCard;
