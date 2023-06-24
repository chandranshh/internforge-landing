import { useSelector } from "react-redux";
import Calendar from "../../../assets/Details/calendar.png";
import Timer from "../../../assets/Details/timer.png";
import Wallet from "../../../assets/Details/walletmoney.png";
import Applicants from "../../../assets/Details/profile2user.png";
import Location from "../../../assets/Details/location.png";
import Clipboard from "../../../assets/Details/clipboardclose.png";
import Ranking from "../../../assets/Details/ranking.png";
import UserTick from "../../../assets/Details/usertick.png";
import { useEffect, useState } from "react";

function DetailGrid() {
  const [remainingDays, setRemainingDays] = useState(0);
  const selectedJob = useSelector((state) => state.selectedJob.selectedJob);

  //postedOn
  const date = new Date(selectedJob.postedOn);
  const postedOn = date.toLocaleDateString();

  //endsBy
  useEffect(() => {
    const endsByDate = new Date(selectedJob.endsBy);
    const currentDate = new Date();
    const differenceInTime = endsByDate.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    setRemainingDays(differenceInDays);
  }, [selectedJob.endsBy]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-3 p-6 max-w-fit items-center bg-purple-100 ml-16 rounded-2xl">
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Timer} alt="timer.png" />
          <div className="flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-black">
              {selectedJob.duration}
            </div>
            <div className="text-[1rem] text-black">Duration</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Ranking} alt="timer.png" />
          <div className="flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-black">
              {selectedJob.experience}
            </div>
            <div className="text-[1rem] text-black">Experience</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Wallet} alt="timer.png" />
          <div className="flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-black">
              {selectedJob.stipend}
            </div>
            <div className="text-[1rem] text-black">Stipend</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Location} alt="timer.png" />
          <div className="flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-black">
              {selectedJob.location}
            </div>
            <div className="text-[1rem] text-black">Location</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Calendar} alt="timer.png" />
          <div className=" flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-black">{postedOn}</div>
            <div className="text-[1rem] text-black">Posted On</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Clipboard} alt="timer.png" />
          <div className=" flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-black">
              {remainingDays} days
            </div>
            <div className="text-[1rem] text-black">Ends In</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={UserTick} alt="timer.png" />
          <div className="flex flex-col justify-center items-start  p-2">
            <div className="font-bold text-[1rem] text-black">
              {selectedJob.openPositions}
            </div>
            <div className="text-[1rem] text-black">Open Positions</div>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src={Applicants} alt="timer.png" />
          <div className="flex flex-col justify-center items-start p-2">
            <div className="font-bold text-[1rem] text-black">
              {selectedJob.applicants}
            </div>
            <div className="text-[1rem] text-black">Total Applicants</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailGrid;
