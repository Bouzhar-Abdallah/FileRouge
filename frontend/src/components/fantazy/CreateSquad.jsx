import React, { useEffect } from "react";
import { Button } from "flowbite-react";
import ProgressComp from "../elements/ProgressComp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PlayersC from "./PlayersC";
import Loading from "../Loading";
import { getPlayers } from "../../features/fantazy/playersSlice";
import {
  previousStep,
  nextStep,
  setStarted,
} from "../../features/fantazy/squadSlice";
import SquadInfo from "./SquadInfo";
import Logos from "../elements/Logos";
import InputName from "../elements/InputName";
import ReviewConfirmSquad from "../elements/ReviewConfirmSquad";

export default function CreateSquad() {
  const { name, isLoading, logoURL, logos, hasStarted, step } = useSelector(
    (state) => state.squad
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayers());
  }, []);

  if (!hasStarted) {
    return (
      <>
        <div className="dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
            Create your squad, and join the game now!
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              You need to create a squad to join the botolaPro fantazy
            
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                onClick={() => dispatch(setStarted())}
                className="bg-gradient-to-r from-gradient2 to-gradient1 px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
              >
                Get started
              </button>

            
            </div>
          </div>
        </div>

      </>
    );
  }

  return (
    <>
      {step < 3 && (
        <div className="flex justify-center items-end fixed bottom-0 w-full py-2 gap-2">
          <Button onClick={() => dispatch(previousStep())}>prev</Button>
          <Button onClick={() => dispatch(nextStep())}>next</Button>
        </div>
      )}

      <ProgressComp />
      {step == 3 && <ReviewConfirmSquad />}
      <div className="grid grid-cols-3 justify-between mx-5 gap-5">
        <div className="col-span-2">
          {step == 2 && <PlayersC />}
          {step == 1 && <InputName />}
          {step == 0 && <Logos />}
        </div>
        <div className="">{step < 3 && <SquadInfo />}</div>
      </div>
    </>
  );
}
