function Header(){

    return(
<div className="flex justify-between  items-center pt-5  ">
    <div className=" flex  items-center">
    <img src="/src/assets/images/Frame (1).png" alt="fram" className="w-25 h-25 " />
    <img src="/src/assets/images/Frame.png" alt="icon"  className="w-25 h-10   "/>
</div>
<ul className="flex gap-10">
<a href="#" className="text-sm text-white "  > ABOUT</a>
<a href="#" className="text-sm text-white "  > SERVICES</a>
<a href="#" className="text-sm text-white "  > TECHNOLOGIES</a>
<a href="#" className="text-sm text-white "  > HOW TO</a>
</ul> 
<div className="gap-5 z-10">
    <button  className="rounded-full   border border-white  text-white text-sm  px-3 py-3  mr-10  " >CONTACT US</button>
    <button  className="rounded-full  border border-white  text-white    text-sm  px-3 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8] " > JOIN HYDRA</button>
</div>
</div>
    )
}
export default Header