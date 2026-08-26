function Maind (){
    return(
        <div className=" flex flex-col py-10">
{/* top */}
<div className=" flex flex-col items-center "> 
    <img src="/src/assets/images/pexels-rodnae-productions-8097332 1.png" alt="" className=" rounded-full "  />
    <img src="/src/assets/images/chevron-small-down.png" alt="" className=" w-1/12 h-1/12 border-8   bg-linear-to-r from-[#8176AF] to-[#C0B7E8] border-[#0E0E0E] rounded-full  -mt-10" />
    <h3 className=" text-white text-xl font-bold  -mt-50" >  TECHNOLOGIES & HARDWARE</h3>
    <br />
    <p className=" text-white text-xl " >  USED BY HYDRA VR.</p>
</div>
{/* button */}
<div className=" py-25  gap-10 grid grid-cols-4 items-center  ">
<img src="/src/assets/images/Hydra-Tech1 1.png" alt="" />
<img src="/src/assets/images/Hydra-Tech2 1.png" alt="" />
<img src="/src/assets/images/Hydra-Tech3 1.png" alt="" />
<img src="/src/assets/images/Hydra-Tech4 1.png" alt="" />
</div>
        </div>
    )

}

export default Maind