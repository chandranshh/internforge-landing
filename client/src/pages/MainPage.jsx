import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Details from "../components/Details/Details";
import Searchbar from "../components/Searchbar/Searchbar";
import { useSelector } from "react-redux";

function MainPage() {
  const isSelect = useSelector((state) => state.isSelect);

  return (
    <div>
      <Navbar />
      <div className="flex mt-6 mx-4 h-fit">
        <Sidebar />
        <div className="flex flex-col gap-2 w-full ml-8">
          <Searchbar />
          {!isSelect && <Details />}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
