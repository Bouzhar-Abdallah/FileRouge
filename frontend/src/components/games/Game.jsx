import React from "react";

export default function Game({
  time,
  home_club,
  away_club,
  is_played,
  home_club_score,
  away_club_score,
}) {
  let timeParts = time.split(":"); // split the time string into an array of its component parts
  let hoursAndMinutes = timeParts.slice(0, 2).join(":"); // select the first two parts and join them with a colon

  return (
    <div className="flex w-full items-center my-2">
      <div className="w-1/2 flex justify-between items-center">
        <img className="w-8 h-8 m-1 ml-3" src={home_club.icon_logo_url} alt="" />
        <h1 className="max-md:hidden" >{home_club.name}</h1>
        <h1 className="md:hidden" >{home_club.abreviation}</h1>
      </div>
      {is_played ? (
        <div className="border-r-2 border-l-2 border-green-500 h-10 mx-2 px-4 flex items-center ">
            
            <h1>{home_club_score}</h1>
            <span className="mx-2 ">-</span>
            <h1>{away_club_score}</h1>
        </div>) : (
        <div className="border-r-2 border-l-2 h-10 mx-2 px-4 flex items-center ">
            <h1>{hoursAndMinutes}</h1>
        </div>)
    }
      <div className="w-1/2 flex justify-between items-center">
        <h1 className="max-md:hidden">{away_club.name}</h1>
        <h1 className="md:hidden">{away_club.abreviation}</h1>
        <img className="w-8 h-8 m-1 mr-3" src={away_club.icon_logo_url} alt="" />
      </div>
    </div>
  );
}
