import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStandings } from "./standingsSlice";
import { Spinner } from "flowbite-react";
export default function Standings() {
  const { standings, isLoading } = useSelector((state) => state.standing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStandings());
  }, []);
  return isLoading ? (
    <ul role="list" className="space-y-5 md:mx-20">
      <li className="bg-white shadow overflow-hidden  sm:rounded-md">
        <div className="relative my-3">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-sm text-gray-500">loading</span>
          </div>
        </div>
        <div className="bg-white  overflow-hidden rounded-md">
          <ul role="list" className="divide-y divide-gray-300 my-5">
            <li className="mx-5 flex justify-center">
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </li>
          </ul>
        </div>
      </li>
    </ul>
  ) : (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900 py-10">
      
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full text-sm text-gray-400">
                <thead className="bg-gray-800 text-xs uppercase font-medium">
                  <tr>
                    <th></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Club
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      MP
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      W
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      D
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      L
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      GF
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      GA
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      GD
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Pts
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Last 5
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800">
                  {standings.map((standing) => {
                    console.log(standing)
                    return (
                      <tr key={standing.id} className="bg-black bg-opacity-20">
                        <td className="pl-4">1</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                          <img
                            className="w-5"
                            src={standing.icon_logo_url}
                            alt=""
                          />
                          <span className="ml-2 font-medium">{standing.name}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{standing.games_played}</td>
                        <td className="px-6 py-4 whitespace-nowrap">-</td>
                        <td className="px-6 py-4 whitespace-nowrap">-</td>
                        <td className="px-6 py-4 whitespace-nowrap">-</td>
                        <td className="px-6 py-4 whitespace-nowrap">{standing.goals_for}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{standing.goals_against}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{standing.goals_for - standing.goals_against }</td>
                        <td className="px-6 py-4 whitespace-nowrap">{standing.points}</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                          <svg
                            className="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            className="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            className="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            className="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            className="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
