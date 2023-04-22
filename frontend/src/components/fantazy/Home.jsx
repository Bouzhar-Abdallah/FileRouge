import React, { useEffect } from 'react'
import HomeHeader from './HomeHeader'
import Loading from '../Loading'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { decryptData } from '../../utilities/functions'
import { getCompetition } from '../../features/fantazy/competitionSlice'
export default function Home() {
  const { logo, name, isLoading: isSquadLoding, TotaleValue} = useSelector((state) => state.squad)
  const { playersCount, isLoading: isCompetitionLoading, totalPoints, userOverAllRanking} = useSelector((state) => state.competition)
  const {user} = decryptData()
  
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(getCompetition());
}, []);

  if (isCompetitionLoading || isSquadLoding) {
    return <Loading />
  }
  
  return (
    <>
    <HomeHeader />
    <div className="text-darkBlue m-5 flex justify-between">
      <div className=""></div>
      <div className="w-96 flex flex-col shadow-lg rounded-lg rounded-b-none overflow-hidden">
        <div className="flex bg-gradient-to-r from-lightGray to-darkGray items-center justify-between py-2 px-3">
          <div className="flex flex-col">
            <h1 className='font-thin'>{user.name}</h1>
            <h1 className='font-medium'>{name}</h1>
          </div>
          <div className="w-10 h-10 ">
            <img src={logo.url} />
          </div>
        </div>
        <div className="flex flex-col m-2 ">
          <div className="flex py-1 border-t-2 items-center justify-between">
            <h1 className='font-light capitalize'>squad value</h1>
            <h1 className='font-light'>{TotaleValue}</h1>
          </div>
          <div className="flex py-1 border-t-2 items-center justify-between">
            <h1 className='font-light capitalize'>total points</h1>
            <h1 className='font-light'>{totalPoints}</h1>
          </div>
          <div className="flex py-1 border-t-2 items-center justify-between">
            <h1 className='font-light capitalize'>overall ranking</h1>
            <h1 className='font-light'>{userOverAllRanking}</h1>
          </div>
          <div className="flex py-1 border-t-2 items-center justify-between">
            <h1 className='font-light capitalize'>total players</h1>
            <h1 className='font-light'>{playersCount}</h1>
          </div>
         
          <div className="">
            <Link>
            detailes
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
