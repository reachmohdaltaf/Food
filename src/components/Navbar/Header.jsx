import logo from '../../assets/logo.png';
import home from '../../assets/home.png';
import offers from '../../assets/offers.svg';
import user from '../../assets/user.png';
import cart from '../../assets/cart.png';
import searchicon from '../../assets/searchicon.png';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'


const Header = () => {

  //subscribing to the store

  const cart2 = useSelector((store)=>store.cart.items)
  return (
    <div className='p-4 h-16 sticky top-0 z-10 bg-white border shadow-sm flex items-center justify-between'>
     <Link to='/'>
     <div className='logo h-10'>
        <img className='h-full' src={logo} alt="Logo" />
      </div>
     </Link> 

      <form  className='search-bar w-[50%] h-10 rounded-lg flex items-center  border'>
        <input
          type="text"
          placeholder='Search for restaurant and food'
          className='bg-white  outline-none  rounded-t-lg rounded-r-none p-4 text-black w-full h-full'/>
          <button className='h-full bg-zinc-800  text-white hover:bg-black rounded-r-lg  p-4 flex items-center'>
          <img src={searchicon} className='h-4 ' alt="" />
        </button>
      </form>

      <div className='nav-items flex items-center text-[#3D4152] cursor-pointer'>
        <ul className='flex gap-10 items-center'>
        <Link to="/"> <li className='flex gap-1 h-5 items-center'>
            <img src={home} className='h-full' alt="Home" />Home
          </li></Link>
          <Link to="/Offer"> <li className='flex gap-1 h-5 items-center'>
            <img src={offers} alt="Offers" className='h-full' />Offers
          </li></Link>
          <Link to="/SignIn"> <li className='flex gap-1 h-5 items-center'>
            <img src={user} alt="User" className='h-full' />Sign in
          </li></Link>
          <Link to="/Cart"><li className='flex gap-1 h-5 items-center'>
            <img src={cart} alt="Cart" className='h-full' />Cart {cart2.length} {console.log(cart2)}
          </li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
