// import { useState } from "react"


// function Mainb (){


//   const [current, setCurrent] = useState(0);

//     const items=[

// {
//     img:"/src/assets/images/Location-Icon.png",
//     title:"Pay Us a Visit",
//     text:" Union St, Seattle, WA 98101, United States"
// },

// {
// img:"/src/assets/images/phone-call.png",
// title:"Give Us a Call",
// text:"(110) 1111-1010"

// },
// {
// img:"/src/assets/images/mail.png",
// title:"Send Us a Message",
// text:" Contact@HydraVTech.com"
// }

//     ]
// const prev = () => {
//   setCurrent((current - 1 + items.length) % items.length);
// };
// const next = () => {
//   setCurrent((current + 1) % items.length);
// };


//     return(
//         <div className=" w-12/12 h-30    bg-radial-[at_50%_75%] from-[#3A3456] via-[#211E2E] to-[#3A3456] to-90%  rounded-full items-center  justify-between px-5  z-10 flex ">

// {/* next mobail */}
// <div className="flex md:hidden">
// <button onClick={prev}>‹</button>
// <img src={items[current].img} alt="" />
// <p>{items[current].title}</p>
// <p>{items[current].text}</p>
// <button onClick={next}>›</button>
// </div>
// {/* decktop */}
// <div className="flex  items-center w-1/3  ">
//     <img src="/src/assets/images/Location-Icon.png" alt="loc" className="w-15 h-15 " />
//     <div>
//  <p className="text-xs text-white" >Pay Us a Visit</p>
//     <p className="text-xs text-white" >Union St, Seattle, WA 98101, United States</p>
//     </div>
// </div>

// <div className="flex  items-center  w-1/3 ml-20  ">
//     <img src="/src/assets/images/phone-call.png" alt="loc" className=" w-15 h-15" />
//     <div>
//  <p className="text-sm text-white" >Give Us a Call</p>
//     <p className="text-sm text-white" >(110) 1111-1010</p>
//     </div>
// </div>

// <div className="flex  items-center   w-1/3   " >
//     <img src="/src/assets/images/mail.png" alt="loc"  className=" w-15 h-15"/>
//     <div>
//  <p className="text-sm text-white" >Send Us a Message</p>
//     <p className="text-sm text-white" >  Contact@HydraVTech.com</p>
//     </div>
// </div>
//         </div>
//     )
// }
// export default Mainb


import { useState } from "react";

function Mainb() {
  const [current, setCurrent] = useState(0);

  const items = [
    {
      img: "/src/assets/images/Location-Icon.png",
      title: "Pay Us a Visit",
      text: "Union St, Seattle, WA 98101, United States",
    },
    {
      img: "/src/assets/images/phone-call.png",
      title: "Give Us a Call",
      text: "(110) 1111-1010",
    },
    {
      img: "/src/assets/images/mail.png",
      title: "Send Us a Message",
      text: "Contact@HydraVTech.com",
    },
  ];

  const prev = () => {
    setCurrent((current - 1 + items.length) % items.length);
  };

  const next = () => {
    setCurrent((current + 1) % items.length);
  };

  return (
    <div
      className="
        w-full
        md:w-12/12
        min-h-30
        bg-radial-[at_50%_75%]
        from-[#3A3456]
        via-[#211E2E]
        to-[#3A3456]
        to-90%
        rounded-full
        flex
        items-center
        justify-between
        px-3
        md:px-5
        py-4
        z-10
      "
    >

      {/* ================= MOBILE ================= */}
      <div className="flex md:hidden w-full items-center justify-between gap-2">

        {/* Previous */}
        <button
          onClick={prev}
          className="text-white text-3xl px-2"
        >
          ‹
        </button>

        {/* Current item */}
        <div className="flex items-center gap-3 flex-1 min-w-0">

          <img
            src={items[current].img}
            alt={items[current].title}
            className="w-12 h-12 object-contain shrink-0"
          />

          <div className="min-w-0">
            <p className="text-xs text-white font-medium">
              {items[current].title}
            </p>

            <p className="text-[10px] text-white  wrap-break-words">
              {items[current].text}
            </p>
          </div>

        </div>

        {/* Next */}
        <button
          onClick={next}
          className="text-white text-3xl px-2"
        >
          ›
        </button>

      </div>


      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex w-full items-center justify-between">

        {/* Location */}
        <div className="flex items-center w-1/3">
          <img
            src="/src/assets/images/Location-Icon.png"
            alt="Location"
            className="w-15 h-15 object-contain"
          />

          <div>
            <p className="text-xs text-white">
              Pay Us a Visit
            </p>

            <p className="text-xs text-white">
              Union St, Seattle, WA 98101, United States
            </p>
          </div>
        </div>


        {/* Phone */}
        <div className="flex items-center w-1/3">
          <img
            src="/src/assets/images/phone-call.png"
            alt="Phone"
            className="w-15 h-15 object-contain"
          />

          <div>
            <p className="text-sm text-white">
              Give Us a Call
            </p>

            <p className="text-sm text-white">
              (110) 1111-1010
            </p>
          </div>
        </div>


        {/* Email */}
        <div className="flex items-center w-1/3">
          <img
            src="/src/assets/images/mail.png"
            alt="Email"
            className="w-15 h-15 object-contain"
          />

          <div>
            <p className="text-sm text-white">
              Send Us a Message
            </p>

            <p className="text-sm text-white">
              Contact@HydraVTech.com
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Mainb;



