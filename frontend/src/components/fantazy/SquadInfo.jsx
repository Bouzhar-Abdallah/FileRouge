import React from "react";
import { Card } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { saveNewSquad } from "../../features/fantazy/squadSlice";
import SquadList from "./SquadList";
export default function SquadInfo() {
  const dispatch = useDispatch();
  const { name, logo, step, TotaleValue, players } = useSelector(
    (state) => state.squad
  );
  if (step < 2) {
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
           
            {step === 1 && (
              <button
              onClick={() => {
                dispatch(saveNewSquad());
              }}
              className="rounded-lg ml-auto bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
            )}
          </div>
          {step === 2 && (
            <div className="">
              <h1 className="">players :</h1>
            </div>
          )}
        </Card>
      </div>
    );
  } else {
    return (
      <>
        <div className="bg-white relative block overflow-hidden rounded-lg border border-gray-100 p-2 sm:p-2 lg:p-4">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl capitalized">
                {name ? name : "Squad Name"}
              </h3>

              <p className="mt-1 text-xs font-medium text-gray-600">
                Budget :
                <span className="border border-green-400 ml-2 bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  {10000 - TotaleValue}
                </span>
              </p>
            </div>

            <div className="hidden sm:block sm:shrink-0">
              <img
                src={logo.url}
                alt="logo"
                className="h-16 w-16 rounded-lg object-cover shadow-md"
              />
            </div>
          </div>

          <div className="mt-4">
            {step === 2 && (
              <>
                <p className="mb-1 text-center text-sm text-gray-500">
                  Select 16 players to form your squad
                </p>
                <p className="mb-3 text-center text-sm text-gray-500">
                  {players.length} players selected
                </p>
              </>
            )}
          </div>

          <SquadList />
        </div>
      </>
    );
  }
}
