import React, { useEffect } from "react";
import HomeHeader from "./HomeHeader";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decryptData } from "../../utilities/functions";
import { getCompetition } from "../../features/fantazy/competitionSlice";
export default function Home() {
  const {
    logo,
    name,
    isLoading: isSquadLoding,
    TotaleValue,
  } = useSelector((state) => state.squad);
  const {
    playersCount,
    isLoading: isCompetitionLoading,
    totalPoints,
    userOverAllRanking,
    selectedPlayers,
  } = useSelector((state) => state.competition);
  const { players: squadPlayers } = useSelector((state) => state.squad);
  const { user } = decryptData();

  const dispatch = useDispatch();

  const selectedPlayerIds = selectedPlayers.map((player) => player.id);

  const substitutes = squadPlayers.filter(
    (player) => !selectedPlayerIds.includes(player.id)
  );
  const defenders = selectedPlayers.filter(
    (player) => player.poste.name === "Defender"
  );
  const midfielders = selectedPlayers.filter(
    (player) => player.poste.name === "Midfielder"
  );
  const forwards = selectedPlayers.filter(
    (player) => player.poste.name === "Forward"
  );
  const goalkeepers = selectedPlayers.filter(
    (player) => player.poste.name === "Goalkeeper"
  );
  function getBgColor(posteName) {
    switch (posteName) {
      case "Goalkeeper":
        return { d: "border-l-black", e: "from-gray-300" };
      case "Defender":
        return { d: "border-l-blue-700", e: "from-blue-200" };
      case "Midfielder":
        return { d: "border-l-green-700", e: "from-green-200" };
      case "Forward":
        return { d: "border-l-red-700", e: "from-red-200" };
      default:
        return "bg-gray-100";
    }
  }
  useEffect(() => {
    dispatch(getCompetition());
  }, []);

  const playerIconUrl =
    "https://res.cloudinary.com/doy8hfzvk/image/upload/v1681843437/soccer-player-people-and-clothing-icons-with-white-background-free-vector_1_-removebg-preview_rvhsoh.png";

  if (isCompetitionLoading || isSquadLoding) {
    return <Loading />;
  }

  return (
    <>
      <HomeHeader />
      <div className="text-darkBlue m-5 flex justify-between">
        <div className="w-full  md:mr-5 ">
          <div className="rounded-md bg-gradient-to-b from-gradient1 to-transparent w-full  py-4 px-2">
            <div className=" bg-white/60 rounded-md">
              <div className="bg-darkBlue text-lightGray flex justify-center items-center mx-5 rounded-lg rounded-t-none font-bold py-0.5">
                <h1>gameweek 1</h1>
              </div>
              <div className="flex justify-center items-center font-normal py-2">
                <span className="font-light mr-2">Gameweek 1 deadline: </span>
                <span className="font-bold"> Tue 25 Apr At 00:00</span>
              </div>
            </div>
          </div>
          <div className="relative lg:h-[740px] md:h-[550px] sm:h-[400px] mx-auto">
            <div className="relative z-10 flex items-center h-full justify-between pr-44 pl-16 ">
              <div className="">
                <img className="w-10" src={playerIconUrl} alt="" />
                <div className="border-l-4 border-l-black bg-gradient-to-r from-gray-300 to-transparent">
                  <h1 className="font-light text-sm py-1">
                    {goalkeepers[0].name}
                  </h1>
                </div>
              </div>
              <div className=" flex flex-col justify-between h-4/5">
                {defenders.map((player) => (
                  <div key={player.id} className="">
                    <img className="w-10" src={playerIconUrl} alt="" />
                    <div className="border-l-4 border-l-blue-700 bg-gradient-to-r from-blue-300 to-transparent">
                      <h1 className="font-light text-sm py-1">{player.name}</h1>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" flex flex-col justify-between h-4/5">
                {midfielders.map((player) => (
                  <div key={player.id} className="">
                    <img className="w-10" src={playerIconUrl} alt="" />
                    <div className="border-l-4 border-l-green-700 bg-gradient-to-r from-green-300 to-transparent">
                      <h1 className="font-light text-sm py-1">{player.name}</h1>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" flex flex-col justify-around h-3/5">
                {forwards.map((player) => (
                  <div key={player.id} className="">
                    <img className="w-10" src={playerIconUrl} alt="" />
                    <div className="border-l-4 border-l-red-700 bg-gradient-to-r from-red-300 to-transparent">
                      <h1 className="font-light text-sm py-1">{player.name}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img
              className="absolute top-0 left-0 p-2"
              src="https://res.cloudinary.com/doy8hfzvk/image/upload/v1681842404/afb9101577d749b22e01ff13d32f5f9e_ykgxhl.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-5">
          <div className=" h-fit w-96 flex flex-col shadow-lg rounded-lg rounded-b-none overflow-hidden">
            <div className="flex bg-gradient-to-r from-lightGray to-darkGray items-center justify-between py-2 px-3">
              <div className="flex flex-col">
                <h1 className="font-thin">{user.name}</h1>
                <h1 className="font-medium">{name}</h1>
              </div>
              <div className="w-10 h-10 ">
                <img src={logo.url} />
              </div>
            </div>
            <div className="flex flex-col m-2 ">
              <div className="flex py-1 border-t-2 items-center justify-between">
                <h1 className="font-light capitalize">squad value</h1>
                <h1 className="font-light">{TotaleValue}</h1>
              </div>
              <div className="flex py-1 border-t-2 items-center justify-between">
                <h1 className="font-light capitalize">total points</h1>
                <h1 className="font-light">{totalPoints}</h1>
              </div>
              <div className="flex py-1 border-t-2 items-center justify-between">
                <h1 className="font-light capitalize">overall ranking</h1>
                <h1 className="font-light">{userOverAllRanking}</h1>
              </div>
              <div className="flex py-1 border-t-2 items-center justify-between">
                <h1 className="font-light capitalize">total players</h1>
                <h1 className="font-light">{playersCount}</h1>
              </div>

              <div className="">
                <Link>detailes</Link>
              </div>
            </div>
          </div>
          <div className=" h-fit w-96 flex flex-col shadow-lg rounded-lg rounded-b-none overflow-hidden">
            <div className="flex bg-gradient-to-r from-lightGray to-darkGray items-center justify-center py-2 px-3">
              <div className="  rounded-md w-auto px-3 py-2">
                <div className="bg-darkBlue px-5 text-lightGray flex justify-center items-center rounded-lg rounded-t-none font-bold py-0.5">
                  <h1 className="capitalize">substitutes</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col m-2 gap-2">
              {substitutes.map((player) => (
                <>
                  <div
                    className={`flex items-center border-l-4  ${
                      getBgColor(player.poste.name).e
                    } to-transparent bg-gradient-to-r ${
                      getBgColor(player.poste.name).d
                    }`}
                  >
                    <h1 className="text-xs w-6  px-1 text-center">
                      {player.poste.name.substring(0, 3)}
                    </h1>
                    <h1 className="px-2 py-1">{player.name}</h1>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
