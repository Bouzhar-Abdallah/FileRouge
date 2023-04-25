import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStandings } from "./standingsSlice";
import Loading from "../../components/Loading";
import { Spinner } from "flowbite-react";
export default function Standings() {
  const { standings, isLoading } = useSelector((state) => state.standing);
  const { clubs } = useSelector((state) => state.clubs);
console.log(clubs)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStandings());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (standings.length === 0) {
    return (
      <div className="w-fit">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-3 lg:px-8">
              <div className="shadow overflow-hidden ">
                <div className="p-3 bg-white flex justify-center items-center">
                  <h1 className="">Matchweek 1</h1>
                </div>
                <div className="h-10 bg-[#3792F9]"></div>
                <table className="min-w-full text-sm text-darkBlue bg-white">
                  <thead className=" text-xs uppercase font-medium">
                    <tr>
                      <th></th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left tracking-wider"
                      >
                        Club
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left tracking-wider"
                      >
                        MP
                      </th>
                      
                      
                      
                      <th
                        scope="col"
                        className="px-3 py-3 text-left tracking-wider"
                      >
                        GD
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left tracking-wider"
                      >
                        Pts
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody className="">
                    {clubs.map((standing) => {
                      let rank = clubs.indexOf(standing) + 1;
                      return (
                        <tr
                          key={standing.id}
                          className="bg-white border-b"
                        >
                          <td className="pl-4">{rank}</td>
                          <td className="flex px-3 py-4 whitespace-nowrap">
                            <img
                              className="w-5"
                              src={standing.icon_logo_url}
                              alt=""
                            />
                            <span className="ml-2 font-medium">
                              {standing.name}
                            </span>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            0
                          </td>
                          
                          <td className="px-3 py-4 whitespace-nowrap">
                            o
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            0
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
  } else
    return (
      <div className="w-fit">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-3 lg:px-8">
              <div className="shadow overflow-hidden ">
                <div className="p-3 bg-white flex justify-center items-center">
                  <h1 className="">Matchweek 10</h1>
                </div>
                <div className="h-10 bg-[#3792F9]"></div>
                <table className="min-w-full text-sm text-darkBlue bg-white">
                  <thead className=" text-xs uppercase font-medium">
                    <tr>
                      <th></th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left tracking-wider"
                      >
                        Club
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left tracking-wider"
                      >
                        MP
                      </th>
                      
                      
                      
                      <th
                        scope="col"
                        className="px-3 py-3 text-left tracking-wider"
                      >
                        GD
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left tracking-wider"
                      >
                        Pts
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody className="">
                    {standings.map((standing) => {
                      let rank = standings.indexOf(standing) + 1;
                      return (
                        <tr
                          key={standing.id}
                          className="bg-white border-b"
                        >
                          <td className="pl-4">{rank}</td>
                          <td className="flex px-3 py-4 whitespace-nowrap">
                            <img
                              className="w-5"
                              src={standing.icon_logo_url}
                              alt=""
                            />
                            <span className="ml-2 font-medium">
                              {standing.name}
                            </span>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            {standing.games_played}
                          </td>
                          
                          <td className="px-3 py-4 whitespace-nowrap">
                            {standing.goals_for - standing.goals_against}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            {standing.points}
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
