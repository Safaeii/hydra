import MainLeft from "./MainLeft"
import Mainright from "./Mainright"
import Mainb from "./Mainb"



function Main(){
    return(
<div className="flex flex-col items-center gap-5">
    <div className=" flex justify-between gap-90">
<MainLeft/>
     <Mainright/>
    </div>
     <Mainb/>
</div>
    )
}
export default Main