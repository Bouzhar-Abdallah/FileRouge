import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Pitch() {
  const { name, logo, players } = useSelector((state) => state.squad);
  const playerIconUrl =
    "https://res.cloudinary.com/doy8hfzvk/image/upload/v1681843437/soccer-player-people-and-clothing-icons-with-white-background-free-vector_1_-removebg-preview_rvhsoh.png";
  const goalKeepers = players.filter(
    (player) => player.poste.name === "Goalkeeper"
  );
  const defenders = players.filter(
    (player) => player.poste.name === "Defender"
  );
  const midfielders = players.filter(
    (player) => player.poste.name === "Midfielder"
  );
  const forwards = players.filter((player) => player.poste.name === "Forward");

  return (
    <>
      <div className="bg-pitch bg-contain w-[750px] h-[550px]">
        <div className="flex items-center h-full w-full justify-between pr-44 pl-10 ">
          <div className="">
            <img className="w-10" src={playerIconUrl} alt="" />
          </div>
          <div className=" flex flex-col justify-between h-4/5">
            <img className="w-10" src={playerIconUrl} alt="" />
            <img className="w-10" src={playerIconUrl} alt="" />
            <img className="w-10" src={playerIconUrl} alt="" />
            <img className="w-10" src={playerIconUrl} alt="" />
          </div>
          <div className=" flex flex-col justify-between h-4/5">
            <img className="w-10" src={playerIconUrl} alt="" />
            <img className="w-10" src={playerIconUrl} alt="" />
            <img className="w-10" src={playerIconUrl} alt="" />
            <img className="w-10" src={playerIconUrl} alt="" />
          </div>
          <div className=" flex flex-col justify-around h-3/5">
            <img className="w-10" src={playerIconUrl} alt="" />
            <img className="w-10" src={playerIconUrl} alt="" />
            
          </div>
        </div>
      </div>

      {goalKeepers.map((player) => {
        return (
          <div className=" flex flex-col items-center">
            <p>{player.name}</p>
            <p>{player.price}</p>
          </div>
        );
      })}
    </>
  );
}
