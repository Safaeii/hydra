// import { useState } from "react"




// function Card() {
//   const [nextcard, setNextcard] = useState(0);


// const items =[
//     {
//     img:"/src/assets/images/Mask group3.png",
//     title:"SIMULATION",

//     text:"  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae     ",
// button:"TRY IT NOW  "
//     },
//     { 
//         img:"/src/assets/images/Mask group 5).png",
//         title:"EDUCATION",
  
//     text:"  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae     ",
// button:"TRY IT NOW  "

//     },
//     {
//  img:"/src/assets/images/Mask group4 (1).png",
//         title:"SELF-CARE ",
   
//     text:"  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae     ",
// button:"TRY IT NOW  "

//     },
//     {
// img:"/src/assets/images/Mask group (6).png",
//         title:" OUTDOOR",
  
//     text:"  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae     ",
// button:"TRY IT NOW  "
//     }
// ]


// const prev = () => {
//   setNextcard((nextcard - 1 + items.length) % items.length);
// };

// const next = () => {
//   setNextcard((nextcard + 1) % items.length);
// };
// // const prev = () => {
// //   setnextcard  ((nextcard - 1 + items.length) % items.length);
// //   };
// // const next = () => {
// //    setnextcard (( nextcard+ 1) % items.length);
// //   };


// return(
// <div className=" flex  gap-5 ">

//       {/* ================= MOBILE ================= */}
//       <div className="flex md:hidden w-full items-center justify-between gap-2">

//         {/* Previous */}
//         <button
//           onClick={prev}
//           className="text-white text-3xl px-2"
//         >
//           ‹
//         </button>

//         {/* Current item */}
//         <div className="flex items-center gap-3 flex-1 min-w-0">

//          <img
//   src={items[nextcard].img}
//   alt={items[nextcard].title}
//   className="w-12 h-12 object-contain shrink-0"
// />

//         </div>

//         {/* Next */}
//         <button
//           onClick={next}
//           className="text-white text-3xl px-2"
//         >
//           ›
//         </button>

//       </div>

//     {/* carc1  desktop */}
//     <div className=" hidden sm:flex  flex-col w-3/12 h-6/12 gap-8 py-5 px-5 rounded-4xl items-center  bg-linear-65 from-[#211E2E] to-[#433D60] ">
// <img src="/src/assets/images/Mask group3.png" alt="3" className="w-10/12 h-6/12 border-[#0E0E0E] border-10 rounded-full" />
// <h3 className="  text-xl text-white font-bold">SIMULATION</h3>
// <img src="/src/assets/images/Vector 10.png" alt="" />
// <p className=" text-xs text-white">Vitae sapien pellentesque habitant morbi
// nunc. Viverra aliquet  porttitor rhoncus 
// libero justo laoreet sit amet vitae.</p>
// <button className="rounded-full    text-sm  px-7 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8] ">TRY IT NOW</button>

//     </div>
//     {/* card2 */}
//     <div className=" flex flex-col w-3/12 h-6/12 gap-8 py-5 px-5 rounded-4xl items-center  bg-linear-65 from-[#211E2E] to-[#433D60] ">
// <img src="/src/assets/images/Mask group 5).png" alt="3" className="w-10/12 h-6/12  border-[#0E0E0E] border-10 rounded-full" />
// <h3 className="  text-xl text-white font-bold">EDUCATION</h3>
// <img src="/src/assets/images/Vector 10.png" alt="" />
// <p className=" text-xs text-white">Vitae sapien pellentesque habitant morbi
// nunc. Viverra aliquet  porttitor rhoncus 
// libero justo laoreet sit amet vitae.</p>
// <button className="rounded-full    text-sm  px-7 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8] ">TRY IT NOW</button>

//     </div>
//     {/* 3 */}

// <div className=" flex flex-col w-3/12 h-6/12 gap-8 py-5 px-5 rounded-4xl items-center  bg-linear-65 from-[#211E2E] to-[#433D60] ">
// <img src="/src/assets/images/Mask group4 (1).png" alt="3" className="w-10/12 h-6/12  border-[#0E0E0E] border-10 rounded-full" />
// <h3 className="  text-xl text-white font-bold">SELF-CARE</h3>
// <img src="/src/assets/images/Vector 10.png" alt="" />
// <p className=" text-xs text-white">Vitae sapien pellentesque habitant morbi
// nunc. Viverra aliquet  porttitor rhoncus 
// libero justo laoreet sit amet vitae.</p>
// <button className="rounded-full    text-sm  px-7 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8] ">TRY IT NOW</button>

//     </div>

//     {/* 4 */}

//     <div className=" flex flex-col w-3/12 h-6/12 gap-8 py-5 px-5 rounded-4xl items-center  bg-linear-65 from-[#211E2E] to-[#433D60] ">
// <img src="/src/assets/images/Mask group (6).png" alt="3" className="w-10/12 h-6/12  border-[#0E0E0E] border-10 rounded-full" />
// <h3 className="  text-xl text-white font-bold"> OUTDOOR </h3>
// <img src="/src/assets/images/Vector 10.png" alt="" />
// <p className=" text-xs text-white">Vitae sapien pellentesque habitant morbi
// nunc. Viverra aliquet  porttitor rhoncus 
// libero justo laoreet sit amet vitae.</p>
// <button className="rounded-full    text-sm  px-7 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8] ">TRY IT NOW</button>

//     </div>
// </div>
// )

// }  

// export default Card


import { useState } from "react";

function Card() {
  const [nextcard, setNextcard] = useState(0);

  const items = [
    {
      img: "/src/assets/images/Mask group3.png",
      title: "SIMULATION",
      text: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      button: "TRY IT NOW",
    },
    {
      img: "/src/assets/images/Mask group 5).png",
      title: "EDUCATION",
      text: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      button: "TRY IT NOW",
    },
    {
      img: "/src/assets/images/Mask group4 (1).png",
      title: "SELF-CARE",
      text: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      button: "TRY IT NOW",
    },
    {
      img: "/src/assets/images/Mask group (6).png",
      title: "OUTDOOR",
      text: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      button: "TRY IT NOW",
    },
  ];

  const prev = () => {
    setNextcard((nextcard - 1 + items.length) % items.length);
  };

  const next = () => {
    setNextcard((nextcard + 1) % items.length);
  };

  return (
    <div className="flex gap-5 w-full">

      {/* ================= MOBILE ================= */}
      <div className="flex md:hidden w-full items-center justify-between gap-2">

        {/* Previous */}
        <button
          onClick={prev}
          className="text-white text-3xl px-2"
        >
          ‹
        </button>

        {/* Current Card */}
        <div className="flex flex-col items-center gap-5 flex-1 min-w-0 py-5 px-5 rounded-4xl bg-linear-65 from-[#211E2E] to-[#433D60]">

          <img
            src={items[nextcard].img}
            alt={items[nextcard].title}
            className="w-32 h-32 object-cover border-[#0E0E0E] border-8 rounded-full"
          />

          <h3 className="text-xl text-white font-bold">
            {items[nextcard].title}
          </h3>

          <img
            src="/src/assets/images/Vector 10.png"
            alt=""
          />

          <p className="text-xs text-white text-center">
            {items[nextcard].text}
          </p>

          <button className="rounded-full text-sm px-7 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8]">
            {items[nextcard].button}
          </button>

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
      <div className="hidden md:flex w-full gap-5">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-3/12 gap-8 py-5 px-5 rounded-4xl items-center bg-linear-65 from-[#211E2E] to-[#433D60]"
          >

            <img
              src={item.img}
              alt={item.title}
              className="w-10/12 aspect-square object-cover border-[#0E0E0E] border-10 rounded-full"
            />

            <h3 className="text-xl text-white font-bold">
              {item.title}
            </h3>

            <img
              src="/src/assets/images/Vector 10.png"
              alt=""
            />

            <p className="text-xs text-white">
              {item.text}
            </p>

            <button className="rounded-full text-sm px-7 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8]">
              {item.button}
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Card;

