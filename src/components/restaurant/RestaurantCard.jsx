/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RestaurantCard = ({ recipe }) => {
  const { name, image, rating, prepTimeMinutes, cuisine } = recipe;
  return (
    <div className="card bg-white hover:scale-[0.986] transition-all cursor-pointer relative h-72 border shadow-lg rounded-lg w-[90%] sm:w-[45%] md:w-[30%] lg:w-[23%] mx-auto">
      {/* Image Section */}
      <Link to="/Recipes">
        <div className="w-full h-36">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={image}
            alt="Meghana Foods"
          />
        </div>

        {/* Discount Section */}
        <div className="p-4 absolute top-24">
          <h3 className="Discount text-lg text-white font-extrabold">
            ₹ 75 OFF ABOVE ₹100
          </h3>
        </div>
        
        {/* Name Section */}
        <div className="p-1">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="flex gap-1">
            <h3 className="star">★ </h3>
            <p className="rating">{rating}</p>
            <h3 className="time font-bold">in {prepTimeMinutes} mins</h3>
          </div>
          <h5 className="description text-zinc-600">{cuisine}</h5>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
