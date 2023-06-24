/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import Abouts from "./modules/Abouts";
import Skills from "./modules/Skills";
import DetailGrid from "./modules/DetailGrid";
import TopBar from "./modules/TopBar";

function Details() {
  const { selectedJob } = useSelector((state) => state.selectedJob);

  console.log(selectedJob);
  if (!selectedJob || Object.keys(selectedJob).length === 0) {
    return (
      <div className="flex w-full h-[50%] justify-center items-center text-2xl text-gray-500 font-semibold">
        No job is selected. Please select a job to show it's details.
      </div>
    );
  }

  return (
    <div className="w-full h-fit bg-[#FFFFFF] rounded-lg transition-opacity duration-500">
      <div
        className={`opacity-${
          Object.keys(selectedJob).length > 0 ? "100" : "0"
        }`}
      >
        <TopBar />
        <DetailGrid />
        <Skills />
        <Abouts />
      </div>
    </div>
  );
}

export default Details;
