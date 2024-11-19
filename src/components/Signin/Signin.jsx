import Header from "../Navbar/Header"

const Signin = () => {
  return (
    <div>
        <div className="header">
        <Header/>
        </div>
        <div className="signin-conatiner h-[90vh] bg-white flex  justify-center">
            <div className="sign-in h-[100%]     bg-zinc-100 w-[90%] flex gap-10 flex-col items-center ">
               <div className="border shadow-lg bg-white h-[80%] w-[35%] p-4 flex items-center flex-col mt-10">
               <div className="title text-xl font-bold">Sign In</div>
                <form action="" className="flex flex-col p-5  w-full gap-5">
                    <div className="phone-number w-full">
                    <h1 className="text-sm">Phone Number:</h1>
                    <input className="p-2 w-full border border-black" type="text" name="" id="" />
                    </div>
                    <div className="Password w-full">
                    <h1 className="text-sm">Password:</h1>
                    <input className="p-2 w-full border border-black" type="password" name="" id="" />
                    </div>
                    <div className="button">
                        <button className="bg-zinc-800 w-full p-2 mt-10 flex items-center text-white justify-center hover:bg-black transition-all font-bold text-lg ">Sing In</button>
                    </div>

                </form>
            </div>
               </div>
        </div>
        
    </div>
  )
}

export default Signin