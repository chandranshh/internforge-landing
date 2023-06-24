import { useSelector } from "react-redux";
import CompanyImg from "../../../assets/DetailsCard/companyLogo.png";
import ReactangleImg from "../../../assets/Details/topRectangle.png";

function TopBar() {
  const selectedJob = useSelector((state) => state.selectedJob.selectedJob);
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex p-16 items-center gap-6">
          <img height={50} width={50} src={CompanyImg} alt="company.png" />
          <div className="flex flex-col">
            <div className="font-bold text-[1.5rem] text-[#000000]">
              {selectedJob.jobTitle}
            </div>
            <div className="font-bold text-[1.25rem] text-[#667085]">
              {selectedJob.company}
            </div>
          </div>
        </div>
        <div>
          <img
            className="rounded-r-lg"
            height={250}
            width={300}
            src={ReactangleImg}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
