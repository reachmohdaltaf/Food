import Header from "./components/Navbar/Header"
import Restaurant from "./components/restaurant/Restaurant"
import sampleData from "./components/restaurant/constant";
import { useState } from "react";

const App = () => {

  const  [allData, setData] = useState(sampleData.recipes)  
  


 
  return (
    <div className="relative">
      <Header/>
      <div className=" h-full  flex items-center justify-center">
      <Restaurant  setData={setData} sampleData={allData} />
      
      </div>
      </div>
  )
}

export default App
 

// Header --logo, navitems
//body -- search, restaourant container, card
//footer -- copyright, links, Addres, Contact


