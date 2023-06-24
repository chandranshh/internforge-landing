import { useState } from "react";

function Selector() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-white flex justify-between items-center gap-3 font-bold h-12 rounded-lg text-gray-600 px-1 mb-6">
      <div
        className={`w-32 p-2 rounded-lg ${
          selected === 0 ? "bg-[#6938EF] text-white" : "bg-white text-[#9B8AFB]"
        } text-center cursor-pointer transition-colors duration-200`}
        onClick={() => setSelected(0)}
      >
        Popular
      </div>
      <div
        className={`w-32 p-2 rounded-lg ${
          selected === 1 ? "bg-[#6938EF] text-white" : "bg-white text-[#9B8AFB]"
        } text-center cursor-pointer transition-colors duration-200`}
        onClick={() => setSelected(1)}
      >
        Newest
      </div>
      <div
        className={`w-32 p-2 rounded-lg ${
          selected === 2 ? "bg-[#6938EF] text-white" : "bg-white text-[#9B8AFB]"
        } text-center cursor-pointer transition-colors duration-200`}
        onClick={() => setSelected(2)}
      >
        Bookmarks
      </div>
    </div>
  );
}

export default Selector;
