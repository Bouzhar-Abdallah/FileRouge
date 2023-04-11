import React from "react";
import { Card, Label, TextInput, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../features/fantazy/squadSlice";
export default function InputName() {
  const { name, isLoading } = useSelector((state) => state.squad);
  const dispatch = useDispatch();
  return (
    <Card>
      <div className=" overflow-scroll">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            dispatch(setName(name));
          }}
          className="flex flex-col gap-4"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your new Squad name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Name"
              required={true}
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
            />
          </div>

          <div className="hidden flex justify-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </Card>
  );
}
