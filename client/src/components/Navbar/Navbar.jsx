import BellIcon from "../../assets/Navbar/notification.png";
import UserImage from "../../assets/Navbar/user.png";
import ClipBoard from "../../assets/Navbar/clipboardtext.png";
import Message from "../../assets/Navbar/messagequestion.png";
import TaskSquare from "../../assets/Navbar/tasksquare.png";
import Edit from "../../assets/Navbar/edit.png";

function Navbar() {
  return (
    <div className="bg-[#FFFFFF] h-16 flex justify-around items-center shadow-md">
      <h1 className="font-bold text-black text-2xl cursor-pointer">
        InternBrand
      </h1>
      <div className="flex gap-8 font-bold">
        <div className="text-[#6938EF] flex items-center gap-2 cursor-pointer">
          <img src={ClipBoard} alt="clipoard.png" />
          <div className="whitespace-nowrap">Browse Listings</div>
        </div>
        <div className="text-[#667085] flex items-center gap-2 cursor-pointer">
          <img src={TaskSquare} alt="edit.png" />
          <div className="whitespace-nowrap">Application History</div>
        </div>
        <div className="text-[#667085] flex items-center gap-2 cursor-pointer">
          <img src={Edit} alt="edit.png" />
          <div className="whitespace-nowrap">Blog</div>
        </div>
        <div className="text-[#667085] flex items-center gap-2 cursor-pointer">
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
