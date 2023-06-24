import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Details from "../components/Details/Details";
import Searchbar from "../components/Searchbar/Searchbar";

function MainPage() {
  return (
    <div>
      <Navbar />
      <div
        className="flex mt-6 mx-4 "
        style={{ height: "calc(100vh - 180px)" }}
      >
        <Sidebar />
        <div className="flex flex-col gap-2 w-full ml-8">
          <Searchbar />
          <Details />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
