import React, { useEffect } from "react";
import { Button } from "flowbite-react";
import ProgressComp from "../elements/ProgressComp";
import { useDispatch, useSelector } from "react-redux";
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
        <div className="bg-blue-300 p-3 mx-auto flex items-center">
          <h2 className="text-xl text-center">
            Create your squad, and join the game now!
          </h2>
          <div>
            <Button
              className="mx-5"
              outline={true}
              gradientDuoTone="purpleToBlue"
              onClick={() => dispatch(setStarted())}
            >
              let's go
            </Button>
          </div>
        </div>
        <h1>section</h1>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-center items-end fixed bottom-0 w-full py-2 gap-2">
        <Button onClick={() => dispatch(previousStep())}>prev</Button>
        <Button onClick={() => dispatch(nextStep())}>next</Button>
      </div>

      <ProgressComp />
      <div className="grid grid-cols-3 justify-between mx-5 gap-5">
        <div className="col-span-2">
          {step == 2 && <PlayersC />}
          {step == 1 && <InputName />}
          {step == 0 && <Logos />}
        </div>
        <div className="">
          <SquadInfo />
        </div>
      </div>
    </>
  );
}
