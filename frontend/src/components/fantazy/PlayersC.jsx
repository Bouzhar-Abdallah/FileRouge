import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayers } from '../../features/fantazy/playersSlice'
export default function PlayersC() {
    const { players, isLoading } = useSelector((state) => state.players)
    console.log(players)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPlayers())
    }, [])
  return (
    <div>PlayersC</div>
  )
}
