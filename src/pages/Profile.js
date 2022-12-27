import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IoRocketOutline } from "react-icons/io5";
import { BsSun, BsMoonStars, BsTelephoneOutbound } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiOutlineDesktop, AiFillGithub } from "react-icons/ai";
import { GrReactjs, GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { themeData } from "../store/themeSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.themeData.darkMode);
  useEffect(() => {
    if (dark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  const handleTheme = () => {
    if (dark === "light") {
      dispatch(themeData("dark"));
      localStorage.setItem("theme", "dark");
    }
    if (dark === "dark") {
      dispatch(themeData("light"));
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <div className=" relative h-[150px] bg-blue-400 dark:bg-slate-800 sm:h-[200px] md:h-[300px]">
        <div className="absulate relative top-0 mx-auto max-w-container">
          {dark === "dark" ? (
            <BsMoonStars
              onClick={handleTheme}
              className=" absolute top-4 right-2 cursor-pointer text-lg text-white sm:right-0 md:top-2"
            />
          ) : (
            <BsSun
              onClick={handleTheme}
              className=" absolute top-4 right-2 cursor-pointer text-lg text-white sm:right-0 md:top-2"
            />
          )}
        </div>
      </div>

      <div className=" mx-auto max-w-container">
        <div className=" relative mt-[-10%] h-[80px] w-[80px] sm:h-[160px] sm:w-[160px]">
          <img
            className="h-full w-full rounded-full dark:outline-slate-500 md:outline md:outline-white"
            src="images/asset/profile.jpg"
            alt="profile"
          />
          <IoRocketOutline className="absolute right-0 bottom-[0px] rounded-full bg-white p-1 text-2xl text-blue-400 dark:bg-slate-800 md:p-2 md:text-4xl" />
        </div>
      </div>
      <div className="mx-auto mt-5 max-w-container rounded-lg border bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
        <h1 className=" font-pop text-base font-bold text-primary dark:text-slate-300">
          Md Nishath Khandakar
        </h1>
        <h2 className=" pt-4 font-pop text-sm font-semibold text-secondery dark:text-slate-400">
          Self-learner & Code Fighter
        </h2>
        <div className="flex flex-wrap gap-y-2 gap-x-5 py-5 md:gap-y-0">
          <div className="flex items-center gap-x-3">
            <BsTelephoneOutbound className="text-base text-blue-400" />
            <a
              href="tel:+8801767591988"
              className="font-pop text-[13px] text-secondery dark:text-slate-400"
            >
              +8801767591988
            </a>
          </div>
          <div className="flex items-center gap-x-3">
            <MdOutlineMarkEmailUnread className="text-base text-blue-400" />
            <a
              href="mailto:nishatbd3388@gmail.com"
              className="font-pop text-[13px] text-secondery dark:text-slate-400"
            >
              nishatbd3388@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-x-3">
            <BiMap className="text-base text-blue-400" />
            <a
              href="https://goo.gl/maps/x8fJX652nQaJqSe78"
              target="_blank"
              rel="noreferrer"
              className="font-pop text-[13px] text-secondery dark:text-slate-400"
            >
              Palashbari, Bangladesh
            </a>
          </div>
        </div>
        <div className="flex gap-x-2">
          <div className="group flex cursor-pointer items-center gap-x-2 rounded-full border px-4 py-2 hover:bg-blue-400  dark:border-slate-700">
            <AiOutlineDesktop className="text-secondery group-hover:text-white dark:text-slate-400" />
            <span className="font-pop text-[12px] font-normal text-secondery group-hover:text-white dark:text-slate-400 md:text-sm">
              Web Developer
            </span>
          </div>
          <div className="group flex cursor-pointer items-center gap-x-2 rounded-full border px-4 py-2 hover:bg-blue-400 dark:border-slate-700">
            <GrReactjs className="text-secondery group-hover:text-white dark:text-slate-400" />
            <span className="font-pop text-[12px] font-normal text-secondery group-hover:text-white dark:text-slate-400 md:text-sm">
              React Developer
            </span>
          </div>
        </div>
        <div className="mt-4 flex gap-x-4 pl-2">
          <a
            href="https://github.com/mdnishath"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="text-xl text-secondery dark:text-slate-400 dark:hover:text-blue-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-nishath-khandakar/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedinOption className="text-xl text-secondery dark:text-slate-400 dark:hover:text-blue-400" />
          </a>
          <a
            href="https://www.facebook.com/nishathkhandakar/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="text-xl text-secondery dark:text-slate-400 dark:hover:text-blue-400" />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-container rounded-lg border bg-white dark:border-slate-700 dark:bg-slate-800">
        <Navbar />
      </div>
    </>
  );
};

export default Profile;
