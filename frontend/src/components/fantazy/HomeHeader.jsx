import React from "react";
import { Link } from "react-router-dom";
export default function HomeHeader({ path }) {
  console.log(path);
  return (
    <div className="mt-4 bg-gradient-to-r from-lightGray to-darkGray">
      <div className="pt-5 flex justify-between items-center">
        <div className="md:px-10 px-3">
          <h1 className="font-bold text-2xl md:text-6xl text-darkBlue">
            Fantazy
          </h1>
        </div>
        <div className="">
          <img
            className="h-20 md:h-32"
            src="https://res.cloudinary.com/doy8hfzvk/image/upload/v1682012972/abdelilah-hafidi_1_wk3lie.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center relative">
        <div className="flex absolute bottom-0">
          {path === "Home" ? (
            <button className="mx-1 rounded-lg rounded-b-none bg-darkGray px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50">
              Home
            </button>
          ) : (
            <button className="mx-1 rounded-lg rounded-b-none hover:bg-white bg-lightBlue px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50">
              Home
            </button>
          )}

          {path === "Week Selection" ? (
            <Link
              className="mx-1 rounded-lg rounded-b-none bg-darkGray px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50"
              to="/selection"
            >
              Week Selection
            </Link>
          ) : (
            <Link
              className="mx-1 rounded-lg rounded-b-none hover:bg-white bg-lightBlue px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50"
              to="/selection"
            >
              Week Selection
            </Link>
          )}
          {path === "Competition" ? (
            <button className="mx-1 rounded-lg rounded-b-none bg-darkGray px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50">
              Competition
            </button>
          ) : (
            <button className="mx-1 rounded-lg rounded-b-none hover:bg-white bg-lightBlue px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50">
              Competition
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
