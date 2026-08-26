function Login (){

return(
    <div className=" bg-radial from-[#403A5F] to-[#211E2E]  rounded-4xl flex flex-col items-center py-8 gap-8 ">
        <h2  className=" text-xl text-white  font-bold">  JOIN HYDRA</h2>
        <img src="/src/assets/images/Vector 16.png" alt="" />
        <p  className=" text-sm text-white ">  Let’s Build Your VR Experience</p>
<div className=" flex gap-5">
    <div className=" flex  flex-col gap-5 ">
<input type="text" name="" id="" placeholder="First Name" className=" border-2 rounded-full border-white text-white text-xs py-4 px-4 w-96 text-start"  />
<input type="email" placeholder=" Email"   className=" border-2 rounded-full border-white text-white text-xs py-4 px-4 w-96 text-start" />

    </div>
<div   className=" flex  flex-col gap-5">
    <input type="text" placeholder="Last Name"   className=" border-2 rounded-full border-white text-white text-xs py-4 px-4 w-96 text-start" />
    <input type="phone" name="" id=""  placeholder=" Phone Number"    className=" border-2 rounded-full border-white text-white text-xs py-4 px-4 w-96 text-start"/>
</div>
</div>
<input type="text"  placeholder=" Subject"  className=" border-2 rounded-full border-white text-white text-xs py-4 px-4 w-9/12 text-start"/>
<textarea name="" id="" placeholder="Tell Us Something... " className=" py-3 px-3 text-white w-9/12 h-30 border-2 border-white rounded-4xl"> </textarea>
<button className=" rounded-full w-50  border border-white  text-white    text-sm  px-3 py-3 bg-linear-to-r from-[#8176AF] to-[#C0B7E8]"> SEND TO HYDRA</button>

    </div>
)
}
export default Login