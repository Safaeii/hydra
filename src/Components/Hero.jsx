import Header from "./Header"
import Main from "./Main"
import Vacrornain from "./Vacrormain"
import Main2 from "./Main2"
import Mainc from "./Mainc"
import Maind from "./Maind"
import Maine from "./Maine"
import Login from "./Loin"
import Footer from './Foooter'
function Hero(){

    return(
        <div className="w-screen">


        <div className=" h-full w-screen bg-[#343045]   ">
<div className=" h-11/12 w-10/12  m-auto ">
<Header/>
    <Main/>
    <Vacrornain/>
</div>
        </div>

 <div className=" h-full w-screen bg-[#343045] py-20 ">
<div className=" h-11/12 w-10/12  m-auto">
<Main2/>
<Mainc/>
<Maind/>
<Maine/>
<Login/>
<Footer/>
</div>
</div>
 </div>

    )
}
export default Hero 