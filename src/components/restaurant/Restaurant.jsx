  /* eslint-disable no-const-assign */
  /* eslint-disable react/prop-types */
  import RestaurantCard from "./RestaurantCard";
  import { useState } from "react";

  const Restaurant = ({ sampleData }) => {

  const [flag, setFlag] = useState(false)
  const  [filteredData, setFilteredData] = useState(sampleData)

  const handleFilter =() =>{
      if(flag){
        setFilteredData(sampleData)
      }else{
        setFilteredData(sampleData.filter((recipe) => recipe.rating > 4.8));
      }
      setFlag(!flag)
  }
  

    
    
    return (
      <div className="restaurants  flex flex-col gap-10  bg-zinc-100 w-[1100px] p-10   ">
        <div>
          <div className=" w-full flex justify-between relative">
            <p className="font-bold text-2xl   ">Top Restaurant in Delhi?</p>
            <button
              onClick={handleFilter}
              className="button bg-zinc-800   rounded-lg hover:bg-black  
            text-white pr-5 pl-5 hover:shadow-lg transition-all "
            >
              {!flag? "Top Rated Restaurant ★" : "All Stores In Your Area"}

            </button>
              </div>
          <div className="card-container flex flex-wrap items-center  gap-6 pt-5 ">
            {filteredData.map((recipe) => (
              <RestaurantCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    );
  };

  export default Restaurant;
