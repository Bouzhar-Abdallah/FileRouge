import React from 'react'
import { Button, Progress } from "flowbite-react";
export default function CreateSquad() {
  return (
    <>
    <div className="bg-blue-300 p-3 mx-auto flex items-center">
      <h2 className="text-xl text-center">
        Create your squad, and join the game now!
      </h2>
      <div>
        <Button
          className="mx-5"
          outline={true}
          gradientDuoTone="purpleToBlue"
        >
          let's go
        </Button>
      </div>
    </div>
    <div className="text-base font-medium">
    Dark
  </div>
  <Progress
    progress={45}
    color="blue"
  />
  </>
  )
}
