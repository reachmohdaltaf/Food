/* eslint-disable react/prop-types */
import Header from "../Navbar/Header"
import Restaurant from "../restaurant/Restaurant"

const Home = ({sampleData, setData}) => {
  return (
    <div className="relative">
      <Header />
      <div className=" h-full  flex items-center justify-center">
        <Restaurant setData={setData} sampleData={sampleData} />
      </div>
    </div>
  )
}

export default Home