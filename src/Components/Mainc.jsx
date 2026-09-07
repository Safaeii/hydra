
import Card from "./Card";

function Mainc(){

    return(

        <div className="flex flex-col items-center mt-30 gap-5 lg:items-start">
            <div className="flex items-center">
                <div className=" lg:w-6/12 w-full ">
                    <h3 className="text-white text-xl font-bold"  > WHY BUILD</h3>
                    <p  className="text-white text-xl " >WITH HYDRA?</p>
                </div>
<img src="/src/assets/images/Component 1f.png" alt="2" className=" hidden md:block"/>
<p className=" text-white text-sm hidden md:block " > Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
            </div>

            
<Card/>
        </div>
    )

}
export default Mainc