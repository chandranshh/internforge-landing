import DetailsCard from "./modules/DetailsCard";
import Selector from "./modules/Selector";

function Sidebar() {
  return (
    <div className="w-[25%]">
      <div>
        <Selector />
      </div>
      <div>
        <DetailsCard />
      </div>
    </div>
  );
}

export default Sidebar;
