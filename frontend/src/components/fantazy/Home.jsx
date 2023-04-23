import React, { useEffect } from "react";
import HomeHeader from "./HomeHeader";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decryptData } from "../../utilities/functions";
import { getCompetition } from "../../features/fantazy/competitionSlice";
export default function Home() {
  return (
    <>
      <HomeHeader path="Home" />
      <section>
        <div className="dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Welcome to BotolaPro Fantazy
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              select 11 players for each week and collect as much points as you can !
            </p>
            <div className="flex flex-wrap justify-center">
            
              
              <Link
              className="bg-gradient-to-r from-gradient2 to-gradient1  px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
              to="/selection"
            >
              Week Selection
            </Link>
            </div>
          </div>
        </div>
      
      </section>
    </>
  );
}
