import { useSelector } from "react-redux";

function Abouts() {
  const selectedJob = useSelector((state) => state.selectedJob.selectedJob);
  return (
    <div>
      <div className="ml-16 mt-16">
        <div className="font-bold text-xl">About Us</div>
        <div className="w-[850px] mt-3 text-xl">{selectedJob.aboutUs}</div>
      </div>
      <div className="ml-16 mt-16">
        <div className="font-bold text-xl">Requirements:</div>
        <div className="w-[900px] mt-3 text-xl">
          {selectedJob?.requirements?.map((requirement) => (
            <div key={requirement} className="flex gap-2 items-center">
              <span className="text-[0.5rem]">●</span>
              {requirement}
            </div>
          ))}
        </div>
      </div>
      <div className="ml-16 mt-16">
        <div className="font-bold text-xl">Responsibilities:</div>
        <div className="w-[900px] mt-3 text-xl">
          {selectedJob?.responsibilities?.map((responsibilitie) => (
            <div key={responsibilitie} className="flex gap-2 items-center">
              <span className="text-[0.5rem]">●</span>
              {responsibilitie}
            </div>
          ))}
        </div>
      </div>
      <div className="ml-16 mt-16 text-[#6938EF] font-bold text-xl">
        <a href="https://physicswallah.live/">Visit Website</a>
      </div>
      <div className="flex justify-center w-full">
        <button className="ml-16 mt-16 bg-[#6938EF] text-white font-extrabold rounded-full items-center px-12 py-4 text-2xl mb-16">
          Apply
        </button>
      </div>
    </div>
  );
}

export default Abouts;
