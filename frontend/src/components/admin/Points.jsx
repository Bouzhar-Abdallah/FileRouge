import React, { useEffect, useState } from "react";
import AdminHeader from "../fantazy/AdminHeader";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getEvents, updatePostePoint } from "../../features/AdminPoints/adminPointsSlice";

import Loading from "../Loading";
export default function Points() {
  const { isLoading, events } = useSelector((state) => state.points);
  const [mode, setMode] = useState("read");
  const [posteID, setPosteID] = useState(0);
  const [newPostePoint, setNewPostePoint] = useState(0);
  
  const path = "Points";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <AdminHeader path={path} />

      <div className="m-10">
        <div className="border flex justify-between p-2 bg-gradient-to-l from-gradient2 to-lightBlue">
          <h1 className="px-5 py-2">event</h1>
          <div className="grid grid-cols-4 w-3/4 items-center">
            <h1 className="px-5 py-2 text-center border-l">Goalkeeper</h1>
            <h1 className="px-5 py-2 text-center border-l">Defender</h1>
            <h1 className="px-5 py-2 text-center border-l">Midfielder</h1>
            <h1 className="px-5 py-2 text-center border-l">Forward</h1>
          </div>
        </div>
        {events.map((event, index) => (
          <div key={index} className="flex justify-between mx-2 border-b">
            <h1 className="py-3 pl-3">{event.name}</h1>
            <div className="grid grid-cols-4 gap-4  w-3/4 items-center">
              {event.event_poste.map((poste, index) => (
                <div className="items-center text-center py-3" key={index}>
                  {mode === "edit" && posteID === poste.id ? (
                    <div className="w-full flex items-center">
                      <input
                        className="w-3/4"
                        type="text"
                        defaultValue={poste.points}
                        onChange={(input)=>setNewPostePoint(input.target.value)}
                      />
                      <button
                      onClick={()=>{dispatch(updatePostePoint({id:poste.id,newPoints:newPostePoint}));setMode("read");setPosteID(0);}}
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 border p-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setMode("edit");
                        setPosteID(poste.id);
                      }}
                    >
                      {poste.points}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
