import React from "react";
import { Card } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { setLogo } from "../../features/fantazy/squadSlice";
export default function Logos() {
  const { logos, isLoading } = useSelector((state) => state.squad);
  const dispatch = useDispatch();
  return (
    <Card>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 h-80 overflow-scroll">
        {logos.map((logo) => (
          <button 
          onClick={() => dispatch(setLogo(logo))}
          key={logo.id}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={logo.url}
              alt=""
            />
          </button>
        ))}
      </div>
    </Card>
  );
}
