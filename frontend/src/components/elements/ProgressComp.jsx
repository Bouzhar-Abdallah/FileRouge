import React from "react";
import { Button, Progress, Badge } from "flowbite-react";
import { useSelector } from "react-redux";

export default function ProgressComp() {
  const { step, stepsName } = useSelector((state) => state.squad);
  const percent = 100 / stepsName.length;
  return (
    <>
      <div className="p-5">
        <div className="text-base font-medium my-3 flex items-center">
          <Badge size="sm" color="info">Step : {step +1}</Badge>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <Badge size="sm" color="info">{stepsName[step]}</Badge>
        </div>
        <Progress progress={percent * (step +1) - (percent-1)} color="blue" />
      </div>
    </>
  );
}
