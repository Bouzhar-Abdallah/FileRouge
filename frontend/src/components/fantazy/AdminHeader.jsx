import React from "react";
import { Link } from "react-router-dom";
export default function AdminHeader({path}) {
    
  return (
    <div className="mt-4 bg-gradient-to-r from-lightGray to-gradient1">
      <div className="pt-5 flex justify-between items-center">
        <div className="md:px-10 px-3">
          <h1 className="font-bold text-2xl md:text-3xl text-darkBlue">
            Dashboard
          </h1>
        </div>
  
      </div>
      <div className="flex justify-center relative">
        {path != "Guest" && (
          <div className="flex absolute bottom-0">
            {path === "Home" ? (
              <button
                
                className="mx-1 rounded-lg rounded-b-none bg-darkGray px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50"
              >
                Home
              </button>
            ) : (
              <Link
                to="/dashboard"
                className="mx-1 rounded-lg rounded-b-none hover:bg-white bg-lightBlue px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50"
              >
                Home
              </Link>
            )}

            {path === "Games" ? (
              <button
                className="mx-1 rounded-lg rounded-b-none bg-darkGray px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50"
                
              >
                games
              </button>
            ) : (
              <Link
                className="mx-1 rounded-lg rounded-b-none hover:bg-white bg-lightBlue px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50"
                to="/games"
              >
                games
              </Link>
            )}
            {path === "News" ? (
              <button className="mx-1 rounded-lg rounded-b-none bg-darkGray px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50">
                News
              </button>
            ) : (
              <Link
                to="/news"
                className="mx-1 rounded-lg rounded-b-none hover:bg-white bg-lightBlue px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50"
              >
                News
              </Link>
            )}
            {path === "Products" ? (
              <button className="hidden mx-1 rounded-lg rounded-b-none bg-darkGray px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50">
                Products
              </button>
            ) : (
              <Link
                to="/products"
                className="hidden mx-1 rounded-lg rounded-b-none hover:bg-white bg-lightBlue px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50"
              >
                Products
              </Link>
            )}
            {path === "Points" ? (
              <button className="mx-1 rounded-lg rounded-b-none bg-darkGray px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50">
                Points
              </button>
            ) : (
              <Link
                to="/points"
                className="mx-1 rounded-lg rounded-b-none hover:bg-white bg-lightBlue px-5 py-1 text-base font-medium text-white hover:text-darkBlue transition duration-200 hover:shadow-lg hover:shadow-blueSecondary/50"
              >
                Points
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
