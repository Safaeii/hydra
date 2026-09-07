import MainLeft from "./MainLeft"
import Mainright from "./Mainright"
import Mainb from "./Mainb"

function Main() {
  return (
    <div className="flex flex-col items-center gap-5">

      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">

        <div className="order-2 md:order-1">
          <MainLeft />
        </div>

        <div className="order-1 md:order-2">
          <Mainright />
        </div>

      </div>

      <Mainb />

    </div>
  );
}

export default Main;

