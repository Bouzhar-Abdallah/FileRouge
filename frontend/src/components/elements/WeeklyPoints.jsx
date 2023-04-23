import React from 'react'

export default function WeeklyPoints() {
  return (
    <div className=" h-fit w-96 flex flex-col shadow-lg rounded-lg rounded-b-none overflow-hidden">
            <div className="flex bg-gradient-to-r from-lightGray to-darkGray items-center justify-center py-2 px-3">
              <div className="  rounded-md w-auto px-3 py-2">
                <div className="bg-darkBlue px-5 text-lightGray flex justify-center items-center rounded-lg rounded-t-none font-bold py-0.5">
                  <h1 className="capitalize">weekly points</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col m-2 gap-2">
              <div >
                <div className="flex items-center justify-between">
                  <h1 className="text-xs w-6  px-1 text-center">test</h1>
                  <h1 className="px-2 py-1">test</h1>
                </div>
                <hr />
              </div>
              <div >
                <div className="flex items-center justify-between">
                  <h1 className="text-xs w-6  px-1 text-center">test</h1>
                  <h1 className="px-2 py-1">test</h1>
                </div>
                <hr />
              </div>
              <div >
                <div className="flex items-center justify-between">
                  <h1 className="text-xs w-6  px-1 text-center">test</h1>
                  <h1 className="px-2 py-1">test</h1>
                </div>
                <hr />
              </div>
            </div>
          </div>
  )
}
