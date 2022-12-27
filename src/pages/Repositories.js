import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiBook } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
import { ThreeDots } from "react-loader-spinner";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchRepo = async () => {
      const data = axios.get("https://api.github.com/users/mdnishath/repos");
      const repo = await data;
      setRepositories(repo.data);
      setLoading(false);
    };
    fetchRepo();
  }, []);

  const colorGen = (lng) => {
    let color;
    switch (lng) {
      case "HTML":
        color = "text-red-500";
        break;
      case "CSS":
        color = " text-violet-500";
        break;
      case "JavaScript":
        color = "text-yellow-500";
        break;
      default:
        color = "text-black";
        break;
    }
    return color;
  };

  return (
    <div className="mx-auto mt-4 max-w-container rounded-lg border bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <h3 className="font-pop text-lg font-semibold text-primary dark:text-slate-300">
        Repositories
      </h3>
      <div className="flex flex-wrap gap-4">
        {loading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          repositories.map((repo, index) => (
            <div
              key={index}
              className=" lastStyle w-full border-b py-4 dark:border-b-slate-700 sm:w-[30%]"
            >
              <div className="my-4 flex items-center gap-x-2">
                <FiBook className="dark:text-slate-400" />
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <h4 className="font-pop text-[13px] font-semibold text-blue-400 dark:text-slate-400">
                    {repo.name}
                  </h4>
                </a>
              </div>
              <div className="flex flex-col gap-y-2">
                <h5 className="ml-3 font-pop text-[12px] font-normal text-secondery">
                  {repo.description}
                </h5>
                <div className="ml-2 flex items-center">
                  <GoPrimitiveDot className={colorGen(repo.language)} />
                  <h5 className=" font-pop text-sm font-normal text-secondery">
                    {repo.language}
                  </h5>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Repositories;
