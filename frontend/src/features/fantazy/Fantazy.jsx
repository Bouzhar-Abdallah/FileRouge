import React, { useEffect } from "react";
import { Button} from "flowbite-react";
import Pitch from "../../components/fantazy/Pitch";
import PlayersC from "../../components/fantazy/PlayersC";
import { useDispatch } from "react-redux";
import { getSquad } from "./fantazySlice";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";

export default function Fantazy() {
  const { name, isLoading } = useSelector((state) => state.squad);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSquad());
  }, []);

  if (!isLoading && name == null) {
    return (
      <div className="bg-blue-300 p-3 mx-auto flex items-center">
        <h2 className="text-xl text-center">
          Create your squad, and join the game now!
        </h2>
        <div>
          <Button className="mx-5" outline={true} gradientDuoTone="purpleToBlue">
            let's go
          </Button>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return <Loading />;   
  }else{

      return <div>fantazy</div>;
  }
}
