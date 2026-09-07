function Login (){

return(
    <div className=" bg-radial from-[#403A5F] to-[#211E2E]  rounded-4xl flex flex-col items-center py-8 gap-8 ">
        <h2  className=" text-xl text-white  font-bold">  JOIN HYDRA</h2>
        <img src="/src/assets/images/Vector 16.png" alt="" />
        <p  className=" text-sm text-white ">  Let’s Build Your VR Experience</p>
<div className=" lg:flex-row gap-4  flex flex-col  lg:justify-center ">
    <div className=" flex  flex-col gap-5 ">
<input type="text" name="" id="" placeholder="First Name" className="  w-80 border-2 rounded-full  text-white text-xs py-4 px-4 lg:w-96 text-start
 border-gray-400 hover:border-purple-500 focus:border-purple-500 outline-none

"  />
<input type="email" placeholder=" Email"   className=" border-2 rounded-full  text-white text-xs py-4 px-4  w-80 lg:w-96 text-start

 border-gray-400 hover:border-purple-500 focus:border-purple-500 outline-none
" />

    </div>
<div   className=" flex  flex-col gap-5">
    <input type="text" placeholder="Last Name"   className=" border-2 rounded-full text-white text-xs py-4 px-4  w-80 lg:w-96 text-start
    
     border-gray-400 hover:border-purple-500 focus:border-purple-500 outline-none" />
    <input type="phone" name="" id=""  placeholder=" Phone Number"    className=" border-2 rounded-full text-white text-xs py-4 px-4 w-80 lg:w-96 text-start
     border-gray-400 hover:border-purple-500 focus:border-purple-500 outline-none
    "/>
</div>
</div>
<input type="text"  placeholder=" Subject"  className=" border-2 rounded-full  text-white text-xs py-4 px-4 lg:w-3xl w-80 text-start
 border-gray-400 hover:border-purple-500 focus:border-purple-500 outline-none"/>
<textarea name="" id="" placeholder="Tell Us Something... " className=" py-3 px-3 text-white lg:w-3xl  w-80 h-30 border-2  rounded-4xl

 border-gray-400 hover:border-purple-500 focus:border-purple-500 outline-none"> </textarea>
<button className=" rounded-full w-50  border border-white  text-white    text-sm  px-3 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8]


hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700

"> SEND TO HYDRA</button>

    </div>
)
}
export default Login