import React from "react";
import { ListGroup } from "flowbite-react";
import { useSelector } from "react-redux";
export default function Squad() {
  const { name, isLoading, hasSquad, TotaleValue, players } = useSelector(
    (state) => state.squad
  );
  return (
    <div className="w-fit">
      <ListGroup>
          <ListGroup.Item active={true} key="1232">
            <div className="flex">
              <div className="w-32 text-left">poste</div>
              <div className="w-48 text-left">player</div>
              <div className=" text-left">price</div>
            </div>
          </ListGroup.Item>
        {players.map((player) => (
          <ListGroup.Item key={player.id}>
            <div className="flex ">
              <div className="w-32 text-left">{player.poste.name}</div>
              <div className="w-48 text-left">{player.name}</div>
              <div className=" text-left">{player.price}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
