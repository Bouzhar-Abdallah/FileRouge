import React from "react";
import { Card } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { saveNewSquad } from "../../features/fantazy/squadSlice";
export default function SquadInfo() {
const dispatch = useDispatch();
    const { name, logo} = useSelector(
        (state) => state.squad
    );
  
  return (
    <div className="max-w-sm">
      <Card>
        <div className=" w-full ">
            <h1 className="text-center">Your squad</h1>
        </div>
        {logo ? (

            <div className="w-32  mx-auto">
                <img src={logo.url} alt="logo" />
            </div>
        ) : (
        <div className="bg-gray-200 rounded w-32 h-32 mx-auto flex justify-center items-center">
            <h1>LOGO</h1>
        </div>
        )}
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            {name ? name : "Squad Name"}
          </h5>
        </a>
        
        <div className=" flex items-center justify-between">
          <span className=" text-3xl font-bold text-gray-900 dark:text-white">
            599 MAD
          </span>
          <button
            onClick={() => {
              dispatch(saveNewSquad())
            }}
            className="rounded-lg ml-auto bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </Card>
    </div>
  );
}
