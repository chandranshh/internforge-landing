import { useSelector } from "react-redux";

function Skills() {
  const selectedJob = useSelector((state) => state.selectedJob.selectedJob);

  return (
    <div>
      <div className="w-[700px] flex flex-wrap items-center gap-2 ml-16 mt-16 ">
        {selectedJob?.skills?.map((skill) => (
          <div
            className="font-semibold text-lg bg-[#F3F3F3] px-5 rounded-full shadow-md mr-4 my-2 self-center"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
