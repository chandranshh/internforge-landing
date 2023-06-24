import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Details from "../components/Details/Details";

function MainPage() {
  return (
    <div>
      <Navbar />
      <div
        className="flex mt-6 mx-4 "
        style={{ height: "calc(100vh - 180px)" }}
      >
        <Sidebar />
        <Details />
      </div>
    </div>
  );
}

export default MainPage;
