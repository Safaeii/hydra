function Footer(){

    return(
        <div>


{/* top */}
<div className=" grid grid-cols-8 justify-between items-center py-20 ">
<img src="/src/assets/images/Frame (1).png" alt="" />
<img src="/src/assets/images/Vector 20 (1).png" alt="" />
<div className="flex flex-col justify-center  text-white text-start">
<a href="#"  className=" text-white text-xl" >  ABOUT</a>
<a href="#"  className=" text-white text-xl" >SERVICES</a>
<a href="#"  className=" text-white text-xl" > TECHNOLOGIES</a>
<a href="#"  className=" text-white text-xl">  HOW TO</a>
<a href="#"  className=" text-white text-xl">  JOIN HYDRA</a>
</div>
<img src="/src/assets/images/Vector 20 (1).png" alt="" />
<div className="flex flex-col  justify-center text-white text-start">
<a href="#" className=" text-white text-xl">  F.A.Q</a>
<a href="#" className=" text-white text-xl">SITEMAP</a>
<a href="#" className=" text-white text-xl"> CONDITIONS</a>
<a href="#" className=" text-white text-xl">  LICENSES</a>
</div>
<img src="/src/assets/images/Vector 20 (1).png" alt="" />
<div className="flex flex-col justify-between gap-8">
<h3>SOCIALIZE WITH HYDRA</h3>
<div className="flex gap-2 ">
<img src="/src/assets/images/youtube.png" alt="" />
<img src="/src/assets/images/facebook.png" alt="" />
<img src="/src/assets/images/instagram.png" alt="" />
<img src="/src/assets/images/linkedin.png" alt="" />
<img src="/src/assets/images/twitter.png" alt="" />
<img src="/src/assets/images/pinterest.png" alt="" />
</div>
<button className=" rounded-full  border border-white  text-white  w-50   text-sm  px-3 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8]">BUILD YOUR WORLD</button>

</div>
</div>
        </div>
    )
}
export default Footer