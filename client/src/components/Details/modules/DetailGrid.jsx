import { useSelector } from "react-redux";
import Calendar from "../../../assets/Details/calendar.png";
import Timer from "../../../assets/Details/timer.png";
import Wallet from "../../../assets/Details/walletmoney.png";
import Applicants from "../../../assets/Details/profile2user.png";
import Location from "../../../assets/Details/location.png";
import Clipboard from "../../../assets/Details/clipboardclose.png";
import Ranking from "../../../assets/Details/ranking.png";
import UserTick from "../../../assets/Details/usertick.png";
import { useState } from "react";

function DetailGrid() {
  const [remainingDays, setRemainingDays] = useState(0);
  const selectedJob = useSelector((state) => state.selectedJob.selectedJob);

  //postedOn
  const date = new Date(selectedJob.postedOn);
  const postedOn = date.toLocaleDateString();

  //endsBy
  const endsByDate = new Date(selectedJob.endsBy);
  const endsBy = endsByDate.toLocaleDateString();

  //i want to calculate the raminmaining days from current date
  const today = new Date();
  const timeDiff = endsByDate.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  setRemainingDays(daysDiff);

  return (
    <div>
      <div className="grid grid-cols-4 gap-3 p-6 max-w-fit items-center bg-purple-100 ml-16 rounded-2xl">
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Timer} alt="timer.png" />
          <div className="flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-gray-700">
              {selectedJob.duration}
            </div>
            <div className="text-[1rem] text-gray-700">Duration</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Ranking} alt="timer.png" />
          <div className="flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-gray-700">
              {selectedJob.experience}
            </div>
            <div className="text-[1rem] text-gray-700">Experience</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Wallet} alt="timer.png" />
          <div className="flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-gray-700">
              {selectedJob.stipend}
            </div>
            <div className="text-[1rem] text-gray-700">Stipend</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Location} alt="timer.png" />
          <div className="flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-gray-700">
              {selectedJob.location}
            </div>
            <div className="text-[1rem] text-gray-700">Location</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Calendar} alt="timer.png" />
          <div className=" flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-gray-700">
              {postedOn}
            </div>
            <div className="text-[1rem] text-gray-700">Posted On</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Clipboard} alt="timer.png" />
          <div className=" flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-gray-700">
              {daysDiff}
            </div>
            <div className="text-[1rem] text-gray-700">Ends In</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={UserTick} alt="timer.png" />
          <div className="flex flex-col justify-center items-start  p-2">
            <div className="font-bold text-[1rem] text-gray-700">
              {selectedJob.openPositions}
            </div>
            <div className="text-[1rem] text-gray-700">Open Positions</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Applicants} alt="timer.png" />
          <div className="flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-gray-700">
              {selectedJob.applicants}
            </div>
            <div className="text-[1rem] text-gray-700">Total Applicants</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailGrid;
