import { useEffect, useState } from "react";
import DetailsCard from "./modules/DetailsCard";
import Selector from "./modules/Selector";
import { fetchJobListings } from "../../controllers/fetchJobLisitngs";
import LoadingSpinner from "./modules/LoadingSpinner/LoadingSpinner";

function Sidebar() {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchJobListings();
        setJobData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job listings:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ height: "calc(100vh + 250px)" }} className="w-[350px]">
      <div className="mb-7">
        <Selector />
      </div>
      <div className="flex flex-col overflow-y-scroll scrollbar-hide h-[56%]">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <LoadingSpinner />
            <div className="loader"></div>
          </div>
        ) : (
          jobData.map((job) => (
            <DetailsCard key={job.company} jobDetails={job} />
          ))
        )}
      </div>
    </div>
  );
}

export default Sidebar;
