/* eslint-disable react/prop-types */
import RestaurantCard from "./RestaurantCard"


const Restaurant = ({sampleData, setData }) => {

  return (
    <div className='restaurants  flex flex-col gap-10  bg-zinc-100 w-[1100px] p-10   '>
     <div>
     <div className=" w-full flex justify-between">
        <p className='font-bold text-2xl   ' >Top Restaurant in Delhi?</p> 
        <button onClick={()=>{ 
           const filteredData = sampleData.filter((recipe) => recipe.rating > 4.8);
           setData(filteredData);  // Directly set the filtered list of recipes
        }} 
        className="button bg-zinc-800   rounded-lg hover:bg-black   text-white pr-5 pl-5 hover:shadow-lg transition-all ">Top Rated Restaurant ★</button>
      </div>
       <div className="card-container flex flex-wrap items-center  gap-6 pt-5 " >
        {sampleData.map((recipe)=>(
                 <RestaurantCard key={recipe.id} recipe={recipe}/> 
        ))} 
      </div>
     </div>
     <div>
     </div>
       
    </div>
  )
}

export default Restaurant


