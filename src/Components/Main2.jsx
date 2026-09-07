// function Main2(){
//     return(
//         <div> 




// <div className=" flex flex-col justify-center items-center  gap-1 lg:flex-row ">

// {/* left */}
// <div className="  flex  flex-col  items-center w-full lg:w-1/2 z-10 ">
// <div className=" flex items-center gap-12 ">
//    <div className="">
//      <p className=" text-xl text-white font-bold"> INTRODUCTION</p>
//     <p  className=" text-xl text-white"> TO HYDRA VR</p>
//    </div>
//     <img src="/src/assets/images/Component 1.png" alt=""  className="hidden lg:block"/>
// </div>
// <img src="/src/assets/images/Mask group c.png" alt="2"  className=" w-90 h-120 mt-20 "/>
// </div>

// {/* right */}

// <div className=" flex flex-col  w-full  items-center py-5 z-10 lg:w-1/2  ">

// <div className=" flex-col  gap-8  ">
// <p  className=" text-sm text-white  mb-18 hidden lg:block"> Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
// nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
// quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
// lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>


// <h2 className=" text-5xl text-white font-bold" >
//     ABOUT
// </h2>
// <h3 className=" text-4xl text-white">
//     HYDRA VR
// </h3>
// <p className=" text-sm text-white"  >  Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
// urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
// dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
// Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
// sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 

// n tempor.</p>
// <button className=" text-sm  text-white  bg-linear-to-r from-[#8176AF] to-[#C0B7E8]  rounded-full w-50 h-10 ">  LET’S GET IN TOUCH</button>

// </div>

// </div>


// </div>

//         </div>
//     )
// }

// export default Main2


function Main2() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 lg:flex-row">

        {/* left */}
        <div className="flex flex-col items-center w-full lg:w-1/2 z-10">

          <div className="flex items-center justify-center gap-12">
            <div>
              <p className="text-xl text-white font-bold">
                INTRODUCTION
              </p>

              <p className="text-xl text-white">
                TO HYDRA VR
              </p>
            </div>

            <img
              src="/src/assets/images/Component 1.png"
              alt=""
              className="hidden lg:block"
            />
          </div>

          <img
            src="/src/assets/images/Mask group c.png"
            alt="2"
            className="w-90 h-120 mt-10 lg:mt-20"
          />
        </div>

        {/* right */}
        <div className="flex flex-col items-center w-full  lg:justify-between lg:-mt-11   gap-20  lg:w-1/2 lg:items-end py-5 z-10">

          <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">

            <p className="text-sm text-white mb-5 hidden lg:block">
              Vitae sapien pellentesque habitant morbi tristique senectus
              et netus et. Feugiat nibh sed pulvinar proin gravida
              hendrerit lectus. Mi sit amet mauris commodo quis
              imperdiet massa tincidunt nunc.
            </p>

            <h2 className="text-5xl text-white font-bold">
              ABOUT
            </h2>

            <h3 className="text-4xl text-white">
              HYDRA VR
            </h3>

            <p className="text-sm text-white">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl 
rhoncus mattis rhoncus urna neque viverra justo. Vivamus 
at augue eget arcu dictum. Ultrices gravida dictum fusce 
ut placerat orci. Aenean et tortor at risus viverra adipisci
ng at in. Mattis aliquam faucibus purus in massa. Est 
placerat in egestas erat imperdiet sed. Consequat sem
per viverra nam libero justo laoreet sit amet. Aliquam 
etiam erat velit scelerisque in dictum non consectetur 
a. Laoreet sit amet cursus sit amet. Vel eros donec ac 
odio tempor orci dapibus. Sem nulla pharetra diam sit 
amet nisl suscipit adipiscing bibendum. Leo a diam 
sollicitudin tempor.
            </p>

            <button className="text-sm text-white bg-linear-to-r from-[#8176AF] to-[#C0B7E8] rounded-full w-50 h-10">
              LET’S GET IN TOUCH
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Main2;
