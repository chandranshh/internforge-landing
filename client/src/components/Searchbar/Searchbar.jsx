import Search from "../../assets/Searchbar/search.png";
import Filter from "../../assets/Searchbar/filter.png";
function Searchbar() {
  return (
    <div className="flex gap-4 w-full mb-8">
      <div className="bg-white min-w-[95%] h-fit rounded-lg">
        <div className="flex justify-end items-center h-12">
          <div className="flex h-full items-center">
            <div className="flex bg-[#6938EF] rounded-r-xl w-16 justify-center cursor-pointer">
              <img className="p-2" src={Search} alt="search.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-12 rounded-lg">
        <img className="cursor-pointer" src={Filter} alt="filter.png" />
      </div>
    </div>
  );
}

export default Searchbar;
