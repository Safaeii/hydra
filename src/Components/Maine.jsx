import { useState } from "react"






function Maine (){


   const [nextnamberel, setnextnamberel] = useState(0);
    const items = [ 
     { title: "01", heading: "3D Conception", text: "& Design" },
  { title: "02", heading: "Interaction", text: "& Design" },
  { title: "03", heading: "VR World", text: "User Testing" },
  { title: "04", heading: "Hydra VR", text: "Deploy" },
       ];
        const prev = () => {
          setnextnamberel( (nextnamberel - 1 + items.length) % items.length );

         }; 
         const next = () => {
             setnextnamberel( (nextnamberel + 1) % items.length );
             };
             const currentItem = items[nextnamberel];
// 


    return(
        <div className=" flex flex-col gap-y-10  items-center  ">

{/* desktop */}
{/* top */}
<div className=" flex  items-center  ">
    <div className=" lg:w-6/12  flex  flex-col ">
     <h2 className=" text-white text-xl font-bold "  >HOW WE BUILD </h2>
     <br />
     <p className=" text-white text-xl " >WITH HYDRA VR? </p>
    </div>
    <img src="/src/assets/images/Component 1f.png " alt=""  className=" lg:mr-30   hidden md:block" />
 
      <p className=" text-white text-sm w-10/12 hidden md:block"> Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
</div>
 {/* ================= MOBILE ================= */}


 <div className="flex md:hidden items-center gap-6 py-10">

  <button
    onClick={prev}
    className="text-white text-5xl"
  >
    ‹
  </button>

  <div className="flex flex-col items-center">

    {/* دایره */}
    <div className="flex items-center justify-center bg-linear-to-r from-[#8176AF] to-[#C0B7E8] w-35 h-35 rounded-full text-[#0D0D0D] text-5xl font-bold border-8 border-[#0D0D0D]">
      {currentItem.title}
    </div>

    {/* عنوان مرحله */}
    <div className="mt-5 text-center">
      <h2 className="text-white text-xl font-bold">
        {currentItem.heading}
      </h2>

      <p className="text-white text-xl">
        {currentItem.text}
      </p>
    </div>

  </div>

  <button
    onClick={next}
    className="text-white text-5xl"
  >
    ›
  </button>

</div>



{/* bottom */}
<div  className="  items-center justify-between py-10  z-10 lg:gap-15  hidden md:flex">



<div>
 <div className=" flex flex-col">
        <div className="  flex items-center justify-center   bg-linear-to-r from-[#8176AF] to-[#C0B7E8]  w-35 h-35 rounded-full text-center  text-[#0D0D0D]  text-5xl font-bold border-8 border-[#0D0D0D]">01</div>
     </div>
     <div className=" flex mt-5 -ml-10">
        <img src="/src/assets/images/arrow-small-right.png" alt="" />
        <div className=" flex flex-col">
 <h2 className=" text-white text-xl font-bold ">3D Conception
</h2>

<p  className=" text-white text-xl">   & Design</p> 
        </div>
     </div>
</div>
    


<div>
<div className=" flex flex-col ">
        <div className="  flex items-center justify-center   bg-linear-to-r from-[#8176AF] to-[#C0B7E8]  w-35 h-35 rounded-full text-center  text-[#0D0D0D]  text-5xl font-bold border-8 border-[#0D0D0D]">02</div>
     </div>
     <div className=" flex mt-5 -ml-10">
        <img src="/src/assets/images/arrow-small-right.png" alt="" />
        <div className=" flex flex-col">
 <h2 className=" text-white text-xl font-bold ">Interaction
</h2>

<p  className=" text-white text-xl">   & Design</p> 
        </div>
     </div>   

</div>
 


<div>
 <div className=" flex flex-col ">
        <div className="  flex items-center justify-center   bg-linear-to-r from-[#8176AF] to-[#C0B7E8]  w-35 h-35 rounded-full text-center  text-[#0D0D0D]  text-5xl font-bold border-8 border-[#0D0D0D]">03</div>
     </div>
     <div className=" flex mt-5 -ml-10">
        <img src="/src/assets/images/arrow-small-right.png" alt="" />
        <div className=" flex flex-col">
 <h2 className=" text-white text-xl font-bold ">VR World
</h2>

<p  className=" text-white text-xl">  User Testing</p> 
        </div>
     </div>

</div>
     

<div>
 <div className=" flex flex-col ">
        <div className="  flex items-center justify-center   bg-linear-to-r from-[#8176AF] to-[#C0B7E8]  w-35 h-35 rounded-full text-center  text-[#0D0D0D]  text-5xl font-bold border-8 border-[#0D0D0D]">04</div>
     </div>
     <div className=" flex mt-5 -ml-10">
        <img src="/src/assets/images/arrow-small-right.png" alt="" />
        <div className=" flex flex-col">
 <h2 className=" text-white text-xl font-bold ">Hydra VR
</h2>

<p  className=" text-white text-xl">  Deploy</p> 
        </div>
     </div>

</div>
     

</div>


        </div>
    )
}

export default Maine