// import { useState } from "react"

// function Header(){
// const [isopen, setisopen]=useState(false)

//     return(
// <div className="flex justify-between  items-center pt-5  ">
//     <div className=" flex  items-center">
//     <img src="/src/assets/images/Frame (1).png" alt="fram" className="w-25 h-25 " />
//     <img src="/src/assets/images/Frame.png" alt="icon"  className="w-25 h-10   "/>
// </div>
// {/* deskrtop meno */}
// <ul className=" hidden sm:flex gap-10">
// <a href="#" className="text-sm text-white  "  > ABOUT</a>
// <a href="#" className="text-sm text-white  "  > SERVICES</a>
// <a href="#" className="text-sm text-white  "  > TECHNOLOGIES</a>
// <a href="#" className="text-sm text-white  "  > HOW TO</a>
// </ul> 
// {/* desktop buttom */}
// <div className="hidden sm:flex gao-5 z-10 ">
//     <button  className="rounded-full   border border-white  text-white text-sm  px-3 py-3  mr-10  " >CONTACT US</button>
//     <button  className="rounded-full  border border-white  text-white    text-sm  px-3 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8] " > JOIN HYDRA</button>
// </div>

// {/* hamberger */}
// <div>
// <button onClick={() =>  setisopen(!isopen)}
//     className="   flex-col gap-1.5 hidden sm:flex">
//         <span className=" w-7 h-1 bg-white rounded-full"></span>
//     <span className=" w-7 h-1 bg-white rounded-full"></span>
//     <span className=" w-7 h-1 bg-white rounded-full"></span>
// </button>
// </div>


// {/* meno mobali */}
// { isopen &&(

//     <div className="flex gap-10 items-end  justify-end ">
//  <ul className=" flex  flex-col gap-2 items-center justify-center   ">
// <a href="#" className="text-sm text-white  "  > ABOUT</a>
// <a href="#" className="text-sm text-white  "  > SERVICES</a>
// <a href="#" className="text-sm text-white  "  > TECHNOLOGIES</a>
// <a href="#" className="text-sm text-white  "  > HOW TO</a>
// </ul> 
//     </div>
   
// ) }

// </div>
//     )
// }
// export default Header


import { useState } from "react"

function Header() {
  const [isopen, setisopen] = useState(false)

  return (
    <header className="flex justify-between items-center pt-5 relative">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/src/assets/images/Frame (1).png"
          alt="fram"
          className="w-25 h-25"
        />

        <img
          src="/src/assets/images/Frame.png"
          alt="icon"
          className="w-25 h-10"
        />
      </div>

      {/* Desktop menu */}
      <ul className="hidden lg:flex gap-10">
        <li>
          <a href="#" className="text-sm text-white">
            ABOUT
          </a>
        </li>

        <li>
          <a href="#" className="text-sm text-white">
            SERVICES
          </a>
        </li>

        <li>
          <a href="#" className="text-sm text-white">
            TECHNOLOGIES
          </a>
        </li>

        <li>
          <a href="#" className="text-sm text-white">
            HOW TO
          </a>
        </li>
      </ul>

      {/* Desktop buttons */}
      <div className="hidden lg:flex gap-5 z-10">
        <button className="rounded-full  text-white text-sm px-3 py-3
         border-gray-400 hover:border-purple-500 focus:border-purple-500 outline-none">
          CONTACT US
        </button>

        <button className="rounded-ful text-white text-sm px-3 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8]
         border-gray-400 hover:border-purple-500 focus:border-purple-500 outline-none">
          JOIN HYDRA
        </button>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setisopen(!isopen)}
        className="flex lg:hidden flex-col gap-1.5"
      >
        <span className="w-7 h-1 bg-white rounded-full"></span>
        <span className="w-7 h-1 bg-white rounded-full"></span>
        <span className="w-7 h-1 bg-white rounded-full"></span>
      </button>

      {/* Mobile menu */}
      {isopen && (
        <div className="absolute top-full right-0 mt-5 lg:hidden">
          <ul className="flex flex-col gap-4 items-end">
            <li>
              <a href="#" className="text-sm text-white">
                ABOUT
              </a>
            </li>

            <li>
              <a href="#" className="text-sm text-white">
                SERVICES
              </a>
            </li>

            <li>
              <a href="#" className="text-sm text-white">
                TECHNOLOGIES
              </a>
            </li>

            <li>
              <a href="#" className="text-sm text-white">
                HOW TO
              </a>
            </li>
          </ul>
        </div>
      )}

    </header>
  )
}

export default Header