function Footer(){

    return(
        <div className=" flex flex-col md:gap-20 items-center justify-center">


{/* top */}
<div className=" flex flex-col items-center justify-center gap-8 py-8 lg:grid lg:grid-cols-8 ">
<img src="/src/assets/images/Frame (1).png" alt=""   className="  "/>
<img src="/src/assets/images/Vector 20 (1).png" alt=""  className=" hidden md:block" />
<div className=" flex-col justify-center items-start -ml-20 text-white text-center hidden md:flex">
<a href="#"  className=" text-white text-xl" >  ABOUT</a>
<a href="#"  className=" text-white text-xl" >SERVICES</a>
<a href="#"  className=" text-white text-xl" > TECHNOLOGIES</a>
<a href="#"  className=" text-white text-xl">  HOW TO</a>
<a href="#"  className=" text-white text-xl">  JOIN HYDRA</a>
</div>
<img src="/src/assets/images/Vector 20 (1).png" alt="" className=" hidden md:block"  />
<div className="flex-col  justify-center text-white text-start hidden md:flex -ml-20">
<a href="#" className=" text-white text-xl">  F.A.Q</a>
<a href="#" className=" text-white text-xl">SITEMAP</a>
<a href="#" className=" text-white text-xl"> CONDITIONS</a>
<a href="#" className=" text-white text-xl">  LICENSES</a>
</div>
<img src="/src/assets/images/Vector 20 (1).png" alt="" className=" hidden md:block"   />

<div className="flex flex-col justify-between gap-8 bf">
<h3 className="text-white text-xl ">SOCIALIZE WITH HYDRA</h3>
<div className="flex gap-1  ">
<img src="/src/assets/images/youtube.png" alt="" />
<img src="/src/assets/images/facebook.png" alt="" />
<img src="/src/assets/images/instagram.png" alt="" />
<img src="/src/assets/images/linkedin.png" alt="" />
<img src="/src/assets/images/twitter.png" alt="" />
<img src="/src/assets/images/pinterest.png" alt="" />
</div>
<button className=" rounded-full  border border-white  text-white  w-50   text-sm  px-3 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8]
 ">BUILD YOUR WORLD</button>
</div >
</div>
{/* botoom */}
<div className=" flex flex-col items-center gap-5 ">
<img src="/src/assets/images/Vector 25.png" alt="pick"  className="w-11/12"/>
<p className=" text-white text-xs text-center"> 2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
</div>
        </div>
    )
}
export default Footer