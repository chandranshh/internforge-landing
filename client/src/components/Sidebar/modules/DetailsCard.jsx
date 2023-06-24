/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import SelectedBookmark from "../../../assets/DetailsCard/bookmark.png";
import NotBookmark from "../../../assets/DetailsCard/unbookmark.png";
import companyLogo from "../../../assets/DetailsCard/companyLogo.png";
import ClipboardClose from "../../../assets/DetailsCard/clipboardclose.png";
import Profile2User from "../../../assets/DetailsCard/profile2user.png";
import Timer from "../../../assets/DetailsCard/timer.png";
import WalletMoney from "../../../assets/DetailsCard/walletmoney.png";

function DetailsCard(props) {
  const { jobDetails } = props;
  const [selected, setSelected] = useState(false);
  const skillsContainerRef = useRef(null);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [remainingSkills, setRemainingSkills] = useState([]);
  const [remainingDays, setRemainingDays] = useState(0);

  const toggleBookmark = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    const container = skillsContainerRef.current;
    setIsOverflowed(container.scrollWidth > container.clientWidth);
    setDisplayedSkills(jobDetails.skills.slice(0, 2));
    setRemainingSkills(jobDetails.skills.slice(2));

    // Convert endsBy to a valid date string
    const endsByDate = new Date(jobDetails.endsBy);
    const today = new Date();
    const timeDiff = endsByDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setRemainingDays(daysDiff);
  }, []);

  useEffect(() => {
    if (isOverflowed) {
      const container = skillsContainerRef.current;
      const containerWidth = container.clientWidth;
      let remainingWidth = containerWidth;

      const skillsToDisplay = [];
      const skillsToRemove = [];

      for (let i = 0; i < remainingSkills.length; i++) {
        const skill = remainingSkills[i];
        const tempSkills = [...skillsToDisplay, skill];
        const tempSkillsWidth = calculateSkillsWidth(tempSkills);

        if (tempSkillsWidth <= containerWidth) {
          skillsToDisplay.push(skill);
          remainingWidth = containerWidth - tempSkillsWidth;
        } else {
          skillsToRemove.push(skill);
        }
      }

      setDisplayedSkills(displayedSkills.concat(skillsToDisplay));
      setRemainingSkills(skillsToRemove);
    }
  }, [isOverflowed]);

  const calculateSkillsWidth = (skills) => {
    const tempContainer = document.createElement("div");
    tempContainer.style.visibility = "hidden";
    tempContainer.style.position = "absolute";
    tempContainer.style.whiteSpace = "nowrap";
    tempContainer.style.fontWeight = "bold";
    tempContainer.style.fontSize = "12px";

    let totalWidth = 0;

    skills.forEach((skill) => {
      tempContainer.textContent = skill;
      document.body.appendChild(tempContainer);
      totalWidth += tempContainer.clientWidth;
      document.body.removeChild(tempContainer);
    });

    return totalWidth;
  };

  return (
    <>
      <div className="flex flex-col gap-3 bg-white my-4 p-3 rounded-xl">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold text-md">{jobDetails.jobTitle}</div>
            <div className="font-bold text-sm text-[#667085]">
              {jobDetails.company}
            </div>
          </div>
          <img
            className="h-[40px] w-[40px] cursor-pointer"
            src={selected ? SelectedBookmark : NotBookmark}
            alt="bookmark.png"
            onClick={toggleBookmark}
          />
        </div>
        <div className="flex justify-between gap-2 items-center mx-4">
          <img className="h-[30px] w-[30px]" src={companyLogo} alt="LOGO.png" />
          <div
            ref={skillsContainerRef}
            className="flex bg-[#F2F4F7] rounded-full shadow-lg overflow-hidden whitespace-nowrap"
          >
            {displayedSkills.map((skill) => (
              <div
                key={skill}
                className="font-bold text-[#000000] px-2 py-1 text-xs"
              >
                {skill}
              </div>
            ))}
            {remainingSkills.length > 0 && (
              <div className="font-extrabold text-[#000000] px-2 py-1 text-xs">
                <span className="text-[#6938EF]">
                  +{remainingSkills.length}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="ml-3 mr-5 py-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <img src={Timer} alt="timer.png" />
              <span className="font-bold">{jobDetails.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={WalletMoney} alt="timer.png" />
              <span className="font-bold">{jobDetails.stipend}</span>
            </div>
            <div className="flex  items-center gap-2">
              <img src={Profile2User} alt="timer.png" />
              <span className="font-bold">{jobDetails.applicants}</span>{" "}
              Applicants
            </div>
            <div className="flex  items-center gap-2">
              <img src={ClipboardClose} alt="timer.png" />
              <span>
                Ends in <span className="font-bold">{remainingDays} day</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsCard;
