import DetailsCard from "./modules/DetailsCard";
import Selector from "./modules/Selector";
import { jobData } from "./constants/data.js";

function Sidebar() {
  return (
    <div className="w-[350px]">
      <div>
        <Selector />
      </div>
      <div className="flex flex-col overflow-y-scroll scrollbar-hide h-[100%]">
        {jobData.map((job) => (
          <DetailsCard key={job.company} jobDetails={job} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
