import { useState } from "react";
import BellIcon from "../../assets/Navbar/notification.png";
import UserImage from "../../assets/Navbar/user.png";
import ClipBoard from "../../assets/Navbar/clipboardtext.png";
import Message from "../../assets/Navbar/messagequestion.png";
import TaskSquare from "../../assets/Navbar/tasksquare.png";
import Edit from "../../assets/Navbar/edit.png";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("browse-listings");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const getMenuClass = (menu) => {
    return activeMenu === menu
      ? "text-[#6938EF] flex items-center gap-2 cursor-pointer"
      : "text-[#667085] flex items-center gap-2 cursor-pointer";
  };

  return (
    <div className="bg-[#FFFFFF] h-16 flex justify-around items-center shadow-md">
      <h1 className="font-bold text-black text-2xl cursor-pointer">
        TalentForge
      </h1>
      <div className="flex gap-8 font-bold">
        <div
          className={getMenuClass("browse-listings")}
          onClick={() => handleMenuClick("browse-listings")}
        >
          <img src={ClipBoard} alt="clipoard.png" />
          <div className="whitespace-nowrap">Browse Listings</div>
        </div>
        <div
          className={getMenuClass("application-history")}
          onClick={() => handleMenuClick("application-history")}
        >
          <img src={TaskSquare} alt="edit.png" />
          <div className="whitespace-nowrap">Application History</div>
        </div>
        <div
          className={getMenuClass("blog")}
          onClick={() => handleMenuClick("blog")}
        >
          <img src={Edit} alt="edit.png" />
          <div className="whitespace-nowrap">Blog</div>
        </div>
        <div
          className={getMenuClass("contact-us")}
          onClick={() => handleMenuClick("contact-us")}
        >
          <img src={Message} alt="messagequestion.png" />
          <div className="whitespace-nowrap">Contact Us</div>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <img
          className="h-[30px] w-[30px] cursor-pointer"
          src={BellIcon}
          alt="bell_icon"
        />
        <img
          className="h-[45px] w-[45px] cursor-pointer"
          src={UserImage}
          alt="user_image"
        />
      </div>
    </div>
  );
}

export default Navbar;
