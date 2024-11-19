/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Header from "../Navbar/Header";
import RecipesCard from "./RecipesCard";

const Recipes = ({sampleData, addToCart}) => {
 
  return (
    <div>
      <Header />
      <div className="recipes w-full bg-white h-full flex flex-col   items-center justify-center ">
        <div className="h-20 items-center flex justify-center bg-zinc-100 w-[90%] text-center">
          <p className="text-3xl  font-bold">What's On you mind?</p>
        </div>
        <div className="bg-zinc-100 w-[90%] p-10 items-center justify-center flex flex-wrap gap-10">
          {sampleData.map((recipe) => (
            <RecipesCard
              addToCart={()=>addToCart(recipe)}
              key={recipe.id}
              recipe={recipe}
            />
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
