import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../../features/fantazy/playersSlice";
import { selectPlayer, setRandomSquad } from "../../features/fantazy/squadSlice";
import Loading from "../Loading";
export default function PlayersC() {
  const { players, isLoading } = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const { clubs } = useSelector((state) => state.clubs);
  const [playersFiltered, setPlayersFiltered] = useState(players);

  useEffect(() => {
    setPlayersFiltered(players);
  }, [players]);

  const [club, setClub] = useState("All Clubs");
  const [poste, setPoste] = useState("All Postes");
  const [search, setSearch] = useState("");

  const filterPlayers = () => {
    const filteredPlayers = players.filter((player) => {
      const clubMatch = club == "All Clubs" || player.club.id == club;
      const posteMatch = poste == "All Postes" || player.poste.name == poste;
      const nameMatch = player.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return clubMatch && posteMatch && nameMatch;
    });
    setPlayersFiltered(filteredPlayers);
  };
/*  */
const RandomSquad = () => {
  let randomPlayers = [];
  let numPlayers = 16;
  let maxTries = 100;

  while (randomPlayers.length < numPlayers && maxTries > 0) {
    let randomIndex = Math.floor(Math.random() * players.length);
    let randomPlayer = players[randomIndex];

    if (!randomPlayers.includes(randomPlayer)) {
      randomPlayers.push(randomPlayer);
    }

    maxTries--;
  }
  dispatch(setRandomSquad(randomPlayers)); 
};
/*  */
  useEffect(() => {
    filterPlayers();
  }, [club, poste, search]);

  if (!isLoading) {
    return (
      <div className="antialiased font-sans ">
        <div className="container mx-auto">
          <div className="">
            <div className="">
              <div className=" my-2 flex sm:flex-row flex-col justify-center">
                <div className="flex flex-row mb-1 sm:mb-0">
                  <div className="relative">
                    <select
                      onChange={(e) => setClub(e.target.value)}
                      className=" h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="All Clubs">All clubs</option>
                      {clubs.map((club) => (
                        <option value={club.id} key={club.id}>
                          {club.name}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <select
                      onChange={(e) => setPoste(e.target.value)}
                      className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                    >
                      <option value="All Postes">All Postes</option>
                      <option value="Goalkeeper">Goalkeeper</option>
                      <option value="Defender">Defender</option>
                      <option value="Midfielder">Midfielder</option>
                      <option value="Forward">Forward</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="block relative">
                  <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current text-gray-500"
                    >
                      <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                    </svg>
                  </span>
                  <input
                  onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <button onClick={
                () => {
                  RandomSquad();
                }
              } className="p-3 bg-indigo-500">test</button>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Player
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Poste
                      </th>
                      <th className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-5 py-3 flex justify-center border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Buy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {playersFiltered.map((player) => (
                      <tr key={player.id}>
                        <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src={player.club.icon_logo_url}
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {player.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {player.poste.name}
                          </p>
                        </td>
                        <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-right">
                            {player.price}0 000 MAD
                          </p>
                        </td>
                        <td className="px-2 py-2  border-b border-gray-200 bg-white text-sm ">
                          <div className="flex justify-around">
                            <button
                              onClick={() => {
                                dispatch(selectPlayer(player));
                              }}
                            >
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="hidden px-2 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing 1 to 4 of 50 Entries
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                      Prev
                    </button>
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
