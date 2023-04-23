import React from "react";
import HomeHeader from "./HomeHeader";
import CompetitionInfo from "../elements/CompetitionInfo";
import WeeklyPoints from "../elements/WeeklyPoints";
import { useSelector } from "react-redux";
export default function Competition() {
const {weeklyPointsPerSelection} = useSelector((state) => state.competition);
console.log(weeklyPointsPerSelection)
  return (
    <>
      <HomeHeader path="Competition" />
      <div className="text-darkBlue m-5 flex justify-between">
        <div className="w-full  md:mr-5 ">
          <div className="rounded-md bg-gradient-to-b from-gradient1 to-transparent w-full  py-4 px-2">
           
            <div className=" bg-white/60 rounded-md my-2">
              <div className="bg-darkBlue text-lightGray flex justify-center items-center mx-5 rounded-lg rounded-t-none font-bold py-0.5">
                <h1> Weekly points </h1>
              </div>
        {weeklyPointsPerSelection != [] ? 
        weeklyPointsPerSelection.map((week) => (
              <div key={week.week_id} className="flex justify-between items-center font-normal py-2 px-4 my-2">
                <span className="font-light mr-2">Gameweek {week.week_id} </span>
                <span className="font-bold"> {week.total_points} Pts</span>
              </div>
        ))
        :(

              <div className="flex justify-between items-center font-normal py-2 px-4 my-2">
                <span className="font-light mr-2">Gameweek deadline: </span>
                <span className="font-bold"> At 00:00</span>
              </div>
        )}
           

            </div>

          </div>

          <div className="relative  mx-auto"></div>
        </div>
        <div className="flex flex-col items-center justify-start gap-5">
          <CompetitionInfo />
          {/* <WeeklyPoints /> */}
        </div>
      </div>
    </>
  );
}
