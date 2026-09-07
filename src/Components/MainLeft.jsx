function MainLeft(){

    return(
<div className="flex flex-col gap-2 text-white pt-10 z-10  "   >
       <h2 className=" text-4xl text-white">  Dive Into The Depths</h2>
       <h2 className=" text-4xl text-white">  Of Virtual Reality</h2>
       <div className="w-50 h-30">
 <p className=" text-sm  text-white  hidden lg:block"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
nisl tincidunt eget. Lectus mauris eros in vitae .</p>
       </div>

       <div className="flex justify-center  -mt-20 lg:mt-0">
  <button
    className="
      text-sm text-white rounded-full
      border border-white
      px-3 py-3
      sm:mr-10
      bg-linear-to-r from-[#8176AF] to-[#C0B7E8]
    "
  >
    BUILD YOUR WORLD
  </button>

  <img
    src="/src/assets/images/shape.png"
    alt="->"
    className="hidden lg:block"
  />
</div>
{/*       
<div className=" flex  sm:mr-10  ">
    <button className=" text-sm text-white rounded-full   border border-white   px-3 py-3  mr-10  bg-linear-to-r from-[#8176AF] to-[#C0B7E8] ">  BUILD YOUR WORLD</button>
    <img src="/src/assets/images/shape.png" alt=" ->" className=" hidden lg:block" />
</div> */}


</div>
    )
}
export default MainLeft 



